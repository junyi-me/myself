<script lang="ts">
  import type { Snippet } from "svelte";

  let { transparent = false, children }: { transparent?: boolean; children?: Snippet; } = $props();
</script>

<div class="container" class:transparent>
  {@render children?.()}
</div>

<style>
  .container {
    background-color: var(--bg-1);
    padding: var(--gap-large);
    border-radius: var(--card-border-radius);
    box-shadow: var(--card-shadow);
  }

  @media screen and (max-width: 1200px) {
    .container {
      padding: var(--gap-medium);
    }
  }

  .container.transparent {
    background-color: transparent;
    box-shadow: none;
  }
</style>

