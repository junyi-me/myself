export type LanguageType = "en" | "jp" | "zh";
type TranslationType = {
  en: Object;
  jp: Object;
  zh: Object;
}

export default {
  en: {
    home: {
      headline: "Junyi Wang, <br />&nbsp&nbsp a software engineer",
      intro: {
        title: "Hi,",
        content: `
          <p>Welcome to my personal website. My name is Junyi Wang and I'm working as a full-time software developer in Devner, CO.</p>
          <p>My primary areas of interest are web development and self-hosting. The website you are seeing right now is hosted on a <a href="https://blog.junyi.me/post/hosting-website-k3s-cluster/">bare-metal kubernetes cluster</a> (and the blog itself), and I'm planning to host more web services as well in the future.</p>
          <p>By the way, I use <code>vim (Neovim)</code> and <code>Arch</code>. If you are interested, my dot files are all on my <a href="https://github.com/jywang99/linux_config">GitHub</a>.</p>
          <p>The keyboards: <a href="https://happyhackingkb.com/jp/">HHKB</a> (both Hybrid Type-S), recommended.</p>
          `,
      },
      tech: {
        title: "Skills",
        content: ``,
      },
      certs: {
        title: "Certifications",
        content: ``
      },
      projects: {
        title: "Projects",
        content: `<p>From time to time, I work on some personal projects. Here are some of them.</p>`,
        k3s: "Hosting an HTTPS website on a HA k3s cluster",
      },
      exp: {
        title: "Work experience",
        content: `
          <p>I graduated from <a href="https://www.bc.edu/">Boston College</a> in summer 2022, majoring in computer science and minoring in mathematics. Since then, I have been working as a full-time software engineer. My first work experience started when I was still in college, as a part time job at ApolloEye, an early stage startup in renewable energy industry. I learned a lot about how to develop from scratch, maintain, and implementing new features. I'm still doing part-time here (remotely).</p>
          <p>After graduation, my first full-time job was at Prussian Inc, another startup company in the financial psychology area. Here I worked on a serverless full-stack application, and completed some AWS certifications in the meanwhile. Good times working with a small but capable team.</p>
          <p>Just a few months later, with some help from my friend, I got into Nagrastar LLC, where I'm currently working at. It was a completely different experience from the previous two positions I had, maintaining source code in corporate standards, and building new features that customers request. Having experience in both startup companies and established corporates became one of my strengths, if I do say so myself.</p>
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
      postgres: {
        description: `<p>Recently I have been using <code>PostgreSQL</code> a lot in my personal projects.</p>`,
      },
      dynamodb: {
        description: `<p>I first learned about this in Prussian. Although learning to think in the NoSQL way was hard, I ended up designing and implementing some schemas to be used in serverless stacks, and it wasn't as bad as I thought!</p>`,
      },
      github: {
        description: `<p>Using <code>GitHub</code> since around 2017, but only recently got into learning <code>GitHub Actions</code>.</p>`,
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
          headline: "The website you are currently viewing.",
        },
        cs_go: {
          headline: "Computer science algorithms and data structures implemented in Go.",
        },
        leetcode: {
          headline: "Leetcode problems solved in Go.",
        },
        neovim: {
          headline: "My Neovim config.",
        },
        business_card: {
          headline: "A simple website I coded to get familiar with AWS and React.",
        },
        thumbgen: {
          headline: "A commandline tool to generate thumbnails for videos.",
          description: `
            <p>Features</p>
            <ul>
              <li>Generate thumbnails for individual videos</li>
              <li>Generate thumbnails for directories containing videos and/or images</li>
              <li>Organize the generated thumbnails in the same directory structure as the original input source folder</li>
            </ul>
          `
        },
      },
      sub: {
        title: "Familiar with",
      },
    },
    exp: {
      at: "at",
      apolloeye: {
        name: "ApolloEye",
        company: "ApolloEye",
        title: "Software Engineer",
        description: "Ene-eco Shift LLC is a company providing better solutions for monitoring solar-power plant operation. Ene-eco Shift uses self-developed software to provide real-time supervision of the power plant operations and sends personalized alerts on a daily basis to plant owners if there are malfunctions detected. Following are projects I worked / am working on:",
        logrpa: {
          title: "Web Scraping",
          description: `
          <li>Develop a web scraping program in Java using Selenium to collect electric power data from multiple managing companies and save in an internal database</li>
          <li>Modify and maintain the program when the target website structure changes.</li>
          <li>Write unit tests for the program using JUnit and Mockito</li>
            `,
        },
        aeweb: {
          title: "Website Development",
          description: `
          <li>Develop and maintain a customer-facing website (both front-end and back-end) using SpringBoot MVC and Thymeleaf to visualize the historical record of generated solar power</li>
          <li>Implemented a feature that allows the user to download the scraped data as a CSV file</li>
          <li>Write unit tests for the program using JUnit and Mockito</li>
            `,
        },
        aemonitor: {
          title: "Healthcheck Programs",
          description: `
          <li>Develop a healthcheck program in Java using SpringBoot and Selenium to monitor the status of the web scraping program</li>
          <li>Use cron jobs to schedule the healthcheck program to run periodically</li>
          <li>Deploy the program to AWS EC2 using Docker</li>
          `,
        },
      },
      prussian: {
        name: "Prussian",
        company: "Prussian Inc",
        title: "SaaS Software Engineer",
        description: "Prussian Inc. is a startup financial technology company, providing Active Hedging, Monetization & Intelligence services to corporations and investment firms, by their enterprise grade Hedging-as-a-Service (HaaS) Suite. Objective of Prussian Inc. is to redefine “hedging”, and reinvent the procedure of hedging. Following are projects I worked on:",
        prussian: {
          title: "Serverless full-stack Development",
          description: `
            <li>Develop a serverless full-stack application using AWS Lambda, API Gateway, DynamoDB, and S3</li>
            <li>Implement authentication using AWS Cognito</li>
            <li>Develop a client-facing webpage using React</li>
          `,
        },
        tinky: {
          title: "Mobile app development",
          description: `
            <li>Develop a customer-facing mobile app for iOS/Android using React Native</li>
            <li>Develop the backend using AWS Lambda, API Gateway, and DynamoDB</li>
          `,
        },
      },
      nagrastar: {
        name: "Nagrastar",
        company: "Nagrastar LLC",
        title: "Junior Software Engineer",
        description: "NagraStar LLC is a company providing security and automation solutions for the satellite TV industry, including Echostar and Bell TV. NagraStar is a joint venture of EchoStar and the Kudelski Group. Following are projects I worked on:",
        ns_manager: {
          title: "Managing docker containers on GUI",
          description: `
            <li>Develop a webpage where users can manage deployed docker containers easily on GUI</li>
            <li>Support start/stop docker containers and changing configuration parameters on the fly</li>
          `,
        },
        ns_events: {
          title: "Validate and import data",
          description: `
            <li>Deploy decoupled applications with load balancing using Kubernetes</li>
            <li>Develop web application for users to see validation erros and import progress</li>
            <li>Develop backend program that validates and inserts data into a database</li>
          `,
        },
        ns_publish: {
          title: "Scramble and send data to customers",
          description: `
            <li>Develop a web application to track the progress of scrambling and publishing</li>
          `,
        },
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

