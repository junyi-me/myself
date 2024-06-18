<script lang="ts">
  import type { ArticleType } from "$lib/types";

  export let article: ArticleType;
  export let doubleCol = false;
</script>

<style>
  div {
    max-width: 1200px;
    padding: 2em;
    margin: 0 auto;
  }

  h1 {
    color: #333;
  }

  div.double-col {
    max-width: 600px;
    display: inline-block;
    margin: 0 1em;
  }
</style>

<div id={article.name} class:double-col={doubleCol}>
  <h1>{article.title}</h1>
  {@html article.content}
  <br />
  <slot />
</div>

