<script>
  import TechRow from "./TechRow.svelte";
  import techs from "$lib/data/techs";

  const techCats = [
    { key: 'frontend', name: 'Frontend' },
    { key: 'backend', name: 'Backend' },
    { key: 'database', name: 'Database' },
    { key: 'ci_cd', name: 'CI/CD' },
    { key: 'cloud', name: 'Cloud' },
    { key: 'others', name: 'Others' },
  ];

  let focusRow = -1;
</script>

<div>
  <table>
    <tbody>
      {#each techCats as { key, name }, i}
        <TechRow title={name} techList={techs[key]} row={i} bind:focusRow={focusRow} />
      {/each}
    </tbody>
  </table>
</div>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
</style>

