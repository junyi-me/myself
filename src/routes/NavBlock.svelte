<script>
  import { slide } from "svelte/transition";

  export let href;
  export let text;

  let open = false;
</script>

<div class="outer" on:mouseleave={() => open = false} role="tooltip">
  <a {href} class:active={open} on:mouseenter={() => open = true}>
    {text}
  </a>

  <div class="tooltip" role="tooltip">
    {#if open}
      <div role="tooltip" out:slide>
        <slot />
      </div>
    {/if}
  </div>
</div>

<style>
  .outer {
    position: relative;
  }

  .tooltip {
    position: absolute;
    min-width: 10em;
  }

  a {
    padding-right: 1em;
    padding-left: 1em;
    height: 100%;
    line-height: 100%;
    color: var(--fg-1);
    text-decoration: none;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    transition: color 0.3s;
  }

  a.active {
    color: var(--accent);
  }

  a:hover {
    border-bottom: 2px solid var(--fg-1);
  }
</style>
