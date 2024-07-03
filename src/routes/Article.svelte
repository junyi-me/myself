<script lang="ts">
  import type { ArticleType } from "$lib/types";

  export let article: ArticleType;
  export let side = false;
  export let last = false;

  const SLOTS = $$props.$$slots
</script>

<div class="container" class:last={last}>
  <div id={article.name} class="main" class:side={side}>
    <div class:side={side}>
      <h1>{article.title}</h1>
      {@html article.content}
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

  .main:hover {
    box-shadow: 0 0 10px 0 var(--fg-3);
  }

  .main.side {
    flex-direction: row;
  }

  .main .side {
    max-width: 50%;
  }

  h1 {
    color: var(--fg-2);
  }
</style>

