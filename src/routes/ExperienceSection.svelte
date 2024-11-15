<script lang="ts">
  import experience from "$lib/data/experience";
  import Timeline from "$lib/timeline/Timeline.svelte";
  import type { TimeEventType } from "$lib/timeline/types";
  import Experience from "./Experience.svelte";

  let focus = experience[0];
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
</script>

<div>
  <div>
    <Timeline {events} />
  </div>
  <Experience exp={focus} />
</div>

<style>
</style>

