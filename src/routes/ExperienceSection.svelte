<script>
  import experience from "$lib/data/experience";
  import Experience from "./Experience.svelte";
</script>

<div class="experience">
  <td rowspan="100" class="timeline"></td>
  {#each experience as exp}
    <Experience {exp} />
  {/each}
</div>

<style>
</style>

