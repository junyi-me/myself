<script lang="ts">
  import { t } from "$lib/i18n";
  import type { IslandType } from "./types";

  export let island: IslandType;
  export let blur = false;
</script>

<div class="container" class:blur>
  <button class="event" style="margin-left: {island.offset}px; width: {island.width}px; background-color: {island.color}" 
    on:click={e => {
      e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
      island.onClick();
    }}>
    {$t(island.txTitle)} @ {$t(island.txOrg)}
  </button>
</div>

<style>
  .container {
    display: inline-block;
    position: relative;
  }

  .blur {
    opacity: 0.5;
    transition: opacity 0.5s;
  }

  .event {
    border: none;
    padding: 0.5em;
    margin: 0;
    cursor: pointer;
    color: var(--fg-1);
    font-size: 1em;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
