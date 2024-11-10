<script lang="ts">
  import { handleAnchorClick } from "$lib/interact";
  import { articles, type ArticleKeyType } from "$lib/data/articles";
  import type { ArticleType } from "$lib/types";
  import { t } from "$lib/i18n";

  // Create a writable store to hold the list of elements
  type KeyArticleType = ArticleType &{
    key: ArticleKeyType,
  }
  let articleList: KeyArticleType[] = [];

  // Function to update the elements store with the current elements
  function updateElements(selector: string) {
    // @ts-ignore
    const eles = Array.from(document.querySelectorAll(selector));
    articleList = eles.map(ele => {
      const key = ele.id as ArticleKeyType;
      return {
        ...articles[key],
        key: key as ArticleKeyType,
      };
    });
  }

  // Create a MutationObserver to watch for DOM changes
  const selector = '.article';
  updateElements(selector);
  const observer = new MutationObserver(() => {
    updateElements(selector); // Update the list whenever a mutation is observed
  });

  // Start observing changes in the body (or any other parent container)
  observer.observe(document.body, { childList: true, subtree: true });
  // Stop observing when all elements are found
  $: if (articleList.length == Object.keys(articles).length) observer.disconnect();
</script>

<ul>
  <li>
    <a class='logo' href='/'>JY</a>
  </li>
  <li style='border-left: 1px var(--bg-3) solid' />
  {#each articleList as article}
    <li>
      <a href={`#${article.key}`} on:click={handleAnchorClick}>{$t(article.txTitle)}</a>
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
  }

  li {
    list-style-type: none;
    display: flex;
    height: 100%;
  }

  a {
    padding-right: 1em;
    padding-left: 1em;
    color: var(--fg-1);
    text-decoration: none;
    font-size: 1.2em;
    line-height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  a:not(.logo):hover {
    color: var(--accent);
    border-bottom: 2px solid var(--fg-1);
  }

  .logo {
    font-family: "Brush Script MT", cursive;
    background-color: var(--accent);
    color: var(--bg-1);
  }
</style>

