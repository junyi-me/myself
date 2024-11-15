<script>
  import Card from "$lib/Card.svelte";
  import { t } from "$lib/i18n";
  import { onDestroy } from "svelte";
  import store from "./stores";
  import ToggleSwitch from "./ToggleSwitch.svelte";

  const unsubscribe = store.subscribe(store => {
    if (store.pref.dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });
  onDestroy(unsubscribe);
</script>

<Card transparent>
  <ToggleSwitch label={$t('pref.darkMode')} bind:checked={$store.pref.dark} />
</Card>

