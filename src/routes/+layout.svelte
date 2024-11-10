<script>
  import Outline from "./Outline.svelte";

</script>
<nav>
  <Outline />
</nav>
<div />

<slot />

<style>
  nav {
    width: 100%;
    background-color: var(--bg-1);
    border-bottom: 2px solid var(--fg-3);
    display: flex;
    height: var(--nav-height);
    position: fixed;
  }

  div {
    height: var(--nav-height);
  }
</style>

