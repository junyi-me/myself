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
        title: "Hi,",
        content: `
          <p>Thanks for stopping by. My name is Junyi Wang and I'm working as a full-time software developer in the beautiful city of Devner, CO.</p>
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
          <p>Items can be expanded by clicking on them.</p>
          `
      },
      exp: {
        title: "Experience",
        content: `
          <p>I graduated from <a href="https://www.bc.edu/">Boston College</a> in summer 2022, majoring in computer science and minoring in mathematics. Since then, I have been working as a full-time software engineer. My first work experience started when I was still in college, as a part time job at ApolloEye, an early stage startup in renewable energy industry. I learned a lot about how to develop from scratch, maintain, and implementing new features. I'm still doing part-time here (remotely).</p>
          <p>After graduation, my first full-time job was at Prussian Inc, another startup company in the financial psychology area. Here I worked on a serverless full-stack application, and completed some AWS certifications in the meanwhile. Good times working with a small but capable team.</p>
          <p>Just a few months later, with a little help from my friend, I got into Nagrastar LLC, where I'm currently working at. It was a completely different experience from the previous two positions I had, maintaining source code in corporate standards, and building new features that customers request. Having experience in both startup companies and established corporates became one of my strengths, if I do say so myself.</p>
          `
      },
    },
    tech: {
      svelte: {
        description: `<p>The most recent frontend framework that I learned. Loving it.</p>`,
      },
      react: {
        description: `<p>Used this one extensively during my time at Prussian, and also on some private projects. Also have some experience on React Native</p>`,
      },
      jquery: {
        description: `<p>Although I mostly use Svelte or React, I do love the simplicity and portability of jQuery.</p>`,
      },
      html_css_js: {
        description: `<p>Everynoe has to start somewhere.</p>`,
      },
      golang: {
        description: `<p>Have been using Go for almost everything new I've done this year. Love the simplicity and speed.</p>`,
      },
      java: {
        description: `<p>This was my first language learned. Still using it extensively at ApolloEye.</p>`,
      },
      python: {
        description: `<p>Not a huge fan of its syntax and dynamic typing, but have been using it in a lot of job/personal projects.</p>`,
      },
      csharp: {
        description: `<p>Learned this one out of necessity at job, but maybe the saying "C# is Java done right" is true.</p>`,
      },
      cpp: {
        description: `<p>Also learned this one out of necessity. Lots of footguns, but the extent of freedom is insane.</p>`,
      },
      mysql: {
        description: `<p>First used during my internship, still my go-to relational DB.</p>`,
      },
      dynamodb: {
        description: `<p>This was the first NoSQL DB I learned, back in Prussian. The simplicity and scalability is amazing.</p>`,
      },
      docker: {
        description: `<p>Made my life a LOT easier.</p>`,
      },
      kubernetes: {
        description: `<p>It was a struggle when I first started using it at work, but I'm liking it after some learning.</p>`,
      },
      aws: {
        description: `<p>Everything was on AWS at Prussian, and it was a truly amazing platform to work on (- the UI).</p>
        <p>I have some certifications too, listed below.</p>`,
      },
      gcp: {
        description: `<p>Mostly been using their <code>Cloud Storage</code> and <code>Compute Engine</code> at ApolloEye.</p>`,
      },
      linux: {
        description: `<p>I do almost all of my daily development inside <code>archlinux</code> running on WSL2</p>`,
      },
      bash: {
        description: `<p>I tried zsh, but still prefer bash for its simplicity, and the fact that I can use it on almost any host.</p>`,
      },
      lua: {
        description: `<p>My entire Neovim config is written in Lua.</p>`,
      },
      neovim: {
        description: `<p>Best editor I've ever used. Currently typing this in Neovim</p>`,
      },
      selenium: {
        description: `<p>Using this one extensively at ApolloEye. Gets its job done.</p>`,
      },
      projects: {
        this_website: {
          description: `<p>The website you are currently viewing.</p>`,
        },
        cs_go: {
          description: `<p>Computer science algorithms and data structures implemented in Go.</p>`,
        },
        leetcode: {
          description: `<p>Leetcode problems solved in Go.</p>`,
        }
      }
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

