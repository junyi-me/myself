<script>
  import Navigate from "./Navigate.svelte";

  let open = $state(false);
</script>

<button onclick={() => open = !open}>
  <div class="icon" class:open>
    {#if open}
      <i class="fas fa-times"></i>
    {:else}
      <i class="fas fa-bars"></i>
    {/if}
  </div>
</button>

<div class="container" class:open>
  <Navigate onNavigate={() => open = false} />
</div>

<style>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-1);
    z-index: 1000;
    transform: translateX(200%);
    transition: transform 0.5s;
  }

  .container.open {
    transform: translateX(0);
  }

  button {
    position: fixed;
    top: var(--gap-medium);
    right: var(--gap-medium);
    padding: var(--gap-medium);
    border: var(--card-border);
    border-radius: var(--card-border-radius);
    background-color: transparent;
    backdrop-filter: blur(5px);
    color: var(--fg-1);
    cursor: pointer;
    z-index: 1001;
  }

  .icon {
    transition: transform 0.3s;
  }

  .icon.open {
    transform: rotate(90deg);
  }

  i {
    width: 1em;
    height: 1em;
  }
</style>

