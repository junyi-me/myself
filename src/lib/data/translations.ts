type TranscriptType = {
  home: {
    name: string,
    headline: string,
    nav: {
      title: string,
      here: string,
      blog: string,
    },
    links: {
      title: string,
    },
    intro: {
      title: string,
      content: string,
    },
    tech: {
      title: string,
      content: string,
    },
    certs: {
      title: string,
      content: string,
    },
    projects: {
      title: string,
      content: string,
    },
    exp: {
      title: string,
      content: string,
      years: string,
      months: string,
      present: string,
    },
  },
  tech: {
    svelte: {
      description: string,
    },
    react: {
      description: string,
    },
    html_css_js: {
      description: string,
    },
    golang: {
      description: string,
    },
    java: {
      description: string,
    },
    python: {
      description: string,
    },
    csharp: {
      description: string,
    },
    cpp: {
      description: string,
    },
    mysql: {
      description: string,
    },
    postgres: {
      description: string,
    },
    dynamodb: {
      description: string,
    },
    github: {
      description: string,
    },
    docker: {
      description: string,
    },
    kubernetes: {
      description: string,
    },
    aws: {
      description: string,
    },
    gcp: {
      description: string,
    },
    linux: {
      description: string,
    },
    bash: {
      description: string,
    },
    lua: {
      description: string,
    },
    neovim: {
      description: string,
    },
    selenium: {
      description: string,
    },
    sub: {
      title: string,
    },
  },
  projects: {
    title: string,
    this_website: {
      name: string,
      description: string,
    },
    cs_go: {
      name: string,
      description: string,
    },
    leetcode: {
      name: string,
      description: string,
    },
    neovim: {
      name: string,
      description: string,
    },
    business_card: {
      name: string,
      description: string,
    },
    thumbgen: {
      name: string,
      description: string,
    },
    k3s: {
      title: string,
    },
  },
  exp: {
    at: string,
    bostoncollege: {
      name: string,
      company: string,
      title: string,
      description: string,
    },
    apolloeye: {
      name: string,
      company: string,
      title: string,
      description: string,
      logrpa: {
        title: string,
        description: string,
      },
      aeweb: {
        title: string,
        description: string,
      },
      aemonitor: {
        title: string,
        description: string,
      },
    },
    prussian: {
      name: string,
      company: string,
      title: string,
      description: string,
      prussian: {
        title: string,
        description: string,
      },
      tinky: {
        title: string,
        description: string,
      },
    },
    nagrastar: {
      name: string,
      company: string,
      title: string,
      description: string,
      ns_manager: {
        title: string,
        description: string,
      },
      ns_events: {
        title: string,
        description: string,
      },
      ns_publish: {
        title: string,
        description: string,
      },
    },
  },
  pref: {
    darkMode: string,
  },
}

type TranslationType = {
  en: TranscriptType;
  jp: TranscriptType;
  zh: TranscriptType;
}
export type LanguageType = keyof TranslationType;

