<script lang="ts">
  import Card from "$lib/Card.svelte";
  import { t } from "$lib/i18n";
  import '@fortawesome/fontawesome-free/css/all.min.css'
</script>

<div class="container">
  <div class="avatar">
    <Card transparent>
      <img src="images/avatar.webp" alt="avatar" />
      <h2>{$t('home.name')}</h2>
      <p>{$t('home.headline')}</p>
      <p>
        <i class="fa-solid fa-link"></i>
        <a href="https://junyi.me/">{$t('home.links.title')}</a>
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
</style>

