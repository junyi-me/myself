<script lang="ts">
  import { t } from "$lib/i18n";
  import Event from "./Event.svelte";
  import type { IslandType, TimeEventType } from "./types";

  export let events: TimeEventType[] = [];

  const TIMELINE_WIDTH = 1000;
  const minDate = Math.min(...events.map(event => event.startDate.getTime()));
  const maxDate = Math.max(
    ...events.map(event => (event.endDate ? event.endDate.getTime() : Date.now()))
  );

  function convertEventsToIslands(events: TimeEventType[]): IslandType[][] {
    let lvlLands: IslandType[][] = [];
    let id = 0;
    const timelineDuration = maxDate - minDate;

    events.sort((a, b) => a.startDate.getTime() - b.startDate.getTime()).forEach(event => {
      const startOffset = event.startDate.getTime() - minDate;
      const endOffset = (event.endDate ? event.endDate.getTime() : Date.now()) - minDate;

      // Calculate offset and width based on timeline duration
      let offset = (startOffset / timelineDuration) * TIMELINE_WIDTH;
      const width = ((endOffset - startOffset) / timelineDuration) * TIMELINE_WIDTH;

      // Determine level based on overlaps with previous events
      let level = 0;
      while (lvlLands[level]) {
        const last = lvlLands[level][lvlLands[level].length - 1];
        if (last.offset + last.width <= offset) {
          break;
        }
        level++;
      }

      let last = null;
      if (!lvlLands[level]) {
        lvlLands[level] = [];
      } else {
        last = lvlLands[level][lvlLands[level].length - 1];
        const prevOffsetSum = lvlLands[level].map(e => e.offset + e.width).reduce((a, b) => a + b, 0);
        offset = offset - prevOffsetSum;
      }
      const iid = id;
      lvlLands[level].push({
        id: iid,
        label: $t(event.txTitle) + " @ " + $t(event.txOrg),
        offset,
        width,
        color: event.color,
        onClick: () => {
          focusId = iid;
        },
        startDate: event.startDate,
        endDate: event.endDate,
      });
      id++;
    });

    return lvlLands;
  }

  let focusId = events.length - 1;
  $: events[focusId].onClick();
  let lvlLands = convertEventsToIslands(events);
  let outer: HTMLDivElement;
  $: if (outer) outer.scrollLeft = TIMELINE_WIDTH;
</script>

<div class="outer" bind:this={outer}>
  <div class="inner">
    {#each lvlLands as islands}
      <div class="row">
        {#each islands as island}
          <Event {island} blur={island.id !== focusId} />
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .outer {
    overflow-x: scroll;
    background-color: var(--bg-2);
  }

  .inner {
    width: fit-content;
    position: relative;
    padding-bottom: 1em;
  }

  .row {
    display: flex;
  }
</style>
