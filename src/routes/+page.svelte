<script lang="ts">
  import Article from './Article.svelte';
  import Outline from './Outline.svelte';
  import { t } from '$lib/i18n';
  import type { ArticleType } from '$lib/types';
    import TechSection from './TechSection.svelte';

  const articleKeys = ['intro', 'why', 'tech', 'exp'];
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
  <div class="articles">
    <div class="intro-block">
      <Article article={articles[0]} doubleCol />
      <img src="images/hhkb_black.jpg" alt="hhkb_black" />
    </div>
    <Article article={articles[1]} />
    <Article article={articles[2]} />
    <TechSection />
    <Article article={articles[3]} />
  </div>
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
    padding-top: calc(var(--header-height) / 2);
    text-align: center;
    font-size: 3em;
    color: var(--bg-2);
  }

  .content {
    background-color: var(--bg-1);
    padding: 4em 1em;
    border-top: 2px solid var(--fg-3);
    border-bottom: 2px solid var(--fg-3);
  }

  .intro-block img {
    max-width: 600px;
    float: right;
    padding: var(--content-padding);
    margin: var(--content-margin);
  }

  .articles {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .footer {
    background-color: var(--bg-2);
    color: var(--fg-1);
    padding: 2rem;
    text-align: center;
  }
</style>

