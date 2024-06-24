<script lang="ts">
  import type { TechType } from "$lib/types";
  import { slide } from "svelte/transition";
  import Tech from "./Tech.svelte";
  import TechDrawer from "./TechDrawer.svelte";

  export let title: string;
  export let techList: TechType[];
  export let row: number;
  export let focusRow: number;

  let focusIndex: number | null = null;
  let tech;

  $: if (row !== focusRow) {
    focusIndex = null;
  }
  $: tech = techList[focusIndex ?? 0]
</script>

<tr>
  <td class="title">
    <h3>{title}</h3>
  </td>
  <td class="techs">
    {#each techList as { key, name, img }, i}
      <Tech name={name} {key} {img} onClick={() => {
        if (focusIndex === i) {
          focusIndex = null;
        } else {
          focusIndex = i;
        }
        focusRow = row;
      }} focus={focusIndex === i} />
    {/each}
  </td>
</tr>

<tr class="drawer">
  <td colspan="2" class:collapsed={focusIndex == null}>
    {#if focusIndex !== null}
      <div class="tech-detail" transition:slide>
        <TechDrawer tech={tech} />
      </div>
    {/if}
  </td>
</tr>

<style>
  .title {
    text-align: right;
    width: 8em;
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
    border-bottom: 1px solid var(--bg-3);
  }

  tr.drawer {
    align-items: center;
  }

  h3 {
    margin: auto 1em auto 0;
  }

  .tech-detail {
    padding: 1em;
    margin-bottom: 1em;
    color: var(--fg-1);
  }
</style>
