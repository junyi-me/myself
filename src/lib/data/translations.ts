type TechType = {
  description: string,
}
type ProjectType = {
  name: string,
  description: string,
}

type TranscriptType = {
  home: {
    name: string,
    headline: string,
    nav: {
      title: string,
    },
    links: {
      title: string,
      blog: string,
      email: string,
    },
    intro: {
      title: string,
      content: string,
    },
    tech: {
      title: string,
      content: string,
      frontend: string,
      backend: string,
      database: string,
      cicd: string,
      infra: string,
      automation: string,
      others: string,
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
    actions: {
      download: string,
    }
  },
  tech: {
    svelte: TechType,
    react: TechType,
    html_css_js: TechType,
    golang: TechType,
    java: TechType,
    python: TechType,
    csharp: TechType,
    cpp: TechType,
    sveltekit: TechType,
    mysql: TechType,
    postgres: TechType,
    oracledb: TechType,
    dynamodb: TechType,
    github: TechType,
    gitlab: TechType,
    docker: TechType,
    kubernetes: TechType,
    aws: TechType,
    gcp: TechType,
    linux: TechType,
    bash: TechType,
    lua: TechType,
    vim: TechType,
    neovim: TechType,
    selenium: TechType,
    ansible: TechType,
    traefik: TechType,
    nginx: TechType,
    proxmox: TechType,
    argocd: TechType,
    ceph: TechType,
    sub: {
      title: string,
    }
  },
  projects: {
    title: string,
    this_website: ProjectType,
    cs_go: ProjectType,
    leetcode: ProjectType,
    neovim: ProjectType,
    business_card: ProjectType,
    thumbgen: ProjectType,
    my_domain: ProjectType,
    town: ProjectType,
    review: ProjectType,
    k3s: ProjectType,
    homelab: ProjectType,
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
    colorTheme: {
      title: string,
      dark: string,
      light: string,
      auto: string,
      toast: {
        switchToDark: string,
        switchToLight: string,
        switchToSystem: string,
        switchToManual: string,
      }
    },
  },
}

type TranslationType = {
  en: TranscriptType;
  jp: TranscriptType;
  zh: TranscriptType;
}
export type LanguageType = keyof TranslationType;

const translations: TranslationType = {
  en: {
    home: {
      name: "Junyi Wang",
      headline: "Full Stack Software Engineer, from infrastructure to frontend",
      nav: {
        title: "Table of contents",
      },
      links: {
        title: "Links",
        blog: "My blog",
        email: "Email me",
      },
      intro: {
        title: "Hi,",
        content: `
          <p>Welcome to my personal website. I'm Junyi Wang, a professional and hobbyist software engineer.</p>
          <p>My primary areas of interest are web development and self-hosting. The website you are seeing right now is hosted on a {{k3s}}, and I'm planning to self-host more web services in the future.</p>
          <p>I use <code>vim (Neovim)</code> and <code>Arch</code> btw. If you are interested, my dot files are all on my <a href="https://github.com/jywang99/linux_config" target="_blank">GitHub</a>.</p>
          `,
      },
      tech: {
        title: "Skills",
        content: `
          <p>My skillset is mostly full-stack web development and some CI/CD stuff.</p>
        `,
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        cicd: "CI/CD",
        infra: "Infrastructure",
        automation: "Automation",
        others: "Others",
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
        years: "years",
        months: "months",
        present: "present",
      },
      actions: {
        download: "Download Resume (PDF)",
      },
    },
    tech: {
      svelte: {
        description: `<p><code>Svelte</code> has become my go-to frontend framework, since the first time I learned how to use it to build this website.</p>`,
      },
      react: {
        description: `<p>I used <code>React</code> extensively during my time at Prussian, and also on some personal projects. I also have experience developing mobile applications with <code>React Native</code>.</p>
          <p>It used to be my go-to framework for any frontend development, but <code>Svelte</code> has replaced it for my personal projects.</p>
          `,
      },
      html_css_js: {
        description: `<p>This is where I started my journey of frontend development. Whatever frontend framework I use, the knowledge of <code>HTML/CSS/JS</code> is still relevant.</p>`,
      },
      golang: {
        description: `<p>I started learning <code>Go</code> in 2024, and have been using it for every chance I get since then. I'm really liking the simplicity and speed of this language. Coming from <code>Java</code> as my primary language, <code>Go</code> really gave me the agility in developing these smaller projects.</p>`,
      },
      java: {
        description: `
          <p>This is the first programming language I learned back in college. My dad is also a <code>Java</code> person, so he taught me a lot of fundamentals. To this date, I'm still writing a lot fo Java at different companies and projects.</p>
          <p>My experience with <code>Java</code> is mainly in developing web apps using <code>Spring Boot</code>.</p>
        `,
      },
      python: {
        description: `<p><code>Python</code> is a very versatile language. I've written web servers, CLI tools, and a little bit of GUI applications with it. Also tried learning towards the AI track with numpy/pandas and tensorflow, but didn't get too far. I might pick it up some day.</p>`,
      },
      csharp: {
        description: `<p>The first time I used <code>C#</code> was purely out of necessity at work, but coming from <code>Java</code>, I could see why some people say "C# is Java done right".</p>`,
      },
      cpp: {
        description: `<p>I have worked with <p><code>C++</code> in areas like data processing and encryption, where speed is important. Also a bit of legacy server-side applications.</p>`,
      },
      sveltekit: {
        description: `<p><code>SvelteKit</code> has become my favoriate way to develop both SPAs and full-stack web apps. The ability to use Javascript throughout my stack is a huge advantage, and I like its resemblance to the plain <code>html/css/js</code> code on the frontend.</p>`
      },
      mysql: {
        description: `<p><code>MySQL</code> was the first <code>SQL</code> dialect that I learned, at Apollo Eye. Throughout my career, I also had chances to set up, configure, backup, and restore DB instances.</p>`,
      },
      postgres: {
        description: `<p>I like using <code>PostgreSQL</code> in my home lab, for many workloads. It has a convenient and customizable docker image, a good command-line interface, and <code>pgAdmin</code> as GUI.</p>`,
      },
      oracledb: {
        description: `<p><code>Oracle Database</code> is widely used in corporate world, including some places I have worked.</p>`,
      },
      dynamodb: {
        description: `<p><code>DynamoDB</code> was the first NoSQL database that I used, at Prussian. We used it for multiple projects, and I was often involved in the design process.</p>`,
      },
      github: {
        description: `<p>Using <code>GitHub</code> it since around 2017.</p>`,
      },
      gitlab: {
        description: `<p><code>GitLab</code> is the second DevOps platform that I have used. Mostly for work.</p>`,
      },
      docker: {
        description: `<p>After using it for quite some time at work, I decided to sit down and learn thoroughly about it. Now everything that I self-host is is containerized, and I don't regret a single bit going down this path.</p>`,
      },
      kubernetes: {
        description: `<p>I learned quite a bit of <code>Kubernetes</code> along with <code>Docker</code> at work. I had always been dreaming about having my own Kubernetes cluster, and I've finally done it.</p>`,
      },
      aws: {
        description: `<p>At Prussian, I got a lot of experience working with the serverless stack on <code>AWS</code>. Have been using it a bit at ApolloEye as well.</p>
        <p>During my time at Prussian, I also decided to get some certificates, which are listed below.</p>`,
      },
      gcp: {
        description: `<p>Mostly been using their <code>Cloud Storage</code> and <code>Compute Engine</code> at ApolloEye.</p>`,
      },
      linux: {
        description: `<p>I use <code>Arch</code> as my daily driver at home, and <code>Proxmox</code> + <code>Debian</code> for home lab. When I absolutely have to use a Windows machine, WSL is a must.</p>`,
      },
      bash: {
        description: `<p>I tried zsh at one point, but still prefer <code>bash</code> for its simplicity, and the fact that it's the default on almost any host.</p>`,
      },
      lua: {
        description: `<p>My entire Neovim config is written in Lua.</p>`,
      },
      vim: {
        description: `<p><code>vim</code> is one of the first things I install on a fresh server.</p>`,
      },
      neovim: {
        description: `<p>Best editor I've ever used. Currently typing this in <code>Neovim</code></p>`,
      },
      selenium: {
        description: `<p>I have used Selenium at both Apollo Eye and Nagrastar, sometimes to collect data from webpages, and other times for UI testing.</p>`,
      },
      ansible: {
        description: `<p>I'm using Ansible to automate things in my home lab, such as updating and installing packages on servers.</p>`,
      },
      sub: {
        title: "Familiar with",
      },
      traefik: {
        description: `<p>Traefik was the default ingress controller that came with my k3s cluster, and I've spend a good deal of time on configuring it in my home lab.</p>`,
      },
      nginx: {
        description: `<p>I have mainly been using <code>Nginx</code> to serve static files, including some static websites. This website is served with Nginx inside a docker container.</p>`,
      },
      proxmox: {
        description: `<p><code>Proxmox</code> is powering all the workloads that I have in my home lab.</p>
         <p>In the past I also tried to manage everything through <code>virsh</code>, but it's just so much easier to manage everything with <code>Proxmox</code>, including <code>Ceph</code>.</p>`,
      },
      argocd: {
        description: `<p><code>Argo CD</code> now manages almost everything that I deploy on my Kubernetes cluster.</p>
          <p>At first I was only interested in the Image Updater for CI/CD pipelines, but the ability to manage all my workloads declaratively stuck with me, and now I can't live without it.</p>`,
      },
      ceph: {
        description: `<p>Every piece of data in my home lab is now stored on a Ceph cluster, with 3 replicas.</p>
          <p>I use <code>ceph-rbd</code> for databases, and <code>ceph-fs</code> for static files. Both of them are configured as storage backend in my Kubernetes cluster.</p>`,
      }
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
        name: "Neovim configuration",
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
      my_domain: {
        name: "My Domain",
        description: "Everything on this domain, including subdomains, is self-hosted on a k3s cluster.",
      },
      town: {
        name: "Town",
        description: "My attempt at creating a 2D top-down RPG game, currently left unfinished...",
      },
      k3s: {
        name: "Self-hosting",
        description: "Hosting an HTTPS website on a k3s cluster through an SSH tunnel.",
      },
      review: {
        name: "Review Planner",
        description: "A simple web app to plan and keep track of review sessions.",
      },
      homelab: {
        name: "Home Lab",
        description: "My home lab architecture that powers all my self-hosted services.",
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
        title: "Software Engineer",
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
      colorTheme: {
        title: "Color Theme",
        dark: "Dark",
        light: "Light",
        auto: "Auto",
        toast: {
          switchToDark: "Switched to dark theme",
          switchToLight: "Switched to light theme",
          switchToSystem: "Switched to system theme",
          switchToManual: "Switched off system theme",
        }
      },
    },
  },
  jp: {
    home: {
      name: "Kunki Ou",
      headline: "王君毅、ソフトウェアエンジニア",
      nav: {
        title: "目次",
      },
      links: {
        title: "外部リンク",
        blog: "ブログ",
        email: "メール",
      },
      intro: {
        title: "はじめに",
        content: `
          <p>私のポートフォリオサイトへようこそ。私はアメリカでソフトウェアエンジニアをしている者で、趣味でもコードを書いたりしています。</p>
          <p>主に興味を持っている分野はウェブ開発とセルフホスティングです。このサイトも自作の{{k3s}}からホスティングしています。将来的にはもっと多くのウェブサービスをセルフホスティングしようと考えています。</p>
          <p>By the way, I use <code>vim (Neovim)</code> and <code>Arch</code>. If you are interested, my dot files are all on my <a href="https://github.com/jywang99/linux_config" target="_blank">GitHub</a>.</p>
        `,
      },
      tech: {
        title: "スキル",
        content: "<p>仕事などでは主にウェブ開発をしていますが、CI/CDなどの経験もあります。</p>",
        frontend: "フロントエンド",
        backend: "バックエンド",
        database: "データベース",
        cicd: "CI/CD",
        infra: "インフラ",
        automation: "自動化",
        others: "その他",
      },
      certs: {
        title: "資格",
        content: "<p>今まで全く経験がない分野を勉強する際に、資格を取るという方法が自分にはかなり刺さっている感じがします。</p>",
      },
      projects: {
        title: "個人プロジェクト",
        content: "時間があるときにはよく個人的なプロジェクトに取り組んでいます。",
      },
      exp: {
        title: "職務経験",
        content: "<p>2022年夏に<a href='https://www.bc.edu/'>ボストンカレッジ</a>を卒業して以来、いくつかの会社でソフトウェアエンジニアとして働いてきました。</p>",
        years: "年",
        months: "ヶ月",
        present: "現在",
      },
      actions: {
        download: "履歴書をダウンロード (英語)",
      },
    },
    tech: {
      svelte: {
        description: "<p>このサイトは<code>Svelte</code>を使用して作った初めてのサイトです。以前からずっと気にはなっていましたが、ようやく試せる機会がやってきました。</p>",
      },
      react: {
        description: `
          <p>Prussianでの仕事やいくつかの個人プロジェクトで、このフレームワークをかなり使い込みました。また、<code>React Native</code>を使ったモバイルアプリ開発の経験も少しあります。</p>
          <p>以前は私のフロントエンド開発での定番フレームワークでしたが、これからの個人プロジェクトでは<code>Svelte</code>に置き換わるかもしれません。</p>
        `
      },
      html_css_js: {
        description: "<p>私のフロントエンド開発の道のりはここから始まりました。今でも、たとえどんなフレームワークを使おうと、フロントエンド開発にはこの知識が欠かせないと感じています。</p>",
      },
      golang: {
        description: `
          <p>2024年に<code>Go</code>を学び始めて以来、機会があるたびに使っています。この言語のシンプルさと速さがとても気に入っています。主に<code>Java</code>を書いてきた開発者の私に、<code>Go</code>はこういった小規模なプロジェクトを開発する際の瞬発力を与えてくれました。</p>
        `,
      },
      java: {
        description: `
          <p><code>Java</code>は私が大学に入って最初に学んだプログラミング言語でした。父も<code>Java</code>をよく使う開発者で、基礎の部分をたくさん叩き込まれました。現在もApollo Eyeではよく<code>Java</code>を書いています。</p>
          <p>主に<code>SpringBoot</code>を使ったウェブアプリの開発と、サーバー上で動くCLIプログラムの作成をしています。</p>
        `,
      },
      python: {
        description: `
          <p><code>Python</code>はとても汎用性の高い言語です。これまでにサーバープログラム、CLIツール、そして少しだけGUIアプリケーションも作成しました。また、numpy/pandasやtensorflowを使ったAIの分野にも足を踏み入れてみましたが、そこに関してはまだちんぷんかんぷんです。いつかまた取り組んでみたいと思っています。</p>
        `,
      },
      csharp: {
        description: `<p>初めて<code>C#</code>を使ったのは仕事で必要に迫られてのことでしたが、最近では"C# is Java done right"と言われる理由が少しわかるようになってきました。</p>`,
      },
      cpp: {
        description: "<p><code>C++</code>も仕事で学んだ言語の一つです。主にサーバープログラムに新機能を実装するタスクを任されていました。リンカーにはいつも苦戦を強いられています。</p>",
      },
      sveltekit: {
        description: "<p>最近はSPAでもフルスタック開発でも、<code>SvelteKit</code>を重宝しています。</p>",
      },
      mysql: {
        description: "<p>ApolloEyeでの仕事を通じて<code>MySQL</code>を使い続けています。Nagrastarでは、<code>Oracle DB</code>や<code>PostgreSQL</code>にも触れる機会も度々ありました。</p>",
      },
      postgres: {
        description: "<p>最近の個人プロジェクトでは<code>PostgreSQL</code>をよく使っています。</p>",
      },
      oracledb: {
        description: `<p><code>Oracle Database</code>は企業で広く使われているので、職場での使用経験があります。</p>`,
      },
      dynamodb: {
        description: "<p>初めて学んだのはPrussianでのことです。NoSQLの考え方を学ぶのは難しかったですが、最終的にはサーバーレススタックで使用するスキーマの設計・実装を任されました。蓋を開けてみれば思ったほど難しくはありませんでした。</p>",
      },
      github: {
        description: "<p>2017年頃からずっと使っています。</p>",
      },
      gitlab: {
        description: `<p>仕事では主にGitHubではなくGitLabを使用しています。</p>`
      },
      docker: {
        description: "<p>仕事でかなり頻繁に使用するので、しっかりと時間を作って学ぶことにしました。最近ではセルフホスティングをする際に必ずDockerを使うようになり、そのシンプルさと可搬性に助けられています。</p>",
      },
      kubernetes: {
        description: "<p>仕事では<code>Docker</code>と共に<code>Kubernetes</code>も学びました。自分のクラスターを作ることをずっと夢見ていましたが、ついに実現しました。</p>",
      },
      aws: {
        description: "<p>Prussianでは、ほとんどのアプリケーションが<code>AWS</code>のサーバーレススタックで動いていました。ApolloEyeやNagrastarでも使う機会が多々あります。</p>",
      },
      gcp: {
        description: "<p>ApolloEyeでは、<code>Cloud Storage</code>や<code>Compute Engine</code>をよく使っています。</p>",
      },
      linux: {
        description: "<p>仕事でも、自宅でも、そして私が寝ている間でも、Linuxを使い続けています。サーバーではDebian、ワークステーションではArchを使っています。</p>",
      },
      bash: {
        description: "<p>zshも試しましたが、やはり<code>bash</code>のシンプルさと可搬性が気に入っています。</p>",
      },
      lua: {
        description: "<p>私のNeovimの設定はすべて<code>Lua</code>で書かれています。</p>",
      },
      vim: {
        description: `<p>新しいサーバーを構築するとき、最初に入れるパッケージのひとつがvimです。</p>`,
      },
      neovim: {
        description: "<p>今まで出会ってきた中で、文句なしに最高のエディタです。この文章もNeovimで書いています。</p>",
      },
      selenium: {
        description: "<p>ApolloEyeでの仕事でよく使っています。</p>",
      },
      ansible: {
        description: `<p>Ansibleを使用して、自宅のサーバー上のパッケージの更新やインストールなどを自動化しています。</p>`,
      },
      sub: {
        title: "経験のあるツール",
      },
      traefik: {
        description: "<p>Traefikはk3sクラスターに最初から付属していたingress controllerなので使い始めましたが、しばらくいじっているうちに気に入りました。</p>",
      },
      nginx: {
        description: "<p>静的ファイルやウェブサイトをホストするためによく使っています。このサイトもdockerコンテナ内でNginxを走らせてホストしています。</p>",
      },
      proxmox: {
        description: "<p>私の自宅鯖はすべて Proxmox + VM (Debian) + Kubernetes/NFS の構成で動いています。</p>",
      },
      argocd: {
        description: "<p>Argo CD はもはや私の個人開発には欠かせない存在になりました。CI/CDパイプラインのセットアップからデプロイ済みのアプリケーションの状態管理まで、色々お世話になっています。</p>",
      },
      ceph: {
        description: "<p>自宅鯖にはオーバーキルな気もしましたが、Cephを導入することによってストレージ面での単一障害点を解消することができたので、とても満足しています。</p>",
      },
    },
    projects: {
      title: "プロジェクト",
      this_website: {
        name: "当サイト",
        description: "現在ご覧いただいているサイトです。",
      },
      cs_go: {
        name: "CS Go",
        description: "Goで実装されたコンピュータサイエンスのアルゴリズムとデータ構造。",
      },
      leetcode: {
        name: "Leetcode",
        description: "Goで解いたLeetcodeの問題。",
      },
      neovim: {
        name: "Neovim",
        description: "私のNeovim設定ファイル",
      },
      business_card: {
        name: "名刺アプリ",
        description: "AWSとReactの練習用に作成したシンプルなウェブサイト。",
      },
      thumbgen: {
        name: "ThumbGen",
        description: "動画のサムネイルを生成するコマンドラインツール。",
      },
      my_domain: {
        name: "このドメイン",
        description: "サブドメインを含むこのドメイン上のサービスを全て、k3sクラスター上でセルフホスティングしています。",
      },
      town: {
        name: "Town",
        description: "2DトップダウンRPGゲームの制作を試みましたが、現在は未完です...",
      },
      k3s: {
        name: "自宅Kubernetesクラスター",
        description: "冗長構成のk3sクラスター上でHTTPSウェブサイトをホスティングしています。",
      },
      review: {
        name: "Review Planner",
        description: "復習サイクルの管理を手助けするウェブアプリ。",
      },
      homelab: {
        name: "自宅環境",
        description: "セルフホスティングしているサービスを支える自宅のインフラアーキテクチャの紹介。",
      },
    },
    exp: {
      at: "@",
      bostoncollege: {
        name: "ボストンカレッジ",
        company: "ボストンカレッジ",
        title: "学生",
        description: "<p>ボストンカレッジではコンピュータサイエンスを専攻し、数学を副専攻しました。また、1学期間、コンピューターサイエンスの授業にてTAを務めました。</p>",
      },
      apolloeye: {
        name: "ApolloEye",
        company: "Apollo Eye",
        title: "ソフトウェアエンジニア",
        description: "<p>Apollo Eyeは、太陽光発電所の監視により良いソリューションを提供する会社です。Apollo Eyeは独自開発したソフトウェアで発電所の運用情報を収集し、故障が検出された際には個々のオーナーにアラートを送信します。以下は、私が携わったプロジェクトです：</p>",
        logrpa: {
          title: "電力データ収集",
          description: `
            <li>複数の管理会社のウェブサイトから電力データを収集し、内部データベースに保存するためのwebスクレイピングプログラムをJavaとSeleniumを使って開発</li>
            <li>対象のウェブサイトに変更があった際のアプリケーションの修正・メンテナンス</li>
            <li>JUnitとMockitoを使用しプログラムのユニットテストを作成</li>
          `,
        },
        aeweb: {
          title: "顧客向けウェブサイト開発",
          description: `
            <li>SpringBoot MVCとThymeleafを使用し、発電所のパフォーマンスを可視化する顧客向けウェブサイト（フルスタック）を開発・運用</li>
            <li>発電量データをCSVファイルとしてダウンロードできる機能を実装</li>
            <li>JUnitとMockitoを使用してプログラムのユニットテストを作成</li>
          `,
        },
        aemonitor: {
          title: "ヘルスチェックプログラム",
          description: `
            <li>SpringBootとSeleniumを使用し、顧客向けウェブサイトの運行状況を監視するヘルスチェックプログラムを開発</li>
            <li>cronを使用して、ヘルスチェックプログラムを定期的に実行</li>
            <li>Docker Composeを使用し、プログラムをAWS EC2にデプロイ</li>
          `,
        },
      },
      prussian: {
        name: "Prussian",
        company: "Prussian Inc",
        title: "SaaS ソフトウェアエンジニア",
        description: `
          <p>Prussian Inc.は、企業や投資ファームに対して、エンタープライズグレードのHedging-as-a-Service（HaaS）スイートを通じて、アクティブヘッジング、マネタイズ、インテリジェンスサービスを提供するフィンテックのスタートアップ企業です。Prussian Inc.の目的は「ヘッジング」の概念を再定義し、ヘッジングの手順を一新することです。以下は、私が携わったプロジェクトです：</p>
        `,
        prussian: {
          title: "サーバーレスフルスタック開発",
          description: `
            <li>AWS Lambda、API Gateway、DynamoDB、S3を使用したサーバーレスアプリケーションを開発</li>
            <li>AWS Cognitoを使用して認証機能を実装</li>
            <li>S3 static website hosting を利用して、Reactを使ったクライアント向けウェブサイトを開発</li>
          `,
        },
        tinky: {
          title: "モバイルアプリ開発",
          description: `
            <li>React Nativeを使用し、iOS/Android向けの顧客向けモバイルアプリケーションを開発</li>
            <li>AWS Lambda、API Gateway、DynamoDBを使用し、バックエンドのサーバーレスウェブサービスを開発</li>
          `,
        },
      },
      nagrastar: {
        name: "Nagrastar",
        company: "Nagrastar LLC",
        title: "ソフトウェアエンジニア",
        description: `
          <p>NagraStarは、EchoStarとKudelski Groupの合弁会社で、EchostarやBell TVを含む衛星TV業界の顧客向け（B2B）にセキュリティおよび自動化ソリューションを提供しています。以下は、私が携わったプロジェクトです：</p>
        `,
        ns_manager: {
          title: "Dockerコンテナ管理プラットフォーム",
          description: `
            <li>NagraStarが開発したアプリケーションの複数インスタンスを管理するウェブUIを開発</li>
            <li>UIからDockerコンテナの起動/停止をサポートし、設定パラメータを即時に変更できるようにする</li>
          `,
        },
        ns_events: {
          title: "テレビ番組データの検証とインポート",
          description: `
            <li>顧客向けのウェブUIを開発し、検証およびインポート過程の開始と追跡をサポート</li>
            <li>データを検証し、データベースに保存するバックエンドアプリケーションを開発</li>
            <li>バックエンドサービスの複数インスタンス間でワークロードを分散させ、パフォーマンスを向上</li>
          `,
        },
        ns_publish: {
          title: "動画コンテンツを暗号化し衛星に送信",
          description: `
            <li>動画ファイルを暗号化し、衛星に転送する分散型システムの開発および運用</li>
            <li>ステータス表示と他のコンポーネントの制御パネルとして機能する、顧客向けのウェブベースのGUIを開発および運用</li>
            <li>Seleniumを使用したUIテストを含むE2Eのテストプログラムを開発</li>
          `,
        },
      },
    },
    pref: {
      colorTheme: {
        title: "カラーテーマ",
        dark: "ダーク",
        light: "ライト",
        auto: "自動",
        toast: {
          switchToDark: "テーマ：ダークモード",
          switchToLight: "テーマ：ライトモード",
          switchToSystem: "テーマ：システム設定",
          switchToManual: "テーマ：手動設定",
        }
      },
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
        blog: "博客",
        email: "邮件",
      },
      intro: {
        title: "你好，",
        content: `
          <p>欢迎来到我的个人网站。我是王君毅，一名专业和业余软件工程师。</p>
          <p>我主要关注的领域是web开发和自管托 (self-hosting)。该网页和我的博客都管托于我自己的{{k3s}}，以后还打算管托更多的web service。</p>
          <p>By the way, I use <code>vim (Neovim)</code> and <code>Arch</code>. If you are interested, my dot files are all on my {{github}}.</p>
        `
      },
      tech: {
        title: "职业技能",
        content: "<p>我的职业技能以全栈web开发为主，也有一些CI/CD的经验。</p>",
        frontend: "前端",
        backend: "后端",
        database: "数据库",
        cicd: "CI/CD",
        infra: "基础设施",
        automation: "自动化",
        others: "其他",
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
      actions: {
        download: "下载简历 (英文)",
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
          <p>我第一次使用 <code>C#</code> 纯粹是出于工作需要，但作为一个 <code>Java</code> 开发者，我有体会到为什么有人说 "C# is Java done right"。</p>
        `
      },
      cpp: {
        description: `
          <p>这也是我在工作当中学到的一门新语言。我目前主要负责在一些后端程序中追加新功能。</p>
        `
      },
      sveltekit: {
        description: `
          <p>无论是SPA还是全栈开发，我都很享受用<code>SvelteKit</code>。</p>
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
      oracledb: {
        description: `<p><code>Oracle Database</code> 是一个在企业中广泛使用的数据库，我也在工作中接触过。</p>`,
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
      gitlab: {
        description: `<p>在工作当中最常用的DevOps工具是GitLab。</p>`,
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
          <p>我工作用Linux，家里也用Linux，即使我在睡觉我的程序也运行在Linux上。我喜欢在服务器上用Debian，工作站上用Arch。</p>
        `
      },
      bash: {
        description: `
          <p>我尝试过zsh，但还是更喜欢bash的简洁性，并且它也是很多系统上的标配。</p>
        `
      },
      lua: {
        description: `
          <p>我的整个Neovim配置都是用Lua写的。</p>
        `
      },
      vim: {
        description: `<p>我搭建新服务器的时候第一个安装的就是vim。</p>`,
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
      ansible: {
        description: `<p>我经常会在家里的服务器上用Ansible自动化一些任务，比如更新和安装一些软件包。</p>`,
      },
      sub: {
        title: "使用过",
      },
      traefik: {
        description: "<p>Traefik 是我在 k3s 集群上使用的 ingress controller。</p>",
      },
      nginx: {
        description: "<p>我经常用它来托管静态文件和网站。这个网站也是用docker容器里的Nginx托管的。</p>",
      },
      proxmox: {
        description: "<p>我所有的个人服务器都由 Proxmox + VM (Debian) + Kubernetes/NFS 的组合运行。</p>",
      },
      argocd: {
        description: "<p>Argo CD 现在是我个人开发中不可或缺的一部分。它帮助我设置 CI/CD pipeline 并管理我的应用程序。</p>",
      },
      ceph: {
        description: "<p>Ceph帮助我解决了一个数据存储方面的单点故障。</p>",
      },
    },
    projects: {
      title: "个人项目",
      this_website: {
        name: "该网站",
        description: "你正在浏览的网站。",
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
        name: "自家Kubernetes集群",
        description: "在自己家里搭建的k3s集群上托管HTTPS网站。",
      },
      my_domain: {
        name: "当前的域名",
        description: "该域名上的所有服务，包括子域名，都是在k3s集群上自托管的。",
      },
      town: {
        name: "Town",
        description: "这是我试图制作的2D顶视RPG游戏。未完待续...",
      },
      review: {
        name: "Review Planner",
        description: "一个帮助管理复习周期的网站。",
      },
      homelab: {
        name: "自家服务器环境",
        description: "支撑我各种自托管服务的基础设施架构。",
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
      colorTheme: {
        title: "颜色主题",
        dark: "深色",
        light: "浅色",
        auto: "自动",
        toast: {
          switchToDark: "色调：深色模式",
          switchToLight: "色调：浅色模式",
          switchToSystem: "色调：系统设置",
          switchToManual: "色调：手动设置",
        }
      },
    },
  },
};
export default translations;

