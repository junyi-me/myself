<script lang="ts">
  type OptionType = {
    value: string;
    label: string;
  };

  export let options: OptionType[];
  export let selected: string;
</script>

<select bind:value={selected}>
  {#each options as { value, label }}
    <option value={value} selected={value === selected}>{label}</option>
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

