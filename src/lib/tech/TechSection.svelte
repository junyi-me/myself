<script lang="ts">
  import TechRow from "./TechRow.svelte";
  import techs from "$lib/data/techs";
  import type { TechCategoryKeyType } from "$lib/data/techs";

  type TechCategoryType = {
    key: TechCategoryKeyType;
    name: string;
  };

  const techCats: TechCategoryType[] = [
    { key: 'frontend', name: 'Frontend' },
    { key: 'backend', name: 'Backend' },
    { key: 'database', name: 'Database' },
    { key: 'ci_cd', name: 'CI/CD' },
    { key: 'cloud', name: 'Cloud' },
    { key: 'gamedev', name: 'Game Development' },
    { key: 'others', name: 'Others' },
  ];

  let focusRow = -1;
</script>

<div>
  {#each techCats as { key, name }, i}
    <TechRow title={name} techList={techs[key]} row={i} bind:focusRow={focusRow} />
  {/each}
</div>

