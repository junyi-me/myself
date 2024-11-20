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

  const formatDate = (date: Date) => {
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
    return formattedDate;
  }

  const getFormattedDuration = (startDate: Date, endDate?: Date) => {
    if (!endDate) {
      endDate = new Date();
    }
    const diffDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    return `${years}${$t('home.exp.years')} ${months}${$t('home.exp.months')}`;
  }
</script>

<div class="container" style="border-left: 2px solid {exp.color}">
  <div>
    <h2>{$t(exp.txTitle)} {$t('exp.at')} {$t(exp.txOrg)}</h2>
    <div class="time">
      <p class="period" style="background-color: {exp.color}">
        {formatDate(exp.startDate)} ~ {exp.endDate ? formatDate(exp.endDate) : $t('home.exp.present')}
      </p>
      <p class="duration">{getFormattedDuration(exp.startDate, exp.endDate)}</p>
    </div>
    {@html $t(exp.txDescription)}
  </div>

  {#each exp.projects as proj}
    <h3 style="text-decoration: underline {exp.color}">{$t(proj.txTitle)}</h3>
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
</div>

<style>
  .container {
    padding: var(--gap-medium);
  }

  .period {
    display: inline-block;
    margin: 0;
    margin-left: -1em;
    padding: 0.25em 1em;
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-small);
  }

  .tech a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--fg-1);
    border: var(--card-border);
    border-radius: var(--card-border-radius);
    padding: var(--gap-tiny) var(--gap-small);
  }

  .tech img {
    height: 1em;
    margin-right: 0.5em;
  }

  @media screen and (max-width: 800px) {
    .container {
      padding: var(--gap-small);
    }

    .period {
      padding: 0.25em 0.5em;
    }

    .tech {
      gap: var(--gap-tiny);
    }
  }

  .time {
    display: flex;
    align-items: center;
    margin-bottom: var(--gap-small);
  }

  .time p {
    margin-top: 0;
  }

  .duration {
    margin-left: 1em;
    color: var(--fg-1);
  }
</style>
