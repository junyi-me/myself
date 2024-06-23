<script lang="ts">
  import type { ArticleType } from "$lib/types";

  export let article: ArticleType;
  export let side = false;

  const SLOTS = $$props.$$slots
</script>

<div class="container" id={article.name} class:side={side}>
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

<style>
  .container {
    max-width: 1200px;
    padding: var(--content-padding);
    margin: var(--content-margin);
    transition: background-color 0.3s linear;
    display: flex;
    flex-direction: column;
    gap: var(--content-margin);
  }

  .container.side {
    flex-direction: row;
  }

  .container .side {
    max-width: 50%;
  }

  h1 {
    color: var(--fg-2);
  }
</style>

