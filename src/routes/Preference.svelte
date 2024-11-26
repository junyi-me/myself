<script lang="ts">
  import Card from "$lib/Card.svelte";
  import { locale, t } from "$lib/i18n";
  import { onDestroy } from "svelte";
  import store from "./stores";
  import ToggleSwitch from "./ToggleSwitch.svelte";
  import Dropdown from "./Dropdown.svelte";
  import type { LanguageType } from "$lib/data/translations";

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
  <div class="entries">
    <div class="lang">
      <i class="fa-solid fa-globe"></i>
      <Dropdown bind:selected={$store.pref.lang} options={langOptions} />
    </div>
    <ToggleSwitch label={$t('pref.darkMode')} bind:checked={$store.pref.dark} />
  </div>
</Card>

<style>
  .entries {
    display: flex;
    flex-direction: column;
    gap: var(--gap-medium);
  }

  .lang {
    display: flex;
    align-items: center;
    gap: var(--gap-small);
  }

  .lang i {
    font-size: 1.2em;
    color: var(--fg-3);
  }
</style>

