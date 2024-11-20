<script>
  import { projects } from "$lib/data/projects";
  import { t } from "$lib/i18n";
</script>

<div class="container">
  {#each projects as proj}
    <a class="proj" href={proj.url} target="_blank">
      <img src={proj.img} alt={proj.txTitle} />
      <h4>{$t(proj.txTitle)}</h4>
    </a>
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-medium);
  }

  .proj {
    display: flex;
    flex-direction: column;
    border-radius: var(--card-border-radius);
    border: 1px solid var(--bg-3);
    width: 200px;
    height: 180px;
    box-sizing: border-box;
    text-decoration: none;
    box-shadow: var(--card-shadow);
  }

  .proj h4 {
    margin: 0;
    padding: var(--gap-small);
    color: var(--fg-1);
    border-radius: 0 0 var(--card-border-radius) var(--card-border-radius);
  }

  img {
    max-width: 100%;
    max-height: 80px;
    object-fit: cover;
    border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;
  }
</style>

