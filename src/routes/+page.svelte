<script lang="ts">
  import Article from './Article.svelte';
  import ExperienceSection from './ExperienceSection.svelte';
  import CertsSection from './CertsSection.svelte';
  import Projects from './Projects.svelte';
  import TechSection from '$lib/tech/TechSection.svelte';
  import Navigate from './Navigate.svelte';
  import Profile from './Profile.svelte';
</script>

<svelte:head>
  <title>Junyi Wang</title> 
</svelte:head>

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
  <div class="navigate sticky">
    <Navigate />
  </div>
</div>

<style>
  .container {
    display: flex;
    padding: var(--gap-medium);
    box-sizing: border-box;
    gap: var(--gap-medium);
    overflow: auto;
    height: 100vh;
  }

  .sticky {
    position: sticky;
    top: 0;
  }

  .profile {
    flex: 1;
  }

  .content {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: var(--gap-medium);
  }

  .navigate {
    flex: 1;
  }

  .cp {
    margin: auto;
    padding-bottom: var(--gap-medium);
    opacity: 0.5;
    font-size: 0.8em;
  }
</style>

