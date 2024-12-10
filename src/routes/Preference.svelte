<script lang="ts">
  import Card from "$lib/Card.svelte";
  import { locale, t } from "$lib/i18n";
  import { onDestroy } from "svelte";
  import store from "./stores";
  import ToggleSwitch from "./ToggleSwitch.svelte";
  import Dropdown from "./Dropdown.svelte";
  import type { LanguageType } from "$lib/data/translations";

  let { onConfirm = () => {} }: { onConfirm?: () => void; } = $props();
  const confirmWithDelay = () => {
    setTimeout(() => {
      onConfirm();
    }, 300);
  };

  const unsubscribe = store.subscribe(store => {
    // theme
    if (store.pref.dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    // language
    $locale = store.pref.lang;
  });
  onDestroy(unsubscribe);

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
          <ToggleSwitch bind:checked={$store.pref.dark} onChange={confirmWithDelay} />
        </td>
        <td>
          <p>{$t('pref.darkMode')}</p>
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

  .entry p {
    margin: 0;
  }
</style>

