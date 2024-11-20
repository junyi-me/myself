<script lang="ts">
  import type { SubTechType } from "$lib/types";

  export let subTech: SubTechType;
</script>

<a href={subTech.link} target="_blank">
  <img src={subTech.img} alt={subTech.name} />
  <span>{subTech.name}</span>
</a>

<style>
  a {
    border: 1px solid var(--bg-3);
    border-radius: 1em;
    text-decoration: none;
    padding: var(--gap-tiny) var(--gap-small);
    text-decoration: none;
    color: var(--fg-1);
    display: flex;
    align-items: center;
    gap: var(--gap-tiny);
  }

  a:hover {
    background-color: var(--bg-2);
  }

  img {
    max-height: 1em;
  }
</style>