export default {
  en: {
    home: {
      name: "Junyi Wang",
      headline: "Professional and hobbyist software engineer",
      nav: {
        title: "Table of contents",
        here: "Home",
        blog: "Blog",
      },
      links: {
        title: "Links",
      },
      intro: {
        title: "Hi,",
        content: `
          <p>Welcome to my personal website. I'm Junyi Wang, a professional and hobbyist software engineer.</p>
          <p>My primary areas of interest are web development and self-hosting. The website you are seeing right now is hosted on a <a href="https://blog.junyi.me/p/hosting-an-https-website-on-a-ha-k3s-cluster/" target="_blank">bare-metal kubernetes cluster</a> (also the blog itself), and I'm planning to self-host more web services in the future.</p>
          <p>By the way, I use <code>vim (Neovim)</code> and <code>Arch</code>. If you are interested, my dot files are all on my <a href="https://github.com/jywang99/linux_config" target="_blank">GitHub</a>.</p>
          `,
      },
      tech: {
        title: "Skills",
        content: `
          <p>My skillset is mostly full-stack web development and some CI/CD stuff.</p>
        `,
      },
      certs: {
        title: "Certifications",
        content: `
          <p>I find getting certificates to be a great way of learning new things.</p>
        `
      },
      projects: {
        title: "Projects",
        content: `<p>From time to time, I work on some personal projects. Here are some of them.</p>`,
      },
      exp: {
        title: "Experience",
        content: `
          <p>I graduated from <a href="https://www.bc.edu/">Boston College</a> in summer 2022, and since then, I have been working as a software engineer in a few different companies.</p>
        `,
        years: "yr",
        months: "mo",
        present: "present",
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
        description: `<p>This is where I started my journey of frontend development. Whatever framework I use, the knowledge of HTML/CSS/JS is still relevant.</p>`,
      },
      golang: {
        description: `<p>I started learning Go this year, and have been using it for every chance I get since then. I'm really liking the simplicity and speed of this language. Coming from <code>Java</code> as my primary language, <code>Go</code> really gave me the agility in developing these smaller projects.</p>`,
      },
      java: {
        description: `<p>This is the first programming language I learned (in a structured way), back in college. My dad is also a <code>Java</code> person, so he taught me a lot of fundamentals. I'm still writing a lot fo Java at Apollo Eye.</p>
        <p>My experience with <code>Java</code> is mainly in developing web apps using <code>SpringBoot</code>, along with some CLI programs that run on servers.</p>
        `,
      },
      python: {
        description: `<p><code>Python</code> is a very versatile language. I've written web servers, CLI tools, and a little bit of GUI applications all with it. Also tried learning towards the AI track with numpy/pandas and tensorflow, but didn't get too far. I might pick it up some day.</p>`,
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
      postgres: {
        description: `<p>Recently I have been using <code>PostgreSQL</code> a lot in my personal projects.</p>`,
      },
      dynamodb: {
        description: `<p>I first learned about this in Prussian. Although learning to think in the NoSQL way was hard, I ended up designing and implementing some schemas to be used in serverless stacks, and it wasn't as bad as I thought!</p>`,
      },
      github: {
        description: `<p>Using it since around 2017.</p>`,
      },
      docker: {
        description: `<p>After using it for quite some time at work, I decided to sit down and learn thoroughly about it. Now everything that I host is deployed with docker, and I didn't regret a single bit doing that.</p>`,
      },
      kubernetes: {
        description: `<p>I learned quite a bit of <code>Kubernetes</code> along with <code>Docker</code> at work. I had always been dreaming about having my own cluster, and I've finally done it.</p>`,
      },
      aws: {
        description: `<p>At Prussian, I got a lot of experience working with the serverless stack on <code>AWS</code>. Have been using it a bit at ApolloEye as well.</p>
        <p>During my time at Prussian, I also decided to get some certificates, which are listed below.</p>`,
      },
      gcp: {
        description: `<p>Mostly been using their <code>Cloud Storage</code> and <code>Compute Engine</code> at ApolloEye.</p>`,
      },
      linux: {
        description: `<p>I use Linux at work, I use Linux at home, and Linux is still running my deployed apps even when I'm asleep. Debian for servers, Arch for workstations.</p>`,
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
      phaser: {
        description: `<p>Recently I started learning 2D game development using <code>Phaser3</code>.</p>`,
      },
      tiled: {
        description: `<p>Having a great time tinkering with 2D top-down RPG maps.</p>`,
      },
      sub: {
        title: "Familiar with",
      },
    },
    projects: {
      title: "Projects",
      this_website: {
        name: "This website",
        description: "The website you are currently viewing.",
      },
      cs_go: {
        name: "CS Go",
        description: "Computer science algorithms and data structures implemented in Go.",
      },
      leetcode: {
        name: "Leetcode",
        description: "Leetcode problems solved in Go.",
      },
      neovim: {
        name: "My Neovim config",
        description: "My Neovim config.",
      },
      business_card: {
        name: "Business Card",
        description: "A simple website I coded to get familiar with AWS and React.",
      },
      thumbgen: {
        name: "ThumbGen",
        description: "A commandline tool to generate thumbnails for videos.",
      },
      k3s: {
        title: "Hosting an HTTPS website on a HA k3s cluster" ,
      },
    },
    exp: {
      at: "at",
      bostoncollege: {
        name: "Boston College",
        company: "Boston College",
        title: "Student",
        description: `
          <p>I majored in computer science and minored in mathematics at Boston College. I was also a teaching assistant for a CS course for a semester.</p>
        `,
      },
      apolloeye: {
        name: "ApolloEye",
        company: "ApolloEye",
        title: "Software Engineer",
        description: `
          <p>Apollo Eye is a company providing better solutions for monitoring solar power plants. Apollo Eye uses self-developed software to collect operational information of power plants, and sends personalized alerts to owners upon detected malfunctions. Following are the projects I have worked on:</p>
        `,
        logrpa: {
          title: "Data collection",
          description: `
          <li>Develop a web scraping application using Java and Selenium to collect electric power data from multiple managing companies' websites, and save in an internal database</li>
          <li>Modify and maintain the application when there are changes to the target websites</li>
          <li>Write unit tests for the program using JUnit and Mockito</li>
            `,
        },
        aeweb: {
          title: "Customer-facing website Development",
          description: `
          <li>Develop and maintain a customer-facing website (full-stack) using SpringBoot MVC and Thymeleaf to visualize the performance of power plants</li>
          <li>Implemented a feature that allows the user to download the scraped data as a CSV file</li>
          <li>Write unit tests for the program using JUnit and Mockito</li>
            `,
        },
        aemonitor: {
          title: "Healthcheck Programs",
          description: `
          <li>Develop a healthcheck program using SpringBoot and Selenium to check healthiness of the customer-facing website</li>
          <li>Use cron jobs to schedule the healthcheck program to run periodically</li>
          <li>Deploy the program to AWS EC2 using Docker Compose</li>
          `,
        },
      },
      prussian: {
        name: "Prussian",
        company: "Prussian Inc",
        title: "SaaS Software Engineer",
        description: `
          <p>Prussian Inc. is a startup financial technology company, providing Active Hedging, Monetization & Intelligence services to corporations and investment firms, by their enterprise grade Hedging-as-a-Service (HaaS) Suite. Objective of Prussian Inc. is to redefine “hedging”, and reinvent the procedure of hedging. Following are projects I worked on:</p>
        `,
        prussian: {
          title: "Serverless full-stack Development",
          description: `
            <li>Develop a serverless application on AWS using Lambda, API Gateway, DynamoDB, and S3</li>
            <li>Implement authentication using AWS Cognito</li>
            <li>Develop a client-facing static website using React, using static website hosting on S3</li>
          `,
        },
        tinky: {
          title: "Mobile app development",
          description: `
            <li>Develop a customer-facing mobile application for iOS/Android using React Native</li>
            <li>Develop a serverless web service using AWS Lambda, API Gateway, and DynamoDB</li>
          `,
        },
      },
      nagrastar: {
        name: "Nagrastar",
        company: "Nagrastar LLC",
        title: "Junior Software Engineer",
        description: `
          <p>NagraStar is a joint venture of EchoStar and the Kudelski Group, providing security and automation solutions for customers in the satellite TV industry, including Echostar and Bell TV (B2B). Following are projects I worked on:</p>
          `,
        ns_manager: {
          title: "Docker container management platform",
          description: `
            <li>Develop a web-based UI for displaying the status and managing multiple instances of an application, which is also developed by Nagrastar</li>
            <li>Support start/stop docker containers from the UI, and changing configuration parameters on the fly</li>
          `,
        },
        ns_events: {
          title: "Validate and import TV events",
          description: `
            <li>Develop a customer-facing web-based UI to initiate and track validation and import process</li>
            <li>Develop a backend application that validates data and load them into database</li>
            <li>Fine-tune performance by distributing workloads between multiple instances of the backend service</li>
          `,
        },
        ns_publish: {
          title: "Encrypting and spooling video assets",
          description: `
            <li>Develop and maintain a distributed system that encrypts video files and spools them to the satellites</li>
            <li>Develop and maintain a customer-facing web-based GUI that shows status and acts as a control panel for the other components</li>
            <li>Develop a end-to-end testing program including UI testing using Selenium</li>
          `,
        },
      },
    },
    pref: {
      darkMode: "Dark mode",
    },
  },
  jp: {
    home: {
      name: "",
      headline: "",
      nav: {
        title: "",
        here: "",
        blog: "",
      },
      links: {
        title: "",
      },
      intro: {
        title: "",
        content: "",
      },
      tech: {
        title: "",
        content: "",
      },
      certs: {
        title: "",
        content: "",
      },
      projects: {
        title: "",
        content: "",
      },
      exp: {
        title: "",
        content: "",
        years: "",
        months: "",
        present: "",
      },
    },
    tech: {
      svelte: {
        description: "",
      },
      react: {
        description: "",
      },
      html_css_js: {
        description: "",
      },
      golang: {
        description: "",
      },
      java: {
        description: "",
      },
      python: {
        description: "",
      },
      csharp: {
        description: "",
      },
      cpp: {
        description: "",
      },
      mysql: {
        description: "",
      },
      postgres: {
        description: "",
      },
      dynamodb: {
        description: "",
      },
      github: {
        description: "",
      },
      docker: {
        description: "",
      },
      kubernetes: {
        description: "",
      },
      aws: {
        description: "",
      },
      gcp: {
        description: "",
      },
      linux: {
        description: "",
      },
      bash: {
        description: "",
      },
      lua: {
        description: "",
      },
      neovim: {
        description: "",
      },
      selenium: {
        description: "",
      },
      sub: {
        title: "",
      },
    },
    projects: {
      title: "",
      this_website: {
        name: "",
        description: "",
      },
      cs_go: {
        name: "",
        description: "",
      },
      leetcode: {
        name: "",
        description: "",
      },
      neovim: {
        name: "",
        description: "",
      },
      business_card: {
        name: "",
        description: "",
      },
      thumbgen: {
        name: "",
        description: "",
      },
      k3s: {
        title: "",
      },
    },
    exp: {
      at: "",
      bostoncollege: {
        name: "",
        company: "",
        title: "",
        description: "",
      },
      apolloeye: {
        name: "",
        company: "",
        title: "",
        description: "",
        logrpa: {
          title: "",
          description: "",
        },
        aeweb: {
          title: "",
          description: "",
        },
        aemonitor: {
          title: "",
          description: "",
        },
      },
      prussian: {
        name: "",
        company: "",
        title: "",
        description: "",
        prussian: {
          title: "",
          description: "",
        },
        tinky: {
          title: "",
          description: "",
        },
      },
      nagrastar: {
        name: "",
        company: "",
        title: "",
        description: "",
        ns_manager: {
          title: "",
          description: "",
        },
        ns_events: {
          title: "",
          description: "",
        },
        ns_publish: {
          title: "",
          description: "",
        },
      },
    },
    pref: {
      darkMode: "",
    },
  },
  zh: {
    home: {
      name: "",
      headline: "",
      nav: {
        title: "",
        here: "",
        blog: "",
      },
      links: {
        title: "",
      },
      intro: {
        title: "",
        content: "",
      },
      tech: {
        title: "",
        content: "",
      },
      certs: {
        title: "",
        content: "",
      },
      projects: {
        title: "",
        content: "",
      },
      exp: {
        title: "",
        content: "",
        years: "",
        months: "",
        present: "",
      },
    },
    tech: {
      svelte: {
        description: "",
      },
      react: {
        description: "",
      },
      html_css_js: {
        description: "",
      },
      golang: {
        description: "",
      },
      java: {
        description: "",
      },
      python: {
        description: "",
      },
      csharp: {
        description: "",
      },
      cpp: {
        description: "",
      },
      mysql: {
        description: "",
      },
      postgres: {
        description: "",
      },
      dynamodb: {
        description: "",
      },
      github: {
        description: "",
      },
      docker: {
        description: "",
      },
      kubernetes: {
        description: "",
      },
      aws: {
        description: "",
      },
      gcp: {
        description: "",
      },
      linux: {
        description: "",
      },
      bash: {
        description: "",
      },
      lua: {
        description: "",
      },
      neovim: {
        description: "",
      },
      selenium: {
        description: "",
      },
      sub: {
        title: "",
      },
    },
    projects: {
      title: "",
      this_website: {
        name: "",
        description: "",
      },
      cs_go: {
        name: "",
        description: "",
      },
      leetcode: {
        name: "",
        description: "",
      },
      neovim: {
        name: "",
        description: "",
      },
      business_card: {
        name: "",
        description: "",
      },
      thumbgen: {
        name: "",
        description: "",
      },
      k3s: {
        title: "",
      },
    },
    exp: {
      at: "",
      bostoncollege: {
        name: "",
        company: "",
        title: "",
        description: "",
      },
      apolloeye: {
        name: "",
        company: "",
        title: "",
        description: "",
        logrpa: {
          title: "",
          description: "",
        },
        aeweb: {
          title: "",
          description: "",
        },
        aemonitor: {
          title: "",
          description: "",
        },
      },
      prussian: {
        name: "",
        company: "",
        title: "",
        description: "",
        prussian: {
          title: "",
          description: "",
        },
        tinky: {
          title: "",
          description: "",
        },
      },
      nagrastar: {
        name: "",
        company: "",
        title: "",
        description: "",
        ns_manager: {
          title: "",
          description: "",
        },
        ns_events: {
          title: "",
          description: "",
        },
        ns_publish: {
          title: "",
          description: "",
        },
      },
    },
    pref: {
      darkMode: "",
    },
  },
} as TranslationType;

