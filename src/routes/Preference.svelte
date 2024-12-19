<script lang="ts">
  import Card from "$lib/Card.svelte";
  import { locale } from "$lib/i18n";
  import { onDestroy } from "svelte";
  import store, { type ThemeType } from "./stores";
  import Dropdown from "./Dropdown.svelte";
  import type { LanguageType } from "$lib/data/translations";

  let { onConfirm = () => {} }: { onConfirm?: () => void; } = $props();

  const switchColor = (dark: boolean) => {
    if (dark) {
      document.documentElement.dataset.scheme = 'dark';
    } else {
      document.documentElement.dataset.scheme = 'light';
    }
  };

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  let switchFn: ((e: MediaQueryListEvent) => void) | null = null;

  const switchTheme = (theme: ThemeType) => {
    if (theme === 'auto') {
      // Add the listener only if it doesn't exist
      if (!switchFn) {
        switchFn = (e: MediaQueryListEvent) => switchColor(e.matches);
        mediaQuery.addEventListener('change', switchFn);
      }
      // Set the initial color based on current preference
      switchColor(mediaQuery.matches);
      return;
    }

    // Remove the listener if switching to a specific theme
    if (switchFn) {
      mediaQuery.removeEventListener('change', switchFn);
      switchFn = null;
    }
    // Manually set the theme
    switchColor(theme === 'dark');
  };

  // Subscribe to store changes
  const unsubscribe = store.subscribe(store => {
    // theme
    const theme = store.pref.theme;
    switchTheme(theme);

    // language
    $locale = store.pref.lang;
  });

  // Cleanup on component destroy
  onDestroy(() => {
    if (switchFn) {
      mediaQuery.removeEventListener('change', switchFn);
    }
    unsubscribe();
  });

  type langOptType = { value: LanguageType, label: string };
  let langOptions: langOptType[] = [
    { value: 'en', label: 'English' },
    { value: 'jp', label: '日本語' },
    { value: 'zh', label: '中文' },
  ];

  type themeOptType = { value: ThemeType, txLabel: string };
  let themeOptions: themeOptType[] = [
    { value: 'light', txLabel: 'pref.colorTheme.light' },
    { value: 'dark', txLabel: 'pref.colorTheme.dark' },
    { value: 'auto', txLabel: 'pref.colorTheme.auto' },
  ];

</script>

<Card transparent>
  <table>
    <tbody class="entries">
      <tr class="entry lang">
        <td>
          <i class="fa-solid fa-globe"></i>
        </td>
        <td>
          <Dropdown bind:selected={$store.pref.lang} options={langOptions} onChange={onConfirm} />
        </td>
      </tr>
      <tr class="entry">
        <td>
          <i class="fa-solid fa-sun"></i>
          <i class="fa-solid fa-moon"></i>
        </td>
        <td>
          <Dropdown bind:selected={$store.pref.theme} options={themeOptions} onChange={onConfirm} />
        </td>
      </tr>
    </tbody>
  </table>
</Card>

<style>
  .entry i {
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

