<script lang="ts">
  import Card from "$lib/Card.svelte";
  import { locale } from "$lib/i18n";
  import { onDestroy } from "svelte";
  import Dropdown from "./Dropdown.svelte";
  import type { LanguageType } from "$lib/data/translations";
  import store from "./stores";
  import ToggleSwitch from "./ToggleSwitch.svelte";
  import { fade } from "svelte/transition";

  let { onConfirm = () => {} }: { onConfirm?: () => void; } = $props();

  // Subscribe to store changes
  const unsubscribe = store.subscribe(store => {
    $locale = store.pref.lang;
  });

  // Cleanup on component destroy
  onDestroy(() => {
    unsubscribe();
  });

  type langOptType = { value: LanguageType, label: string };
  let langOptions: langOptType[] = [
    { value: 'en', label: 'English' },
    { value: 'jp', label: '日本語' },
    { value: 'zh', label: '中文' },
  ];
</script>

<Card transparent>
  <table>
    <tbody class="entries">
      {#if $store.pref.systemTheme === false}
        <tr transition:fade>
          <td>
            <i class="fa-solid fa-moon"></i>
          </td>
          <td>
            <ToggleSwitch bind:checked={$store.pref.darkTheme} onChange={onConfirm} />
          </td>
        </tr>
      {/if}
      <tr>
        <td>
          <i class="fa-solid fa-eye"></i>
        </td>
        <td>
          <ToggleSwitch bind:checked={$store.pref.systemTheme} onChange={onConfirm} />
        </td>
      </tr>
      <tr class="lang">
        <td>
          <i class="fa-solid fa-globe"></i>
        </td>
        <td>
          <Dropdown bind:selected={$store.pref.lang} options={langOptions} onChange={onConfirm} />
        </td>
      </tr>
    </tbody>
  </table>
</Card>

<style>
  tr i {
    font-size: 1.2em;
    color: var(--fg-3);
  }

  tr:not(:last-child) td {
    padding-bottom: var(--gap-medium);
  }

  td:nth-child(1) {
    text-align: center;
  }

  td:nth-child(2) {
    padding-left: var(--gap-tiny);
  }
</style>

