<script lang="ts">
  import Card from "$lib/Card.svelte";
  import { t } from "$lib/i18n";
    import { downloadPdf } from "$lib/pdf/pdf";
  import '@fortawesome/fontawesome-free/css/all.min.css'
</script>

<div class="container">
  <div class="avatar">
    <Card transparent>
      <img src="images/avatar.jpg" alt="avatar" />
      <h2>{$t('home.name')}</h2>
      <p>{$t('home.headline')}</p>
    </Card>
  </div>

  <div>
    <Card transparent>
      <h2><span>@</span> {$t('home.links.title')}</h2>
      <p>
        <i class="fa-brands fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/junyi-wang-976a94199/" target="_blank">LinkedIn</a>
      </p>
      <p>
        <i class="fa-brands fa-github"></i>
        <a href="https://github.com/jywang99" target="_blank">GitHub</a>
      </p>
      <p>
        <i class="fa-solid fa-feather-pointed"></i>
        <a href="https://blog.junyi.me/" target="_blank">{$t('home.links.blog')}</a>
      </p>
      <p>
        <i class="fa-regular fa-envelope"></i>
        <a href="mailto:junyi.wang.007@gmail.com">{$t('home.links.email')}</a>
      </p>
      <p>
        <i class="fa-solid fa-download"></i>
        <button on:click={downloadPdf}>{$t('home.links.download')}</button>
      </p>
    </Card>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  h2 {
    color: var(--fg-3);
  }

  h2 span {
    color: var(--accent);
  }

  .avatar {
    display: flex;
    flex-direction: column;
  }

  .avatar img {
    width: 10em;
    height: 10em;
    border-radius: 50%;
  }

  .avatar h2 {
    color: var(--accent);
  }

  p {
    margin: 0.5em 0;
  }

  p button {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    font-size: 1em;
    padding: 0;
    border-bottom: 1px solid var(--accent);
  }
</style>

