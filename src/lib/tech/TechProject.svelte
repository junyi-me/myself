<script lang="ts">
  import { t } from "$lib/i18n";
  import type { PProjectType } from "$lib/types";

  export let proj: PProjectType;
</script>

<div class="container">
  <a href={proj.link} target="_blank">
    <img src={proj.img} alt={proj.txTitle} />
    <p>{$t(proj.txTitle)}</p>
  </a>
  {#if proj.txDescription}
    <p class="desc">{$t(proj.txDescription)}</p>
  {/if}
</div>

<style>
  .container {
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: var(--gap-small);
  }

  @media screen and (max-width: 800px) {
    .container {
      flex-direction: column;
      gap: 0;
      align-items: flex-start;
    }
  }

  a {
    text-decoration: none;
    color: var(--fg-1);
    display: flex;
    align-items: center;
    border: var(--card-border);
    border-radius: 1em;
    padding: var(--gap-tiny) var(--gap-small);
    gap: var(--gap-tiny);
  }

  p {
    margin: 0;
  }

  .desc {
    margin-left: var(--gap-small);
  }

  img {
    max-height: 1em;
  }
</style>

