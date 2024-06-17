<script lang="ts">
  import Article from './Article.svelte';
  import Outline from './Outline.svelte';
  import { t } from '$lib/i18n';
  import type { ArticleType } from '$lib/types';

  const articleKeys = ['intro', 'why'];
  const articles: ArticleType[] = articleKeys.map(key => {
    return { name: key, title: $t(`home.${key}.title`), content: $t(`home.${key}.content`) };
  });
</script>

<!-- Header -->
<div class="head-wrap">
  <Outline {articles} />
  <div class="head">
    <h1>Junyi Wang</h1>
  </div>
  <div class="forehead" />
</div>

<!-- Articles -->
<div class="content">
  <div style="padding: 1em" />
  
  <div class="double-col">
    <Article article={articles[0]} doubleCol />
    <Article article={articles[1]} doubleCol />
  </div>

  <Article article={articles[1]} />
  <Article article={articles[1]} />
  <Article article={articles[1]} />
  <Article article={articles[1]} />
  <Article article={articles[1]} />
</div>

<div style="padding-top: 0.5em; padding-bottom: 3em">
  <p style="text-align: center;">.</p>
</div>

<!-- Footer -->
<div class="footer">
  <p>Email: junyi.wang.007@gmail.com</p>
  <p>Location: Denver, CO</p>
  <p>© 2024 Junyi Wang</p>
</div>

<style>
  .head-wrap {
    --header-height: 500px;
  }

  .head {
    height: var(--header-height);
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background: 
      linear-gradient(
        rgba(0, 0, 0, 0.3), 
        rgba(0, 0, 0, 0.3)
      ), url('images/hhkb.jpg') no-repeat center;
    background-size:cover;
    width: 100%;
  }
  
  .forehead {
    height: var(--header-height);
  }

  .head h1 {
    height: var(--header-height);
    padding-top: calc(var(--header-height) / 2 - 1em);
    text-align: center;
    font-size: 3em;
    color: var(--bg-2);
  }

  .content {
    background-color: var(--bg-1);
  }

  .double-col {
    display: flex;
    justify-content: center;
  }

  .footer {
    background-color: var(--fg-3);
    color: var(--bg-1);
    padding: 1em;
    text-align: center;
  }
</style>

