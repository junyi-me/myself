<script lang="ts">
  import { toastStore } from "$lib/stores";
  import { fade } from "svelte/transition";
  
  let cleanToast: number;
  let message = $state('');

  toastStore.subscribe(toast => {
    message = toast ?? '';
    clearTimeout(cleanToast);
    cleanToast = setTimeout(() => {
      $toastStore = '';
    }, 2000);
  });
</script>

<div class="container">
  {#if message}
    <div class="toast" transition:fade>
      <span>{message}</span>
    </div>
  {/if}
</div>

<style>
  .container {
    z-index: 1002;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: var(--gap-medium);
  }

  .toast {
    position: fixed;
    background-color: var(--accent);
    color: var(--bg-1);
    padding: var(--gap-small) var(--gap-medium);
    border-radius: var(--gap-small);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
</style>

