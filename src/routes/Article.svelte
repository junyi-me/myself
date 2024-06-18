<script lang="ts">
  import type { ArticleType } from "$lib/types";

  export let article: ArticleType;
  export let doubleCol = false;
</script>

<div id={article.name} class:double-col={doubleCol}>
  <h1>{article.title}</h1>
  {@html article.content}
  <slot />
</div>

<style>
  div {
    max-width: 1200px;
    padding: var(--content-padding);
    margin: var(--content-margin);
    transition: background-color 0.3s linear;
  }

  h1 {
    color: #333;
  }

  div.double-col {
    max-width: 600px;
    display: inline-block;
  }
</style>

