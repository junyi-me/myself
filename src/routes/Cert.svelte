<script lang="ts">
  import type { CertType } from "$lib/data/certifications";

  let { cert }: { cert: CertType; } = $props();
</script>

<a class="cert" href={cert.url} target="_blank">
  <img src={cert.img} alt={cert.txTitle} />
</a>

<style>
  .cert {
    border: 1px solid var(--bg-3);
    border-radius: var(--card-border-radius);
    box-shadow: var(--card-shadow);
    transition: background-color var(--transition-linear);
    text-decoration: none;
    padding: var(--gap-small);
    width: 144px;
    height: 144px;
    display: flex;
    justify-content: center;
  }

  .cert:hover {
    background-color: var(--bg-2);
  }

  .cert img {
    max-width: 100%;
    max-height: 100%;
  }

  .cert:hover {
    background-color: var(--bg-2);
  }
</style>
