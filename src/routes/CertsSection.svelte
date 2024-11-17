<script lang="ts">
  import { certifications } from "$lib/data/certifications";
  import Cert from "./Cert.svelte";
</script>

<div class="container">
  <div class="certs">
    {#each certifications as cert}
      <Cert {cert} />
    {/each}
  </div>
</div>

<style>
  .container {
    overflow-x: scroll;
    position: relative;
  }

  .certs {
    display: flex;
    gap: var(--gap-small);
    width: max-content;
  }
</style>

