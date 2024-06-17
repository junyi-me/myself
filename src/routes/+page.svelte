<script>
  import Article from './Article.svelte';
  import Outline from './Outline.svelte';

  const articles = [
    { name: 'intro', title: 'Introduction' },
    { name: 'why', title: 'Why did I make this website?' }
  ];
</script>

<!-- Header -->
<Outline {articles} />

<div class="head">
  <h1>Junyi Wang</h1>
</div>

<div class="forehead"></div>

<!-- Articles -->
<div class="content">
  <div class="double-col">
    <Article name="intro" title="Introduction" doubleCol={true}>
      <p>Hi there, thanks for stopping by. My name is Junyi Wang and I'm working as a full-time software developer in the beautiful city of Devner, CO.</p>
      <p>My native language is Japanese, and I'm fluent in English and Chinese as well (feel free to switch to any of these languages from the language dropdown).</p>
      <p>I use <code>vim (Neovim)</code> and <code>Arch (WSL2)</code> btw.</p>
    </Article>

    <Article name="why" title="Why did I make this website?" doubleCol={true}>
      <p>Well, long story short, I wanted to have some form of media that I can show to people (mainly the technical folks). I wanted to have a place where I can showcase my projects, my thoughts, and my experiences. I wanted to have a place where I can share my knowledge and learnings with others. Doubled as a personal blog, this website is a place where I can write about anything that I find interesting.</p>
      <p>It's also to flex what I've learned from the <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Svelte tutorial</a>. 🔥</p>
      <p>As a junior developer, I'm still learning and growing. Since there's not much I can share at this point, I will just establish a foundation for this website and see where it goes from there.</p>
    </Article>
  </div>

    <Article name="iasdf" title="Why did I make this website?">
      <p>Well, long story short, I wanted to have some form of media that I can show to people (mainly the technical folks). I wanted to have a place where I can showcase my projects, my thoughts, and my experiences. I wanted to have a place where I can share my knowledge and learnings with others. Doubled as a personal blog, this website is a place where I can write about anything that I find interesting.</p>
      <p>It's also to flex what I've learned from the <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Svelte tutorial</a>. 🔥</p>
      <p>As a junior developer, I'm still learning and growing. Since there's not much I can share at this point, I will just establish a foundation for this website and see where it goes from there.</p>
    </Article>

    <Article name="iasdf" title="Why did I make this website?">
      <p>Well, long story short, I wanted to have some form of media that I can show to people (mainly the technical folks). I wanted to have a place where I can showcase my projects, my thoughts, and my experiences. I wanted to have a place where I can share my knowledge and learnings with others. Doubled as a personal blog, this website is a place where I can write about anything that I find interesting.</p>
      <p>It's also to flex what I've learned from the <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Svelte tutorial</a>. 🔥</p>
      <p>As a junior developer, I'm still learning and growing. Since there's not much I can share at this point, I will just establish a foundation for this website and see where it goes from there.</p>
    </Article>

    <Article name="iasdf" title="Why did I make this website?">
      <p>Well, long story short, I wanted to have some form of media that I can show to people (mainly the technical folks). I wanted to have a place where I can showcase my projects, my thoughts, and my experiences. I wanted to have a place where I can share my knowledge and learnings with others. Doubled as a personal blog, this website is a place where I can write about anything that I find interesting.</p>
      <p>It's also to flex what I've learned from the <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Svelte tutorial</a>. 🔥</p>
      <p>As a junior developer, I'm still learning and growing. Since there's not much I can share at this point, I will just establish a foundation for this website and see where it goes from there.</p>
    </Article>

    <Article name="iasdf" title="Why did I make this website?">
      <p>Well, long story short, I wanted to have some form of media that I can show to people (mainly the technical folks). I wanted to have a place where I can showcase my projects, my thoughts, and my experiences. I wanted to have a place where I can share my knowledge and learnings with others. Doubled as a personal blog, this website is a place where I can write about anything that I find interesting.</p>
      <p>It's also to flex what I've learned from the <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Svelte tutorial</a>. 🔥</p>
      <p>As a junior developer, I'm still learning and growing. Since there's not much I can share at this point, I will just establish a foundation for this website and see where it goes from there.</p>
    </Article>

    <Article name="iasdf" title="Why did I make this website?">
      <p>Well, long story short, I wanted to have some form of media that I can show to people (mainly the technical folks). I wanted to have a place where I can showcase my projects, my thoughts, and my experiences. I wanted to have a place where I can share my knowledge and learnings with others. Doubled as a personal blog, this website is a place where I can write about anything that I find interesting.</p>
      <p>It's also to flex what I've learned from the <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Svelte tutorial</a>. 🔥</p>
      <p>As a junior developer, I'm still learning and growing. Since there's not much I can share at this point, I will just establish a foundation for this website and see where it goes from there.</p>
    </Article>

    <Article name="iasdf" title="Why did I make this website?">
      <p>Well, long story short, I wanted to have some form of media that I can show to people (mainly the technical folks). I wanted to have a place where I can showcase my projects, my thoughts, and my experiences. I wanted to have a place where I can share my knowledge and learnings with others. Doubled as a personal blog, this website is a place where I can write about anything that I find interesting.</p>
      <p>It's also to flex what I've learned from the <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Svelte tutorial</a>. 🔥</p>
      <p>As a junior developer, I'm still learning and growing. Since there's not much I can share at this point, I will just establish a foundation for this website and see where it goes from there.</p>
    </Article>

    <Article name="iasdf" title="Why did I make this website?">
      <p>Well, long story short, I wanted to have some form of media that I can show to people (mainly the technical folks). I wanted to have a place where I can showcase my projects, my thoughts, and my experiences. I wanted to have a place where I can share my knowledge and learnings with others. Doubled as a personal blog, this website is a place where I can write about anything that I find interesting.</p>
      <p>It's also to flex what I've learned from the <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Svelte tutorial</a>. 🔥</p>
      <p>As a junior developer, I'm still learning and growing. Since there's not much I can share at this point, I will just establish a foundation for this website and see where it goes from there.</p>
    </Article>

    <Article name="iasdf" title="Why did I make this website?">
      <p>Well, long story short, I wanted to have some form of media that I can show to people (mainly the technical folks). I wanted to have a place where I can showcase my projects, my thoughts, and my experiences. I wanted to have a place where I can share my knowledge and learnings with others. Doubled as a personal blog, this website is a place where I can write about anything that I find interesting.</p>
      <p>It's also to flex what I've learned from the <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Svelte tutorial</a>. 🔥</p>
      <p>As a junior developer, I'm still learning and growing. Since there's not much I can share at this point, I will just establish a foundation for this website and see where it goes from there.</p>
    </Article>
</div>

<div style="padding-top: 0.5em; padding-bottom: 3em">
  <p style="text-align: center;">.</p>
</div>

<!-- Footer -->
<div class="footer">
  <p>Email: junyi.wang.007@gmail.com</p>
  <p>Location: Denver, CO</p>
  <p>© 2024 Junyi Wang</p>
</div>

<style>
  .head {
    height: 300px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background: url('backdrop.jpg') no-repeat center;
    background-size:cover;
    width: 100vw;
    padding: 1em;
  }
  
  .forehead {
    height: 300px;
  }

  .head h1 {
    text-align: center;
    padding-top: 100px;
    font-size: 3em;
    color: var(--fg-3);
  }

  .content {
    background-color: var(--bg-1);
  }

  .double-col {
    display: flex;
    justify-content: center;
  }

  .footer {
    background-color: var(--fg-3);
    color: var(--bg-1);
    padding: 1em;
    text-align: center;
  }
</style>

