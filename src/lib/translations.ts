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
        title: "Skills",
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
        description: `<p>This is the first website I am creating using <code>Svelte</code>. I had been curious about it for quite a while, and am very excited to finally give it a try.</p>`,
      },
      react: {
        description: `<p>Used this one extensively during my time at Prussian, and also on some private projects. Also have some experience on <code>React Native</code>.</p>
          <p>Used to be my go-to framework for any frontend development, but <code>Svelte</code> might replace it for my personal projects.</p>
          `,
      },
      html_css_js: {
        description: `<p>Of course, this is where I started my journey of frontend development. My favorite framework change from time to time, but they have always been there.</p>`,
      },
      golang: {
        description: `<p>I started learning Go this year, and have been using it for every chance I get since then. I'm really liking the simplicity and speed of this language. Coming from <code>Java</code> as my primary language, <code>Go</code> really gave me the agility in developing these smaller projects.</p>`,
      },
      java: {
        description: `<p>This is the first programming language I learned (in a structured way), back in college. My dad is also a <code>Java</code> person, so he taught me a lot of fundamentals. I'm still writing a lot fo Java at ApolloEye.</p>
        <p>My experience with <code>Java</code> is mainly in developing web apps using <code>SpringBoot</code>, along with some CLI programs that run on servers.</p>
        `,
      },
      python: {
        description: `<p><code>Python</code> is a very versatile language. I've written web servers, CLI tools, and a little bit of GUI applications all with <code>Python</code>. Also tried learning towards the AI track with numpy/pandas and tensorflow, but didn't get too far. I might pick it up some day.</p>`,
      },
      csharp: {
        description: `<p>The first time I used <code>C#</code> was purely out of necessity at work, but coming from <code>Java</code>, I could see why some people say "C# is Java done right".</p>`,
      },
      cpp: {
        description: `<p><code>C++</code> is another language I learned at work. I was mainly given tasks to implement new features in some web server programs. Working with the linker was a pain.</p>`,
      },
      mysql: {
        description: `<p>I've been using <code>MySQL</code> throughout my time at ApolloEye. At my current job, I've gotten also some experience with <code>Oracle DB</code> and <code>PostgreSQL</code>.</p>`,
      },
      dynamodb: {
        description: `<p>I first learned about this in Prussian. Although learning to think in the NoSQL way was hard, I ended up designing and implementing some schemas to be used in serverless stacks, and it wasn't as bad as I thought!</p>`,
      },
      docker: {
        description: `<p>After using it for quite some time at work, some time last year, I decided to sit down and learn thoroughly about <code>Docker</code>. I didn't regret a single bit doing that.</p>`,
      },
      kubernetes: {
        description: `<p>I learned quite a bit of <code>Kubernetes</code> along with <code>Docker</code>. Deploying my own web app onto a Kubernetes cluster is still on my bucket list, but deploying stuff to the testing environment at work is already giving me some acquintance with it.</p>`,
      },
      aws: {
        description: `<p>At Prussian, I got a lot of experience working with the serverless stack on <code>AWS</code>. Have been using it a bit at ApolloEye as well.</p>
        <p>During my time at Prussian, I decided to get some certificates, which are listed below.</p>`,
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
        title: "Projects",
        this_website: {
          description: "The website you are currently viewing.",
        },
        cs_go: {
          description: "Computer science algorithms and data structures implemented in Go.",
        },
        leetcode: {
          description: "Leetcode problems solved in Go.",
        },
        neovim: {
          description: "My Neovim config.",
        },
        business_card: {
          description: "A simple website I coded to get familiar with AWS and React.",
        },
      },
      sub: {
        title: "Familiar with",
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

