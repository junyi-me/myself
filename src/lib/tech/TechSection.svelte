<script lang="ts">
  import TechRow from "./TechRow.svelte";
  import techs from "$lib/data/techs";
  import type { TechCategoryKeyType } from "$lib/data/techs";

  type TechCategoryType = {
    key: TechCategoryKeyType;
    txTitle: string;
  };

  let techCats: TechCategoryType[]|null = $state(null);
  techCats = [
    { key: 'frontend', txTitle: 'home.tech.frontend'},
    { key: 'backend', txTitle: 'home.tech.backend'},
    { key: 'database', txTitle: 'home.tech.database'},
    { key: 'ci_cd', txTitle: 'home.tech.cicd'},
    { key: 'infra', txTitle: 'home.tech.infra'},
    { key: 'automation', txTitle: 'home.tech.automation'},
    { key: 'others', txTitle: 'home.tech.others'},
  ];

  let focusRow = $state(-1);
</script>

<div>
  {#if techCats}
    {#each techCats as { key, txTitle }, i}
      <TechRow {txTitle} techList={techs[key]} row={i} bind:focusRow={focusRow} />
    {/each}
  {/if}
</div>

