<script>
  import TechRow from "./TechRow.svelte";
</script>

<div>
  <table>
    <tbody>
      <TechRow title="Frontend" key="frontend" />
      <TechRow title="Backend" key="backend" />
      <TechRow title="Database" key="database" />
      <TechRow title="CI/CD" key="ci_cd" />
      <TechRow title="Cloud" key="cloud" />
      <TechRow title="Others" key="others" />
    </tbody>
  </table>
</div>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
</style>

