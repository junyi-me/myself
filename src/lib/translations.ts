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
          <p>I use <code>vim (Neovim)</code> and <code>Arch (WSL2)</code> btw. And yes, I do have two of them. I love <a href="https://happyhackingkb.com/jp/">HHKB</a> (both Hybrid Type-S). Ever since I got my first one and started vimming, there was no turning back.</p>
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
      tech: {
        title: "Technologies",
        content: `
          <p>I mostly work as a backend developer, but I occasionally do frontend work too. Here is a summary of my skillset.</p>
          <p>My career of software engineering staretd with developing web scraping program in <code>Java</code>, using <code>SpringBoot</code> and <code>Selenium</code>. From there my interest mainly grew towards full-stack web development. My current favorite are <code>Go</code> and <code>Svelte</code> (which I'm using to build this website).</p>
          <p>Some items can be expanded by hovering over them.</p>
          `
      },
      exp: {
        title: "Experience",
        content: `
          <p>I graduated from <a href="https://www.bc.edu/">Boston College</a> in summer 2022, majoring in computer science and minoring in mathematics. Since then, I have been working as a full-time software engineer. My first work experience started when I was still in college, as a part time job at ApolloEye, an early stage startup in renewable energy industry. I learned a lot about how to develop from scratch, maintain, and implementing new features. I'm still doing part-time here (remotely).</p>
          <p>After graduation, my first full-time job was at Prussian Inc, another startup company in the financial psychology area. Here I worked on a serverless full-stack application, and completed some AWS certifications in the meanwhile. Good times working with a small but capable team.</p>
          <p>Just a few months later, with a little help from my friend, I got into Nagrastar LLC, where I'm currently working at. It was a completely different experience from the previous two positions I had, maintaining source code in corporate standards, and building new features that customers request. Having experience in both startup companies and established corporates became one of my strengths, if I do say so myself. :P</p>
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

