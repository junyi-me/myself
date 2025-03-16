<script lang="ts">
  import Card from "$lib/Card.svelte";
  import { t } from "$lib/i18n";
  import '@fortawesome/fontawesome-free/css/all.min.css'
</script>

<Card transparent>
  <img src="images/avatar.webp" alt="avatar" />
  <h2>{$t('home.name')}</h2>
  <p>{$t('home.headline')}</p>
  <a href="https://junyi.me/">
    <i class="fa-solid fa-link"></i>
    {$t('home.links.title')}
  </a>
  <a href="https://share.junyi.me/resume_en.pdf" target="_blank">
    <i class="fa-solid fa-download"></i>
    {$t('home.actions.download')}
  </a>
</Card>

<style>
  img {
    width: 10em;
    height: 10em;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    padding: var(--gap-tiny) 0;
  }

  h2 {
    color: var(--accent);
  }

  p {
    margin: 0.5em 0;
  }

  i {
    color: var(--fg-1);
    padding-right: var(--gap-tiny);
  }
</style>

