type TranscriptType = {
  home: {
    name: string,
    headline: string,
    nav: {
      title: string,
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
        description: `<p>I started learning Go in 2024, and have been using it for every chance I get since then. I'm really liking the simplicity and speed of this language. Coming from <code>Java</code> as my primary language, <code>Go</code> really gave me the agility in developing these smaller projects.</p>`,
      },
      java: {
        description: `
          <p>This is the first programming language I learned (in a structured way), back in college. My dad is also a <code>Java</code> person, so he taught me a lot of fundamentals. I'm still writing a lot fo Java at Apollo Eye.</p>
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
        company: "Apollo Eye",
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
      name: "王君毅",
      headline: "专业与业余软件工程师",
      nav: {
        title: "目录",
      },
      links: {
        title: "链接",
      },
      intro: {
        title: "你好，",
        content: `
          <p>欢迎来到我的个人网站。我是王君毅，一名专业和业余软件工程师。</p>
          <p>我主要关注的领域是web开发和自管托 (self-hosting)。该网页和我的博客都管托于我自己的<a href="https://blog.junyi.me/p/hosting-an-https-website-on-a-ha-k3s-cluster" target="_blank">裸金属Kubernetes集群</a>，以后还打算管托更多的web service。</p>
          <p>By the way, I use <code>vim (Neovim)</code> and <code>Arch</code>. If you are interested, my dot files are all on my <a href="https://github.com/jywang99/linux_config" target="_blank">GitHub</a>.</p>
        `
      },
      tech: {
        title: "职业技能",
        content: "<p>我的职业技能以全栈web开发为主，也有一些CI/CD的经验。</p>",
      },
      certs: {
        title: "证书",
        content: "<p>我一向认为获得证书是在这个行业学习新事物的好方法。</p>",
      },
      projects: {
        title: "个人项目",
        content: "<p>我会时不时地做一些个人项目，包括但不限于以下这些。</p>",
      },
      exp: {
        title: "工作经历",
        content: "<p>我在2022年夏天毕业于<a href='https://www.bc.edu/'>波士顿学院 (Boston College)</a>，毕业后从事软件工程师工作，先后任职于多家公司。</p>",
        years: "年",
        months: "个月",
        present: "至今",
      },
    },
    tech: {
      svelte: {
        description: `<p>这是我第一次用<code>Svelte</code>创建的网站。我一向对它很好奇，现在终于有机会试试了。</p>`,
      },
      react: {
        description: `
          <p>在Prussian的时候和一些私人项目中广泛使用过。也有过一些使用<code>React Native</code>的经验。</p>
          <p>曾经是我所有前端开发的首选框架，但<code>Svelte</code>可能会在我的个人项目中取代它。</p>
        `,
      },
      html_css_js: {
        description: `<p>我的前端开发之路始于这里。无论我用什么框架，HTML/CSS/JS的知识仍然很重要。</p>`,
      },
      golang: {
        description: `
          <p>Go是我在2024年学的一门新语言，自从那时起，我就抓住每一个机会使用它。我非常喜欢这门语言的简洁性和高效性。作为一个以 Java 为主要语言的开发者，Go 让我在开发这些小型项目时有了更高的灵活性。</p>
        `
      },
      java: {
        description: `
          <p>这是我在大学里学的第一门编程语言。我爸也是一个主要写 <code>Java</code> 的程序员，他教了我很多编程的基础知识。我在 Apollo Eye 仍然经常使用 <code>Java</code>。</p> 
          <p>我用 <code>Java</code> 写得最多的是使用 <code>SpringBoot</code> 框架的 Web 应用程序，以及一些运行在服务器上的CLI程序。</p>
        `
      },
      python: {
        description: `
          <p><code>Python</code> 是一门非常通用的语言。我用它写过web服务器、CLI工具，还有一些GUI应用程序。我也尝试过学习numpy/pandas和tensorflow，但还没有机会深入了解。</p>
        `
      },
      csharp: {
        description: `
          <p>我第一次使用 <code>C#</code> 纯粹是出于工作需要，但作为一个 <code>Java</code> 开发者，我能理解为什么有人说 "C# is Java done right"。</p>
        `
      },
      cpp: {
        description: `
          <p>我在工作中学习了 <code>C++</code>。我主要负责在一些web服务器程序中追加新功能。</p>
        `
      },
      mysql: {
        description: `
          <p>我在 ApolloEye 期间一直在使用 <code>MySQL</code>。在目前的工作中，我也有机会接触到 <code>Oracle DB</code> 和 <code>PostgreSQL</code>。</p>
        `
      },
      postgres: {
        description: `
         <p>最近我在我的个人项目中经常使用 <code>PostgreSQL</code>。</p>
        `
      },
      dynamodb: {
        description: `
          <p>我在 Prussian 第一次接触到它。NoSQL 的思维方式对当时的我来说很陌生，但最终还是设计并实现了一些适用于无服务器堆栈的模式，结果并不像我想象的那么糟糕。</p>
        `
      },
      github: {
        description: `
          <p>从2017年到现在一直离不开它。</p>
        `
      },
      docker: {
        description: `
          <p>在工作中使用了一段时间后，我决定花点时间深入了解。现在我托管的所有应用程序都是用docker部署的，绝对没有白学。</p>
        `
      },
      kubernetes: {
        description: `
          <p>我在工作中学到了很多关于<code>Kubernetes</code>和<code>Docker</code>的知识。我一直梦想拥有自己的集群，现在终于实现了。</p>
        `
      },
      aws: {
        description: `
          <p>我主要是在Prussian工作时获得了很多在<code>AWS</code>上工作的经验。在ApolloEye也有一些场面会用到它。</p>
          <p>在Prussian工作时我还下定决心拿了一些证书，下面有列出。</p>
        `
      },
      gcp: {
        description: `
          <p>在ApolloEye主要在使用<code>Cloud Storage</code>和<code>Compute Engine</code>。</p>
        `
      },
      linux: {
        description: `
          <p>我工作用Linux，家里也用Linux，即使我睡着了，我的程序也运行在Linux上。服务器上用Debian，工作站上用Arch。</p>
        `
      },
      bash: {
        description: `
          <p>我尝试过zsh，但仍然更喜欢bash的简单性，而且它是很多系统上的标配。</p>
        `
      },
      lua: {
        description: `
          <p>我的整个Neovim配置都是用Lua写的。</p>
        `
      },
      neovim: {
        description: `
          <p>我最爱的编辑器。转个网页全都是用它写的。</p>
        `
      },
      selenium: {
        description: `
          <p>在ApolloEye经常会用到它。</p>
        `
      },
      sub: {
        title: "熟悉的技术",
      },
    },
    projects: {
      title: "个人项目",
      this_website: {
        name: "这个网站",
        description: "你现在正在浏览的网站。",
      },
      cs_go: {
        name: "CS Go",
        description: "用Go实现的计算机科学算法和数据结构。",
      },
      leetcode: {
        name: "Leetcode",
        description: "用Go解答的Leetcode问题。",
      },
      neovim: {
        name: "我的Neovim配置",
        description: "我的Neovim配置。",
      },
      business_card: {
        name: "Business Card",
        description: "一个简单的网站，用来熟悉AWS和React。",
      },
      thumbgen: {
        name: "ThumbGen",
        description: "一个用来为视频生成缩略图的命令行工具。",
      },
      k3s: {
        title: "Hosting an HTTPS website on a HA k3s cluster" ,
      },
    },
    exp: {
      at: "@",
      bostoncollege: {
        name: "波士顿学院",
        company: "波士顿学院",
        title: "学生",
        description: `
          <p>我在波士顿学院主修计算机科学，辅修数学。当过一学期CS助教。</p>
        `
      },
      apolloeye: {
        name: "ApolloEye",
        company: "Apollo Eye",
        title: "软件工程师",
        description: `
          <p>Apollo Eye 的目的是帮助业主们更好的监视太阳能发电站。Apollo Eye 使用自家软件收集电站的运行信息，并在检测到故障时向业主发送个性化的警报。以下是我参与过的项目：</p>
        `,
        logrpa: {
          title: "自动收集发电量数据",
          description: `
            <li>使用Java和Selenium开发一个网页爬虫应用程序，用于从多个管理公司的网站收集电力数据，并保存在内部数据库中</li>
            <li>当目标网站有改动时，修改和维护爬虫程序</li>
            <li>使用 JUnit 和 Mockito 为程序编写单元测试</li>`
        },
        aeweb: {
          title: "面向客户的网站开发",
          description: `
            <li>使用 SpringBoot MVC 和 Thymeleaf 开发和维护一个面向客户的网站（全栈），用于显示电站的运行状况</li> 
            <li>实现了csv下载功能，让用户更方便地下载发电量数据</li>
            <li>使用 JUnit 和 Mockito 为程序编写单元测试</li>
          `
        },
        aemonitor: {
          title: "Healthcheck程序",
          description: `
            <li>使用 SpringBoot 和 Selenium 开发一个Healthcheck程序，用于检查网站的运行状况</li>
            <li>使用cron job定时运行Healthcheck检查程序</li>
            <li>使用Docker Compose将程序部署到AWS EC2</li>
          `
        },
      },
      prussian: {
        name: "Prussian",
        company: "Prussian Inc",
        title: "SaaS软件工程师",
        description: `
          <p>Prussian Inc. 是一家初创的金融科技公司，通过其企业级的对冲即服务（HaaS）套件，为企业和投资公司提供主动对冲、货币化与智能化服务。Prussian Inc. 的目标是重新定义“对冲”并重新发明对冲的过程。以下是我参与的项目：</p>        
        `,
        prussian: {
          title: "无服务器 (serverless) 全栈开发",
          description: `
            <li>使用Lambda、API Gateway、DynamoDB 和 S3在AWS上开发无服务器应用程序</li>
            <li>使用AWS Cognito实现身份验证</li>
            <li>使用React开发客户端静态网站，使用S3进行静态网站托管</li>
          `
        },
        tinky: {
          title: "移动应用开发",
          description: `
            <li>使用 React Native 开发面向客户的 iOS/Android 移动应用</li> 
            <li>使用 AWS Lambda、API Gateway 和 DynamoDB 开发无服务器的 Web 服务</li>
          `,
        },
      },
      nagrastar: {
        name: "Nagrastar",
        company: "Nagrastar LLC",
        title: "软件工程师",
        description: `
          <p>NagraStar 是 EchoStar 和 Kudelski Group 的合资企业，提供卫星电视行业客户（包括 Echostar 和 Bell TV，B2B）的安全与自动化解决方案。以下是我参与的项目：</p>
        `,
        ns_manager: {
          title: "Docker管理平台",
          description: `
            <li>开发一个基于网页的UI，用于显示和管理多个应用程序实例的状态，这些应用程序也是由Nagrastar开发的</li>
            <li>支持从UI启动/停止docker container，并在运行时更改配置参数</li>
          `,
        },
        ns_events: {
          title: "验证和导入电视节目",
          description: `
            <li>开发面向客户的网页，用于启动和跟踪验证与导入过程</li>
            <li>开发后台程序，用于验证数据并将其加载到数据库中</li>
            <li>通过在多个后台服务实例之间分配工作负载来优化用户体验</li>
          `,
        },
        ns_publish: {
          title: "加密并传输电视节目数据",
          description: `
            <li>开发和维护一个分布式系统 (distributed systems)，用于加密视频文件并将其传输到卫星</li>
            <li>开发和维护一个面向客户的web GUI，用于显示状态并作为其他组件的控制面板</li>
            <li>开发一个 E2E 的测试程序，包括使用 Selenium 进行 UI 测试</li>
          `,
        },
      },
    },
    pref: {
      darkMode: "暗色模式",
    },
  },
} as TranslationType;

