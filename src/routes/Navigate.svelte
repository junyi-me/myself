<script lang="ts">
  import { articles, type ArticleKeyType } from "$lib/data/articles";
  import { t } from "$lib/i18n";
  import { type ArticleType } from "$lib/types";
  import Card from "$lib/Card.svelte";
  import { handleAnchorClick } from "$lib/interact";
  import Preference from "./Preference.svelte";

  export let onNavigate: () => void = () => {};

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


  const handleNavigate = (e: MouseEvent) => {
    e.preventDefault();
    handleAnchorClick(e);
    onNavigate();
  }
</script>

<div class="container">
  <Card transparent>
    <h2><span>#</span> {$t('home.nav.title')}</h2>
    <ol>
      {#each articleList as article}
        <li>
          <a href={`#${article.key}`} on:click={handleNavigate}>{$t(article.txTitle)}</a>
        </li>
      {/each}
    </ol>
  </Card>

  <Preference />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  h2 {
    margin-top: var(--gap-medium);
    color: var(--fg-3);
  }

  h2 span {
    color: var(--accent);
  }

  ol li::marker {
    color: var(--fg-3);
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
    transition: color var(--transition-linear), border-bottom var(--transition-linear);
  }

  a:hover {
    color: var(--accent);
    border-bottom: 1px solid var(--fg-1);
  }
</style>
