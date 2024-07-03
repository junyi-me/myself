<script lang="ts">
  import type { ExperienceKeyType, ExperienceType } from '$lib/types';
  import { techs } from '$lib/techs';
  import { t } from '$lib/i18n';
  import { handleAnchorClick } from '$lib/interact';

  export let expKey: ExperienceKeyType;

  const exp = {
    startDate: expKey.startDate,
    endDate: expKey.endDate,
    name: $t(`exp.positions.${expKey.txKey}.name`),
    title: $t(`exp.positions.${expKey.txKey}.title`),
    company: $t(`exp.positions.${expKey.txKey}.company`),
    description: $t(`exp.positions.${expKey.txKey}.description`),
    projects: expKey.projects.map(projKey => ({
      title: $t(`exp.projects.${projKey.txKey}.title`),
      bullets: $t(`exp.projects.${projKey.txKey}.bullets`),
      techs: projKey.techKeys.map(techKey => {
          const tech = techs[techKey.key]
          if (!techKey.sub || !tech.sub) {
            return {
              ...tech,
              sub: [],
            };
          }
          return {
            ...tech,
            sub: tech.sub.filter(sub => techKey.sub!.includes(sub.key)),
          };
        }),
    })),
  } as ExperienceType;
</script>

<tr>
  <td class="title">
    <h3>{exp.title}</h3>
    <p>{$t('exp.positions.at')} {exp.company}</p>
    <p>{exp.startDate} ~ {exp.endDate ?? "current"}</p>
  </td>
  <td class="content">
    <p>{@html exp.description}</p>
    {#each exp.projects as proj}
      <h3>{proj.title}</h3>
      <ul>
        {#each proj.bullets as bullet}
          {@html bullet}
        {/each}
      </ul>
      <div class="tech">
        {#each proj.techs as tech}
          <a href={`#tech-${tech.key}`} on:click={e => handleAnchorClick(e, 'tech', e => {if (!e.classList.contains("focus")) e.click()})}>
            <img src={tech.img} alt={tech.name} />
            <span>{tech.name}</span>
            {#if tech.sub && tech.sub.length > 0}
              <span >&nbsp;(</span>
              <span style="margin-right: .5em">{tech.sub.map(s => s.name).join(", ")}</span>
              <span style="margin-left: -.5em">)</span>
            {/if}
          </a>
        {/each}
      </div>
    {/each}
  </td>
</tr>

<style>
  tr {
    transition: box-shadow 0.2s linear;
  }

  tr:hover {
    box-shadow: 0 0 10px 0 var(--fg-3);
  }

  tr:not(:last-child) {
    border-bottom: 1px solid var(--bg-3);
  }

  td {
    vertical-align: top;
    border-bottom: none;
    min-width: 8em;
    padding: var(--content-padding);
  }

  td:not(:first-child) {
    border-left: 1px solid var(--bg-3);
  }

  .content p {
    margin-bottom: 0;
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
