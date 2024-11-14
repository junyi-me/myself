import type { TechType } from "../types";

export const techs: { [key: string]: TechType } = {
  svelte: {
    key: "svelte",
    txDescription: "tech.svelte.description",
    name: "Svelte",
    link: "https://svelte.dev/",
    img: "images/svelte256.png",
    projects: [
      {
        key: "this_website",
        name: "This Website",
        link: "/",
        img: "images/github256.png",
      }
    ],
  },
  react: {
    key: "react",
    txDescription: "tech.react.description",
    name: "React",
    link: "https://react.dev/",
    img: "images/react128.png",
    projects: [
      {
        key: "business_card",
        name: "Business Card",
        link: "http://businesscardjy.com.s3-website-us-east-1.amazonaws.com/",
        img: "images/github256.png",
      },
    ],
    sub: [
      {
        key: "reactnative",
        name: "React Native",
        link: "https://reactnative.dev/",
        img: "images/react128.png",
      },
      {
        key: "redux",
        name: "Redux",
        link: "https://redux.js.org/",
        img: "images/redux256.png",
      },
    ],
  },
  html_css_js: {
    key: "html_css_js",
    txDescription: "tech.html_css_js.description",
    name: "HTML/CSS/JS",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: "images/html_css_js256.png",
    sub: [
      {
        key: "htmx",
        name: "htmx",
        link: "https://htmx.org/",
        img: "images/htmx192.png",
      },
      {
        key: "jquery",
        name: "jQuery",
        link: "https://jquery.com/",
        img: "images/jquery256.png",
      },
      {
        key: "typescript",
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        img: "images/typescript256.png",
      },
      {
        key: "bootstrap",
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        img: "images/bootstrap256.png",
      },
    ],
  },
  golang: {
    key: "golang",
    txDescription: "tech.golang.description",
    name: "Go",
    link: "https://go.dev/",
    img: "images/go256.png",
    projects: [
      {
        key: "thumbgen",
        name: "ThumbGen",
        link: "https://github.com/jywang99/thumbgen",
        img: "images/github256.png",
      },
      {
        key: "cs_go",
        name: "CS Go",
        link: "https://github.com/jywang99/cs_go",
        img: "images/github256.png",
      },
      {
        key: "leetcode",
        name: "Leetcode",
        link: "https://github.com/jywang99/leetcode",
        img: "images/github256.png",
      },
    ],
    sub: [
      {
        key: "echo",
        name: "echo",
        link: "https://echo.labstack.com/",
        img: "images/echo220.png",
      },
      {
        key: "gosql",
        name: "database/sql",
        link: "https://pkg.go.dev/database/sql",
        img: "images/gopher.svg",
      },
    ],
  },
  java: {
    key: "java",
    txDescription: "tech.java.description",
    name: "Java",
    link: "https://www.java.com/",
    img: "images/java256.png",
    sub: [
      {
        key: "springboot",
        name: "Spring Boot",
        link: "https://spring.io/projects/spring-boot",
        img: "images/springboot256.png",
      },
      {
        key: "maven",
        name: "Maven",
        link: "https://maven.apache.org/",
        img: "images/maven.ico",
      },
      {
        key: "jpa",
        name: "Spring Data JPA",
        link: "https://spring.io/projects/spring-data-jpa",
        img: "images/jpa256.png",
      },
      {
        key: "junit",
        name: "JUnit",
        link: "https://junit.org/junit5/",
        img: "images/junit256.png",
      },
      {
        key: "mockito",
        name: "Mockito",
        link: "https://site.mockito.org/",
        img: "images/mockito.webp",
      },
    ]
  },
  python: {
    key: "python",
    txDescription: "tech.python.description",
    name: "Python",
    link: "https://www.python.org/",
  img: "images/python256.png",
    sub: [
      {
        key: "flask",
        name: "Flask",
        link: "https://flask.palletsprojects.com/",
        img: "images/flask256.png",
      },
      {
        key: "django",
        name: "Django",
        link: "https://www.djangoproject.com/",
        img: "images/django256.png",
      },
      {
        key: "sqlalchemy",
        name: "SQLAlchemy",
        link: "https://www.sqlalchemy.org/",
        img: "images/sqlalchemy120.png",
      },
    ]
  },
  csharp: {
    key: "csharp",
    txDescription: "tech.csharp.description",
    name: "C#",
    link: "https://dotnet.microsoft.com/languages/csharp",
    img: "images/csharp256.png",
    sub: [
      {
        key: "dotnet",
        name: ".NET",
        link: "https://dotnet.microsoft.com/",
        img: "images/dotnet256.png",
      },
    ]
  },
  cpp: {
    key: "cpp",
    txDescription: "tech.cpp.description",
    name: "C++",
    link: "https://cplusplus.com/",
    img: "images/cpp256.png",
    sub: [
      {
        key: "civet",
        name: "CivetWeb",
        link: "https://civetweb.github.io/civetweb/",
        img: "images/civet64.png",
      },
    ]
  },
  mysql: {
    key: "mysql",
    txDescription: "tech.mysql.description",
    name: "MySQL",
    link: "https://www.mysql.com/",
    img: "images/mysql256.png",
  },
  postgres: {
    key: "mysql",
    txDescription: "tech.postgres.description",
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
    img: "images/postgres.png",
  },
  dynamodb: {
    key: "dynamodb",
    txDescription: "tech.dynamodb.description",
    name: "DynamoDB",
    link: "https://aws.amazon.com/dynamodb/",
    img: "images/dynamodb256.png",
  },
  github: {
    key: "github",
    txDescription: "tech.github.description",
    name: "GitHub",
    link: "github.com",
    img: "images/github256.png",
    sub: [
      {
        key: "actions",
        name: "GitHub Actions",
        link: "https://github.com/features/actions",
        img: "images/github256.png",
      }
    ],
  },
  docker: {
    key: "docker",
    txDescription: "tech.docker.description",
    name: "Docker",
    link: "https://www.docker.com/",
    img: "images/docker256.png",
    sub: [
      {
        key: "compose",
        name: "Docker Compose",
        link: "https://docs.docker.com/compose/",
        img: "images/compose256.png",
      },
    ]
  },
  kubernetes: {
    key: "kubernetes",
    txDescription: "tech.kubernetes.description",
    name: "Kubernetes",
    link: "https://kubernetes.io/",
    img: "images/kubernetes256.png",
    sub: [
      {
        key: "k3s",
        name: "k3s",
        link: "https://k3s.io/",
        img: "images/k3s.svg",
      },
      {
        key: "helm",
        name: "Helm",
        link: "https://helm.sh/",
        img: "images/helm.svg",
      },
    ]
  },
  aws: {
    key: "aws",
    txDescription: "tech.aws.description",
    name: "AWS",
    link: "https://aws.amazon.com/",
    img: "images/aws256.png",
    sub: [
      {
        key: "lambda",
        name: "Lambda",
        link: "https://aws.amazon.com/lambda/",
        img: "images/lambda256.png",
      },
      {
        key: "ec2",
        name: "EC2",
        link: "https://aws.amazon.com/ec2/",
        img: "images/ec2256.png",
      },
      {
        key: "api_gw",
        name: "API Gateway",
        link: "https://aws.amazon.com/api-gateway/",
        img: "images/api_gw256.png",
      },
      {
        key: "dynamodb",
        name: "DynamoDB",
        link: "https://aws.amazon.com/dynamodb/",
        img: "images/dynamodb256.png",
      },
      {
        key: "s3",
        name: "S3",
        link: "https://aws.amazon.com/s3/",
        img: "images/s3256.png",
      },
      {
        key: "route53",
        name: "Route 53",
        link: "https://aws.amazon.com/route53/",
        img: "images/route53256.png",
      },
      {
        key: "cloudfront",
        name: "CloudFront",
        link: "https://aws.amazon.com/cloudfront/",
        img: "images/cloudfront256.png",
      },
      {
        key: "iam",
        name: "IAM",
        link: "https://aws.amazon.com/iam/",
        img: "images/iam256.png",
      },
      {
        key: "cognito",
        name: "Cognito",
        link: "https://aws.amazon.com/cognito/",
        img: "images/cognito256.png",
      },
      {
        key: "cloudwatch",
        name: "CloudWatch",
        link: "https://aws.amazon.com/cloudwatch/",
        img: "images/cloudwatch256.png",
      },
      {
        key: "stepfn",
        name: "Step Functions",
        link: "https://aws.amazon.com/step-functions/",
        img: "images/step_fn256.png",
      },
    ],
    projects: [
      {
        key: "business_card",
        name: "Business Card",
        link: "http://businesscardjy.com.s3-website-us-east-1.amazonaws.com/",
        img: "images/github256.png",
      },
    ],
  },
  gcp: {
    key: "gcp",
    txDescription: "tech.gcp.description",
    name: "Google Cloud",
    link: "https://cloud.google.com/",
    img: "images/gcp256.png",
    sub: [
      {
        key: "gce",
        name: "Compute Engine",
        link: "https://cloud.google.com/compute/",
        img: "images/gce256.png",
      },
      {
        key: "gcs",
        name: "Cloud Storage",
        link: "https://cloud.google.com/storage/",
        img: "images/gcs256.png",
      },
    ]
  },
  linux: {
    key: "linux",
    txDescription: "tech.linux.description",
    name: "Linux",
    link: "https://archlinux.org/",
    img: "images/linux256.png",
    sub: [
      {
        key: "arch",
        name: "Arch Linux",
        link: "https://archlinux.org/",
        img: "images/arch256.png",
      },
      {
        key: "debian",
        name: "Debian",
        link: "https://www.debian.org/",
        img: "images/debian.svg",
      },
      {
        key: "ubuntu",
        name: "Ubuntu",
        link: "https://ubuntu.com/",
        img: "images/ubuntu256.png",
      },
    ],
  },
  bash: {
    key: "bash",
    txDescription: "tech.bash.description",
    name: "Bash",
    link: "https://www.gnu.org/software/bash/",
    img: "images/bash.svg",
    sub: [
      {
        key: "vim",
        name: "Vim",
        link: "https://www.vim.org/",
        img: "images/vim256.png",
      },
      {
        key: "tmux",
        name: "Tmux",
        link: "https://github.com/tmux/tmux/wiki",
        img: "images/tmux.svg",
      },
      {
        key: "cron",
        name: "Cron",
        link: "https://en.wikipedia.org/wiki/Cron",
        img: "images/cron.png",
      },
      {
        key: "shellscript",
        name: "Shell Script",
        link: "https://en.wikipedia.org/wiki/Shell_script",
        img: "images/bash.svg",
      },
    ],
  },
  lua: {
    key: "lua",
    txDescription: "tech.lua.description",
    name: "Lua",
    link: "https://lua.org/",
    img: "images/lua256.png",
    projects: [
      {
        key: "neovim",
        name: "~/.config/nvim/",
        link: "https://github.com/jywang99/neovim",
        img: "images/github256.png",
      }
    ],
  },
  neovim: {
    key: "neovim",
    txDescription: "tech.neovim.description",
    name: "Neovim",
    link: "https://neovim.io/",
    img: "images/neovim256.png",
    projects: [
      {
        key: "neovim",
        name: "~/.config/nvim/",
        link: "/",
        img: "images/github256.png",
      },
    ],
  },
  selenium: {
    key: "selenium",
    txDescription: "tech.selenium.description",
    name: "Selenium",
    link: "https://www.selenium.dev/",
    img: "images/selenium256.png",
    sub: [
      {
        key: "chrome_devtool",
        name: "Chrome DevTools",
        link: "https://developer.chrome.com/docs/devtools/",
        img: "images/chrome256.png",
      },
      {
        key: "selenium_ide",
        name: "Selenium IDE",
        link: "https://www.selenium.dev/selenium-ide/",
        img: "images/selenium-ide128.png",
      },
    ],
  },
};
export type TechKeyType = keyof typeof techs;

export default {
  frontend: [
    techs.svelte,
    techs.react,
    techs.html_css_js,
  ],
  backend: [
    techs.golang,
    techs.java,
    techs.python,
    techs.csharp,
    techs.cpp,
  ],
  database: [
    techs.postgres,
    techs.mysql,
    techs.dynamodb,
  ],
  ci_cd: [
    techs.github,
    techs.docker,
    techs.kubernetes,
  ],
  cloud: [
    techs.aws,
    techs.gcp,
  ],
  others: [
    techs.linux,
    techs.bash,
    techs.lua,
    techs.neovim,
    techs.selenium,
  ],
} as { [key: string]: TechType[] };

