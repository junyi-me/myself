<script lang="ts">
  import type { ExperienceKeyType, ExperienceType } from '$lib/types';
  import { techs } from '$lib/techs';
  import { t } from '$lib/i18n';

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
      techs: projKey.techKeys.map(techKey => techs[techKey]),
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
    <table>
      <tbody>
        {#each exp.projects as proj}
          <tr>
            <td>
              <h3>{proj.title}</h3>
              <ul>
                {#each proj.bullets as bullet}
                  {@html bullet}
                {/each}
              </ul>
              <div class="tech">
              {#each proj.techs as tech}
                <a href={`#tech-${tech.name}`}>
                  <img src={tech.img} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              {/each}
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </td>
</tr>

<style>
  tr:not(:last-child) {
    border-bottom: 1px solid var(--bg-3);
  }

  td:first-child {
    padding-top: 1em;
    vertical-align: top;
    padding-bottom: 1em;
    border-bottom: none;
  }

  td:not(:first-child) {
    border-left: 1px solid var(--bg-3);
  }

  .content table {
    border-collapse: collapse;
  }

  .content tr {
    border: none;
  }

  .content td {
    padding: 1em;
    border: none;
  }

  .tech {
    display: flex;
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
