<script>
  export let transparent = false;
</script>

<div class="container" class:transparent>
  <slot />
</div>

<style>
  .container {
    background-color: var(--bg-1);
    padding: var(--gap-large);
    border-radius: var(--card-border-radius);
    box-shadow: var(--card-shadow);
  }

  .container.transparent {
    background-color: transparent;
    box-shadow: none;
  }
</style>

