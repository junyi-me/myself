<script lang="ts">
  import Card from "$lib/Card.svelte";
import { t } from "$lib/i18n";
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
      <h2>@</h2>
      <p>
        <img src="images/github256.png" alt="github" />
        <a href="https://github.com/jywang99" target="_blank">jywang99</a>
      </p>
      <p>
        <img src="images/linkedin.webp" alt="linkedin" />
        <a href="https://www.linkedin.com/in/junyi-wang-976a94199/" target="_blank">Junyi Wang</a>
      </p>
      <p>✉️ junyi.wang.007@gmail.com </p>
    </Card>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: var(--gap-medium);
    justify-content: space-between;
    height: 100%;
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

  p img {
    width: 1em;
    height: 1em;
    vertical-align: middle;
  }
</style>

