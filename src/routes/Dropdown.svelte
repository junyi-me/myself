<script lang="ts">
  import { t } from "$lib/i18n";

  type OptionType = {
    value: string;
    label?: string;
    txLabel?: string;
  };
  interface Props {
    onChange?: (value: string) => void;
    options: OptionType[];
    selected: string;
  }
  let { onChange = () => {}, options, selected = $bindable() }: Props = $props();
</script>

<select bind:value={selected} onchange={() => onChange(selected)}>
  {#each options as { value, label, txLabel }}
    <option value={value} selected={value === selected}>
      {#if label}
        {label}
      {:else if txLabel}
        {$t(txLabel)}
      {:else}
        {value}
      {/if}
    </option>
  {/each}
</select>

<style>
  select {
    font-size: 1rem;
    border: 1px solid var(--fg-3);
    border-radius: var(--radius);
    background-color: var(--bg-2);
    color: var(--fg-1);
  }

  select:focus {
    outline: none;
    border-color: var(--primary);
  }

  option {
    padding: var(--gap-tiny);
  }
</style>

