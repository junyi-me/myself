export type LanguageType = "en" | "jp" | "zh";
type TranslationType = {
  en: Object;
  jp: Object;
  zh: Object;
}

export default {
  en: {
    home: {
      name: "Junyi Wang",
      intro: {
        title: "Introduction",
        content: `
          <p>Hi there, thanks for stopping by. My name is Junyi Wang and I'm working as a full-time software developer in the beautiful city of Devner, CO.</p>
          <p>My native language is Japanese, and I'm fluent in English and Chinese as well (feel free to switch to any of these languages from the language dropdown).</p>
          <p>I use <code>vim (Neovim)</code> and <code>Arch (WSL2)</code> btw.</p>
          `,
      },
      why: {
        title: "Why did I make this website?",
        content: `
          <p>Well, long story short, I wanted to have some form of media that I can show to people (mainly the technical folks). I wanted to have a place where I can showcase my projects, my thoughts, and my experiences. I wanted to have a place where I can share my knowledge and learnings with others. Doubled as a personal blog, this website is a place where I can write about anything that I find interesting.</p>
          <p>It's also to flex what I've learned from the <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Svelte tutorial</a>. 🔥</p>
          <p>As a junior developer, I'm still learning and growing. Since there's not much I can share at this point, I will just establish a foundation for this website and see where it goes from there.</p>
        `
      },
    }
  },
  jp: {
    name: "TODO",
    intro: {
      title: "TODO",
      content: `
        <p>TODO</p>
      `,
    },
    why: {
      title: "TODO",
      content: `
        <p>TODO</p>
      `
    },
  },
  zh: {
    name: "TODO",
    intro: {
      title: "TODO",
      content: `
        <p>TODO</p>
      `,
    },
    why: {
      title: "TODO",
      content: `
        <p>TODO</p>
      `
    },
  },
} as TranslationType;

