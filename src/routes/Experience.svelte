<script lang="ts">
  import type { ExperienceType } from '$lib/types';
  import { t } from '$lib/i18n';
  import { handleAnchorClick } from '$lib/interact';
  import { techs, type TechKeyType } from '$lib/data/techs';

  export let exp: ExperienceType;

  const findSubtech = (techKey: TechKeyType, subtechKey: string) => {
    const tech = techs[techKey];
    if (!tech.sub) {
      throw new Error(`Subtech ${subtechKey} not found in tech ${techKey}`);
    }
    const sub = tech.sub.find(sub => sub.key === subtechKey);
    if (!sub) {
      throw new Error(`Subtech ${subtechKey} not found in tech ${techKey}`);
    }
    return sub;
  }
</script>

<tr class="hovee">
  <div class="role">
    <h3>{$t(exp.txTitle)}</h3>
    <p>{$t('exp.at')} {$t(exp.txCompany)}</p>
    <p>{exp.startDate} ~ {exp.endDate ?? "current"}</p>
  </div>

  <p>{@html $t(exp.txDescription)}</p>

  {#each exp.projects as proj}
    <h3>{$t(proj.txTitle)}</h3>
    <ul>
      {@html $t(proj.txDescription)}
    </ul>
    <div class="tech">
      {#each proj.techs as tech}
        <a href={`#tech-${tech.key}`} on:click={e => handleAnchorClick(e, e => {if (!e.classList.contains("focus")) e.click()})}>
          <img src={techs[tech.key].img} alt={techs[tech.key].name} />
          <span>{techs[tech.key].name}</span>
          {#if tech.sub && tech.sub.length > 0}
            <span >&nbsp;(</span>
            <span style="margin-right: .5em">{tech.sub.map(s => findSubtech(tech.key, s).name).join(", ")}</span>
            <span style="margin-left: -.5em">)</span>
          {/if}
        </a>
      {/each}
    </div>
  {/each}
</tr>

<style>
  tr {
    transition: box-shadow 0.2s linear;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid var(--bg-3);
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    padding-left: 1em;
  }

  .tech a {
    display: flex;
    margin-right: 1em;
  }

  .tech img {
    height: 1em;
    margin-right: 0.5em;
  }
</style>
