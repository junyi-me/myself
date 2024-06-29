<script lang="ts">
  import type { ArticleType } from "$lib/types";

  export let article: ArticleType;
  export let side = false;
  export let dark = false;

  const SLOTS = $$props.$$slots
</script>

<div class:dark={dark}>
  <div id={article.name} class="container">
    <div class="main" class:side={side}>
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
</div>

<style>
  .container {
    width: 100%;
    transition: background-color 0.3s linear;
  }

  .dark {
    background-color: var(--bg-4);
  }

  .main {
    max-width: 1200px;
    padding: var(--article-padding);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: var(--content-margin);
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

