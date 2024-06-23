<script lang="ts">
  import type { ExperienceKeyType, ExperienceType } from '$lib/types';
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
    })),
  } as ExperienceType;
</script>

<tr>
  <td class="title">
    <h3>{exp.title}</h3>
    <p>at {exp.company}</p>
    <p>{exp.startDate} ~ {exp.endDate ?? "current"}</p>
  </td>
  <td>
  <td class="content">
    {#each exp.projects as proj}
      <h3>{proj.title}</h3>
      <ul>
        {#each proj.bullets as bullet}
          {@html bullet}
        {/each}
      </ul>
    {/each}
  </td>
</tr>
