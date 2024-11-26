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

</style>

