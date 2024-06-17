<script>
  import Tech from "./Tech.svelte";
</script>
<div>
  <div class="lane">
    <h3>Frontend</h3>
    <Tech name="Svelte" link="https://svelte.dev/" img="/images/svelte256.png" />
    <Tech name="Svelte" link="https://svelte.dev/" img="/images/svelte256.png" />
    <Tech name="Svelte" link="https://svelte.dev/" img="/images/svelte256.png" />
  </div>
  <div class="lane">
    <h3>Backend</h3>
  </div>
  <div class="lane">
    <h3>Database</h3>
  </div>
  <div class="lane">
    <h3>CI/CD</h3>
  </div>
  <div class="lane">
    <h3>Cloud</h3>
  </div>
  <div class="lane">
    <h3>Others</h3>
  </div>
</div>

<style>
  .lane {
    display: flex;
    flex-wrap: wrap;
    padding-left: 1em;
    justify-content: left;
  }

  .lane:not(:last-child) {
    padding-bottom: 1em;
    border-bottom: 1px solid var(--fg-1);
    margin-bottom: 1em;
  }

  h3 {
    margin: auto 1em auto 0;
  }
</style>
