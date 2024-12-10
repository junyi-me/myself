<script lang="ts">
  import type { TechType } from "$lib/types";
  import { slide } from "svelte/transition";
  import Tech from "./Tech.svelte";
  import TechDrawer from "./TechDrawer.svelte";
  import { t } from "$lib/i18n";

  interface Props {
    txTitle: string;
    techList: TechType[];
    row: number;
    focusRow: number;
  }
  let { txTitle, techList, row, focusRow = $bindable() }: Props = $props();

  let focusIndex: number | null = $state(null);
  let tech = $derived(techList[focusIndex ?? 0]);

  $effect(() => {
    if (row !== focusRow) {
      focusIndex = null;
    }
  });
  
</script>

<div class="container">
  <h3>{$t(txTitle)}</h3>
  <div class="techs">
    {#each techList as { key, name, img, darkImg }, i}
      <Tech name={name} {key} {img} {darkImg} onClick={() => {
        if (focusIndex === i) {
          focusIndex = null;
        } else {
          focusIndex = i;
        }
        focusRow = row;
      }} focus={focusIndex === i} />
    {/each}
  </div>

  <div class="drawer">
    <div class:collapsed={focusIndex == null}>
      {#if focusIndex !== null}
        <div class="tech-detail" transition:slide>
          <TechDrawer tech={tech} />
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .container:not(:last-child) {
    border-bottom: 1px solid var(--bg-3);
    padding-bottom: var(--gap-small);
  }

  h3 {
    margin-top: var(--gap-medium);
  }

  .techs {
    display: flex;
    flex-wrap: wrap;
  }

  .tech-detail {
    margin-bottom: 1em;
    color: var(--fg-1);
  }
</style>
