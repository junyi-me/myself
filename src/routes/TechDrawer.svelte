<script lang="ts">
  import { t } from '$lib/i18n';
  import type { TechType } from '$lib/techs';
  import { fade } from 'svelte/transition';

  export let tech: TechType;
</script>

{#key tech.name}
  <div class="container" in:fade>
    {@html $t(`tech.${tech.key}.description`)}
      <table>
        <tbody>
          {#if tech.sub}
            <tr>
              <td class="head"><h4>{$t('tech.sub.title')}:</h4></td>
              <td class="link">
                <div>
                  {#each tech.sub as sub}
                    <a href={sub.link} target="_blank">
                      <div>
                        <img src={sub.img} alt={sub.name} />
                        <span>{sub.name}</span>
                      </div>
                    </a>
                  {/each}
                </div>
              </td>
            </tr>
          {/if}
          {#if tech.projects}
            <tr>
              <td class="head"><h4>{$t('tech.projects.title')}:</h4></td>
              <td class="link">
                <div>
                  {#each tech.projects as proj}
                    <a href={proj.link} target="_blank">
                      <div>
                        <img src={proj.img} alt={proj.name} />
                        <span>{proj.name}</span>
                      </div>
                    </a>
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
  .head {
    text-align: right;
    padding-right: 1em;
  }

  h4 {
    display: inline-block;
  }

  .link div {
    display: flex;
    align-items: center;
  }

  .link img {
    height: 1.5em;
  }

  .link div {
    font-weight: 500;
    margin-right: 1em;
    align-items: center;
    display: inline-block;
  }

  .link a {
    text-decoration: none;
  }
</style>
