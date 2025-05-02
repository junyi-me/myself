<script lang="ts">
  import experience from "$lib/data/experience";
  import type { TimeEventType } from "$lib/timeline/types";
  import { onMount } from "svelte";
  import Experience from "./Experience.svelte";
  import { DataSet, Timeline } from "vis-timeline/standalone";

  let focus = $state(experience[0]);
  let anchor: HTMLDivElement;
  const events: TimeEventType[] = experience.map(exp => {
    return {
      txTitle: exp.txTitle,
      txOrg: exp.txOrg,
      startDate: exp.startDate,
      endDate: exp.endDate,
      color: exp.color,
      onClick: () => {
        focus = exp;
      },
    };
  });

  let container: HTMLDivElement;
  onMount(() => {
    const items = new DataSet([
      { id: 1, content: 'item 1', start: '2013-04-20' },
      { id: 2, content: 'item 2', start: '2013-04-14' },
      { id: 3, content: 'item 3', start: '2013-04-18' },
      { id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19' },
      { id: 5, content: 'item 5', start: '2013-04-25' },
      { id: 6, content: 'item 6', start: '2013-04-27' }
    ]);
    const options = {};
    const timeline = new Timeline(container, items, options);

    // Add click event
    timeline.on("click", function (properties) {
      console.log(properties);
      if(properties.item){
        const item = items.get(properties.item);
      }
    });
  });

</script>

<div bind:this={anchor}>
  <div bind:this={container} id="timeline"></div>
  <Experience exp={focus} />
</div>

<style>
</style>

