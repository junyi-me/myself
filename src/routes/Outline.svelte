<script lang="ts">
  import { handleAnchorClick } from "$lib/interact";
  import { articles, type ArticleKeyType } from "$lib/data/articles";
  import { t } from "$lib/i18n";
  import { onMount } from "svelte";
  import { type ArticleType } from "$lib/types";
  import { slide } from "svelte/transition";

  const getY = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      return el.getBoundingClientRect().top + window.scrollY;
    }
    return 0;
  };

  type KeyArticleType = ArticleType &{
    key: ArticleKeyType,
  }
  let articleList: KeyArticleType[] = [];
  onMount(() => {
    articleList = (Object.keys(articles) as ArticleKeyType[]).map((key: ArticleKeyType) => {
      return {
        key: key,
        ...articles[key],
      };
    }).sort((a, b) => getY(a.key) - getY(b.key));
  });
</script>

<ul>
  {#each articleList as article}
    <li transition:slide>
      <a href={`#${article.key}`} on:click={handleAnchorClick}>{$t(article.txTitle)}</a>
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0;
    padding: 0;
    background-color: var(--bg-1);
    border: 1px solid var(--fg-3);
    margin-left: -1px;
  }

  li {
    list-style-type: none;
    display: flex;
  }

  li:not(:last-child) {
    border-bottom: 1px solid var(--fg-3);
  }

  a {
    color: var(--fg-1);
    text-decoration: none;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    padding: 0.5em 1em;
    border-bottom: 1px solid transparent;
  }

  a:hover {
    color: var(--accent);
    border-bottom: 1px solid var(--fg-1);
  }
</style>

