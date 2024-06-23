<script>
  import experience from "$lib/experience";
  import Experience from "./Experience.svelte";
</script>

<div class="experience">
  <table>
    <tbody>
      {#each experience as exp}
        <Experience expKey={exp} />
      {/each}
    </tbody>
  </table>
</div>

