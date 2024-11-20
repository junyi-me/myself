<script lang="ts">
  import { t } from '$lib/i18n';
  import type { TechType } from '$lib/types';
  import { fade } from 'svelte/transition';
  import SubTech from './SubTech.svelte';
    import TechProject from './TechProject.svelte';

  export let tech: TechType;
</script>

{#key tech.name}
  <div class="container" in:fade>
    {@html $t(tech.txDescription)}
      {#if tech.projects}
        <div class="proj">
          <h4>{$t('projects.title')}</h4>
          <div>
            {#each tech.projects as proj}
              <TechProject {proj} />
            {/each}
          </div>
        </div>
      {/if}
      {#if tech.sub}
        <h4>{$t('tech.sub.title')}</h4>
        <div class="subtech">
          {#each tech.sub as subTech}
            <SubTech {subTech} />
          {/each}
        </div>
      {/if}
      <br />
      <a href={tech.link} target="_blank">Learn more about {tech.name} → </a>
  </div>
{/key}

<style>
  h4 {
    display: inline-block;
  }

  .proj div:not(:last-child) {
    margin-bottom: var(--spacing);
  }

  .subtech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-tiny);
  }
</style>

