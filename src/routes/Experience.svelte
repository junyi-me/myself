<script lang="ts">
  import type { ExperienceType } from '$lib/types';
  import { dt, t } from '$lib/i18n';
  import { handleAnchorClick } from '$lib/interact';
  import { techs } from '$lib/data/techs';

  let { exp }: { exp: ExperienceType; } = $props();

  const getDurationYM = (startDate: Date, endDate?: Date) => {
    if (!endDate) {
      endDate = new Date();
    }
    const diffDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    let years = Math.floor(diffDays / 365);
    let months = Math.floor((diffDays % 365) / 30);
    if( months === 12) {
      years++;
      months = 0;
    }
    return [years, months];
  }

  let years: number = $state(0);
  let months: number = $state(0);
  $effect(() => {
    [years, months] = getDurationYM(exp.startDate, exp.endDate);
  });
</script>

<div class="container" style="border-left: 2px solid {exp.color}">
  <div>
    <h2>{$t(exp.txTitle)} {$t('exp.at')} {$t(exp.txOrg)}</h2>
    <div class="time">
      <p class="period" style="background-color: {exp.color}">
        {$dt(exp.startDate)} ~ {exp.endDate ? $dt(exp.endDate) : $t('home.exp.present')}
      </p>
      <p class="duration">
        {#if years > 0}
          {years} {$t('home.exp.years')}
        {/if}
        {#if months > 0}
          {months} {$t('home.exp.months')}
        {/if}
      </p>
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
        <a href={`#tech-${tech}`} onclick={e => handleAnchorClick(e, e => {if (!e.classList.contains("focus")) e.click()})}>
          <img src={techs[tech].img} alt={techs[tech].name} />
          <span>{techs[tech].name}</span>
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
