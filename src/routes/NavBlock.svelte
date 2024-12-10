<script lang="ts">
  import { slide } from "svelte/transition";
  
  interface Props {
    href?: string|null;
    text: string;
    children?: import('svelte').Snippet;
  }
  let { href = null, text, children }: Props = $props();

  let open = $state(false);
</script>

<div class="outer" onmouseleave={() => open = false} role="tooltip">
  {#if href}
    <a {href} class="navlink" class:active={open} onmouseenter={() => open = true}>
      {text}
    </a>
  {:else}
    <span class="navlink" class:active={open} onmouseenter={() => open = true} role="tooltip">
      {text}
    </span>
  {/if}

  <div class="tooltip" role="tooltip">
    {#if open}
      <div role="tooltip" out:slide>
        {@render children?.()}
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

  .navlink {
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
    cursor: pointer;
  }

  .navlink.active {
    color: var(--accent);
  }

  .navlink:hover {
    border-bottom: 2px solid var(--fg-1);
  }
</style>
