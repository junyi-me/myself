<script lang="ts">
  import type { ExperienceType } from '$lib/types';

  export let exp: ExperienceType;
</script>

<tr>
  <td class="title">
    <h3>{exp.title}</h3>
    <p>{exp.company}</p>
    <p>{exp.startDate} ~ {exp.endDate}</p>
  </td>
  <td>
    
  </td>
</tr>
