<script>
  import experience from "$lib/data/experience";
  import Experience from "./Experience.svelte";
</script>

<div class="experience">
  <table>
    <tbody>
      <td rowspan="100" class="timeline"></td>
      {#each experience as exp}
        <Experience expKey={exp} />
      {/each}
    </tbody>
  </table>
</div>

<style>
  table {
    border-collapse: collapse;
  }
</style>

