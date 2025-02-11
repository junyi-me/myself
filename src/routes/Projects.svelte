<script>
  import { projects } from "$lib/data/projects";
  import { t } from "$lib/i18n";
</script>

<div class="container">
  {#each projects as proj}
    <a class="proj" href={proj.link} target="_blank">
      <img src={proj.img} alt={proj.txTitle} />
      <div class="text">
        <h4>{$t(proj.txTitle)}</h4>
        {#if proj.txDescription}
          <p>{$t(proj.txDescription)}</p>
        {/if}
      </div>
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

  .text {
    padding: var(--gap-small);
  }

  .proj h4 {
    margin: 0;
    margin-bottom: var(--gap-small);
    color: var(--fg-1);
    border-radius: 0 0 var(--card-border-radius) var(--card-border-radius);
    font-weight: 600;
  }

  .proj p {
    margin: 0;
    color: var(--fg-2);
    line-height: 1;
  }

  img {
    max-width: 100%;
    max-height: 80px;
    object-fit: cover;
    border-radius: var(--card-border-radius) var(--card-border-radius) 0 0;
  }

  @media screen and (max-width: 800px) {
    .container {
      display: auto;
    }

    .proj {
      width: 100%;
      height: auto;
      flex-direction: row;
    }

    img {
      max-width: 80px;
      max-height: 80px;
      aspect-ratio: 1 / 1;
      border-radius: var(--card-border-radius) 0 0 var(--card-border-radius);
    }
  }
</style>

