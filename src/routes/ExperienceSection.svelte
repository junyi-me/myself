<script lang="ts">
  import experience from "$lib/data/experience";
  import { onMount } from "svelte";
  import Experience from "./Experience.svelte";
  import { DataSet, Timeline } from "vis-timeline/standalone";
  import { locale, t } from "$lib/i18n";
  import { get } from "svelte/store";

  let focus = $state(0);

  let container: HTMLDivElement;
  let timeline: Timeline;
  const initTimeline = () => {
    const options = {
      type: "range",
      margin: {
        item: {
          horizontal: 0,
        },
      },
    };
    // @ts-ignore
    timeline = new Timeline(container, [], options);

    timeline.on("click", function (properties) {
      if (properties.item === null) return;
      const item = timeline.getEventProperties(properties.item);
      // @ts-ignore
      focus = item.event;
    });
  };
  onMount(() => {
    initTimeline();
    populateTimeline();
  });

  const populateTimeline = () => {
    if (!timeline) return;

    const now = new Date();
    const trans = get(t); // use the updated translation function

    const its = experience.map((exp, index) => ({
      id: index,
      content: trans(exp.txTitle) + " @ " + trans(exp.txOrg),
      start: exp.startDate,
      end: exp.endDate ?? now,
      style: "background-color: " + exp.color,
    }));
    const items = new DataSet(its);
    timeline.setItems(items);

    const exps = [...experience];
    timeline.setWindow(
      exps.sort((a, b) => a.startDate.getTime() - b.startDate.getTime())[0].startDate,
      exps[experience.length - 1].endDate ?? now
    );
  }

  locale.subscribe((e) => {
    populateTimeline();
  });
</script>

<div>
  <div bind:this={container} id="timeline"></div>
  <Experience exp={experience[focus]} />
</div>

<style>
</style>

