<script lang="ts">
  import { t } from '$lib/i18n';
  import type { TechType } from '$lib/types';
  import { fade } from 'svelte/transition';

  export let tech: TechType;
</script>

{#key tech.name}
  <div class="container" in:fade>
    {@html $t(tech.txDescription)}
      <table cellspacing="0" cellpadding="0">
        <tbody>
          {#if tech.sub}
            <tr class="sub">
              <td class="row-title"><h4>{$t('tech.sub.title')}</h4></td>
              <td class="link">
                {#each tech.sub as sub}
                  <div>
                    <a href={sub.link} target="_blank">
                      <div>
                        <img src={sub.img} alt={sub.name} />
                        <span>{sub.name}</span>
                      </div>
                    </a>
                  </div>
                {/each}
              </td>
            </tr>
          {/if}
          {#if tech.projects}
            <tr class="proj">
              <td class="row-title"><h4>{$t('tech.projects.title')}</h4></td>
              <td class="link">
                <div>
                  {#each tech.projects as proj}
                    <div>
                      <a href={proj.link} target="_blank">
                        <div>
                          <img src={proj.img} alt={proj.name} />
                          <span>{proj.name}</span>
                        </div>
                      </a>
                      &nbsp-&nbsp
                      <span>{$t(`tech.projects.${proj.key}.headline`)}</span>
                    </div>
                  {/each}
                </div>
              </td>
            </tr>
          {/if}
        </tbody>
      </table>
      <br />
      <a href={tech.link} target="_blank">Learn more about {tech.name} → </a>
  </div>
{/key}

<style>
  .container {
    max-width: 900px;
    margin: 0 auto;
  }

  .row-title {
    text-align: right;
    text-wrap: nowrap;
  }

  table {
    border-collapse: collapse;
    --spacing: 0.5em;
  }

  h4 {
    display: inline-block;
    margin: 0;
  }

  .link div {
    display: flex;
    align-items: center;
  }

  .link img {
    height: 1em;
  }

  .link div {
    display: inline-block;
  }

  .proj div:not(:last-child) {
    margin-bottom: var(--spacing);
  }

  .sub td:last-child {
    padding-bottom: 0;
  }

  .sub div {
    margin-bottom: var(--spacing);
    margin-right: var(--spacing);
  }

  .link a {
    font-weight: 500;
    height: 1.5em;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid var(--bg-3);
  }

  td:not(:last-child) {
    border-right: 1px solid var(--bg-3);
  }

  td {
    padding: 1em;
  }
</style>
