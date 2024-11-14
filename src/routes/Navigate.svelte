<script lang="ts">
  import { articles, type ArticleKeyType } from "$lib/data/articles";
  import { t } from "$lib/i18n";
  import { type ArticleType } from "$lib/types";
  import Card from "$lib/Card.svelte";
  import { handleAnchorClick } from "$lib/interact";

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
  let articleList: KeyArticleType[] = (Object.keys(articles) as ArticleKeyType[]).map((key: ArticleKeyType) => {
      return {
        key: key,
        ...articles[key],
      };
    }).sort((a, b) => getY(a.key) - getY(b.key));
</script>

<Card transparent>
  <h2># Table of contents</h2>
  <ul>
    {#each articleList as article}
      <li>
        <a href={`#${article.key}`} on:click={handleAnchorClick}>{$t(article.txTitle)}</a>
      </li>
    {/each}
  </ul>
</Card>

<style>
  h2 {
    margin-top: var(--gap-medium);
    color: var(--fg-3);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    display: flex;
  }

  li:not(:last-child) {
    border-bottom: 1px solid var(--bg-3);
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
