<script lang="ts">
  import Article from './Article.svelte';
  import { t } from '$lib/i18n';
  import type { ArticleType } from '$lib/types';
  import TechSection from './TechSection.svelte';
  import ExperienceSection from './ExperienceSection.svelte';
  import CertsSection from './CertsSection.svelte';
  import Header from './Header.svelte';

  const articleKeys = ['intro', 'why', 'tech', 'certs', 'exp'];
  const articles: ArticleType[] = articleKeys.map(key => {
    return { name: key, title: $t(`home.${key}.title`), content: $t(`home.${key}.content`) };
  });
</script>

<Header {articles} />

<!-- Articles -->
<div class="content">
    <div class="intro-block">
      <Article article={articles[0]} side>
        <img src="images/hhkb_black.jpg" alt="hhkb_black" />
      </Article>
    </div>
    <Article article={articles[1]} />
    <Article article={articles[2]}>
      <TechSection />
    </Article>
    <Article article={articles[3]}>
      <CertsSection />
    </Article>
    <Article article={articles[4]} last>
      <ExperienceSection />
    </Article>
</div>

<!-- Footer -->
<div class="footer">
  <div>
    <p>✉️ junyi.wang.007@gmail.com</p>
    <p>📍 Denver, CO</p>
    <p>© 2024 Junyi Wang</p>
  </div>
  <div>
    <p>
      <img src="images/github256.png" alt="github" />
      <a href="https://github.com/jywang99">jywang99</a>
    </p>
    <p>
      <img src="images/linkedin.webp" alt="linkedin" />
      <a href="https://www.linkedin.com/in/junyi-wang-976a94199/">Junyi Wang</a>
    </p>
  </div>
</div>

<style>
  .content {
    background-color: var(--bg-1);
    padding: 3em 0;
    border-top: 2px solid var(--fg-3);
    border-bottom: 2px solid var(--fg-3);
  }

  .intro-block img {
    max-width: 100%;
  }

  .footer {
    background-color: var(--bg-2);
    color: var(--fg-1);
    padding: 2rem;
    display: flex;
    justify-content: center;
  }

  .footer div {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .footer div:not(:last-child) {
    border-right: 2px solid var(--bg-3);
  }

  .footer img {
    height: 1em;
  }

</style>

