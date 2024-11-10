<script lang="ts">
  import { t } from '$lib/i18n';
  import type { ArticleKeyType } from "$lib/data/articles";
  import { articles } from '$lib/data/articles';

  export let key: ArticleKeyType;
  export let side = false;
  export let last = false;

  const article = articles[key];

  const SLOTS = $$props.$$slots
</script>

<div class="container" class:last={last}>
  <div id={key} class="article main hovee" class:side={side}>
    <div class:side={side}>
      <h1>{$t(article.txTitle)}</h1>
      {@html $t(article.txContent)}
    </div>
    {#if SLOTS}
      <div class:side={side}>
        <slot />
      </div>
    {/if}
  </div>
</div>

<style>
  .container {
    width: 100%;
  }

  .container:not(.last) {
    border-bottom: 1px dashed var(--bg-3);
  }

  .main {
    max-width: 1200px;
    padding: var(--article-padding);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: var(--content-margin);
    transition: box-shadow 0.2s linear, background-color 0.3s linear;
  }

  .main.side {
    flex-direction: row;
  }

  .main .side {
    max-width: 50%;
  }

  h1 {
    color: var(--accent);
  }
</style>

