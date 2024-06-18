<script lang="ts">
  import tech from "$lib/techs";
  import { fade, slide } from "svelte/transition";
  import Tech from "./Tech.svelte";
  import { t } from '$lib/i18n';

  export let title: string;
  export let key: string;

  let focusIndex: number | null = null;

  const techs = tech[key];
</script>

<tr>
  <td class="title">
    <h3>{title}</h3>
  </td>
  <td class="techs">
    {#each techs as { name, img }, i}
      <Tech name={name} img={img} onClick={() => {
        if (focusIndex === i) {
          focusIndex = null;
        } else {
          focusIndex = i;
        }
      }} />
    {/each}
  </td>
</tr>

<tr class="drawer">
  <td colspan="2" class:collapsed={focusIndex == null}>
    {#if focusIndex !== null}
      <div class="tech-detail" transition:slide>
        {@html $t(`tech.${techs[focusIndex].key}.description`)}
      </div>
    {/if}
  </td>
</tr>

<style>
  .title {
    text-align: right;
    padding-left: 1em;
  }
  
  .drawer td {
    padding: 0;
  }

  td.techs {
    display: flex;
    flex-wrap: wrap;
    padding-left: 1em;
    justify-content: left;
  }

  td {
    padding-top: 1em;
    align-items: center;
  }

  tr.drawer:not(:last-child) {
    border-bottom: 1px solid var(--fg-1);
  }

  h3 {
    margin: auto 1em auto 0;
  }
</style>
