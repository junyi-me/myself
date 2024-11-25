<script lang="ts">
  import Article from './Article.svelte';
  import ExperienceSection from './ExperienceSection.svelte';
  import CertsSection from './CertsSection.svelte';
  import Projects from './Projects.svelte';
  import TechSection from '$lib/tech/TechSection.svelte';
  import Navigate from './Navigate.svelte';
  import Profile from './Profile.svelte';
  import NavTofu from './NavTofu.svelte';

  let innerWidth = 0;
  let innerHeight = 0;
</script>

<svelte:head>
  <title>Junyi Wang</title> 
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight />

<div id="boss" class="container">
  <div class="profile sticky">
    <Profile />
  </div>
  <div class="content">
    <Article key='intro' />
    <Article key='tech' >
      <TechSection />
    </Article>
    <Article key='certs'>
      <CertsSection />
    </Article>
    <Article key='projects'>
      <Projects />
    </Article>
    <Article key='exp'>
      <ExperienceSection />
    </Article>
    <p class="cp">© 2024 Junyi Wang</p>
  </div>
  {#if innerWidth > 1200}
    <div class="navigate sticky">
      <Navigate />
    </div>
  {:else}
    <NavTofu />
  {/if}
</div>

<style>
  .container {
    padding: var(--gap-medium);
    box-sizing: border-box;
    overflow: auto;
    height: 100vh;
    display: flex;
    gap: var(--gap-medium);
  }

  .sticky {
    position: sticky;
    top: 0;
    flex: 1;
  }

  .content {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: var(--gap-medium);
    min-width: 0;
    padding-top: var(--gap-medium);
  }

  .cp {
    margin: auto;
    padding-bottom: var(--gap-medium);
    opacity: 0.5;
    font-size: 0.8em;
  }

  @media screen and (max-width: 800px) {
    .container {
      flex-direction: column;
      padding: 0;
      gap: var(--gap-small);
    }

    .sticky {
      position: relative;
      top: auto;
    }
  }

  @media screen and (max-width: 1200px) {
    .navigate {
      display: none;
    }
  }
</style>

