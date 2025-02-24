import type { PProjectType, TechType } from "../types";

const techProjectsRaw = {
  thisWebsite: {
    txTitle: "projects.this_website.name",
    txDescription: "projects.this_website.description",
    link: "https://github.com/jywang99/myself",
    img: "favicon.png",
  },
  businessCard: {
    txTitle: "projects.business_card.name",
    txDescription: "projects.business_card.description",
    link: "http://businesscardjy.com.s3-website-us-east-1.amazonaws.com/",
    img: "images/github256.png",
  },
  thumbgen: {
    txTitle: "projects.thumbgen.name",
    txDescription: "projects.thumbgen.description",
    link: "https://github.com/jywang99/thumbgen",
    img: "images/github256.png",
  },
  csgo: {
    txTitle: "projects.cs_go.name",
    txDescription: "projects.cs_go.description",
    link: "https://github.com/jywang99/cs_go",
    img: "images/github256.png",
  },
  leetcode: {
    txTitle: "projects.leetcode.name",
    txDescription: "projects.leetcode.description",
    link: "https://github.com/jywang99/leetcode",
    img: "images/github256.png",
  },
  neovim: {
    txTitle: "projects.neovim.name",
    txDescription: "projects.neovim.description",
    link: "https://github.com/jywang99/neovim",
    img: "images/github256.png",
  },
  myDomain: {
    txTitle: "projects.my_domain.name",
    txDescription: "projects.my_domain.description",
    link: "https://junyi.me",
    img: "images/github256.png",
  },
  town: {
    txTitle: "projects.town.name",
    txDescription: "projects.town.description",
    link: "https://town.junyi.me",
    img: "images/github256.png",
  },
  review: {
    txTitle: "projects.review.name",
    txDescription: "projects.review.description",
    link: "https://review.junyi.me/",
    img: "images/github256.png",
  },
};
export type TechProjectKeyType = keyof typeof techProjectsRaw;
export const techProjects: Record<TechProjectKeyType, PProjectType> = techProjectsRaw;

const techsRaw = {
  svelte: {
    key: "svelte",
    txDescription: "tech.svelte.description",
    name: "Svelte",
    link: "https://svelte.dev/",
    img: "images/svelte256.png",
    projects: [ techProjects.thisWebsite, ],
  },
  react: {
    key: "react",
    txDescription: "tech.react.description",
    name: "React",
    link: "https://react.dev/",
    img: "images/react128.png",
    projects: [ techProjects.businessCard, ],
    sub: [
      {
        name: "React Native",
        link: "https://reactnative.dev/",
        img: "images/react128.png",
      },
      {
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
        name: "htmx",
        link: "https://htmx.org/",
        img: "images/htmx192.png",
      },
      {
        name: "jQuery",
        link: "https://jquery.com/",
        img: "images/jquery256.png",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        img: "images/typescript256.png",
      },
      {
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
    projects: [ techProjects.thumbgen, techProjects.csgo, techProjects.leetcode, ],
    sub: [
      {
        name: "labstack/echo",
        link: "https://echo.labstack.com/",
        img: "images/echo220.png",
      },
      {
        name: "database/sql",
        link: "https://pkg.go.dev/database/sql",
        img: "images/gopher.svg",
      },
      {
        name: "jackc/pgx",
        link: "https://github.com/jackc/pgx",
        img: "images/gopher.svg",
      },
      {
        name: "stretchr/testify",
        link: "https://github.com/stretchr/testify",
        img: "images/testify.png",
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
        name: "Spring Boot",
        link: "https://spring.io/projects/spring-boot",
        img: "images/springboot256.png",
      },
      {
        name: "Maven",
        link: "https://maven.apache.org/",
        img: "images/maven.ico",
      },
      {
        name: "Spring Data JPA",
        link: "https://spring.io/projects/spring-data-jpa",
        img: "images/jpa256.png",
      },
      {
        name: "JUnit",
        link: "https://junit.org/junit5/",
        img: "images/junit256.png",
      },
      {
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
        name: "Flask",
        link: "https://flask.palletsprojects.com/",
        img: "images/flask256.png",
      },
      {
        name: "Django",
        link: "https://www.djangoproject.com/",
        img: "images/django256.png",
      },
      {
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
        name: "CivetWeb",
        link: "https://civetweb.github.io/civetweb/",
        img: "images/civet64.png",
      },
    ]
  },
  sveltekit: {
    key: "sveltekit",
    txDescription: "tech.sveltekit.description",
    name: "SvelteKit",
    link: "https://svelte.dev/docs/kit/introduction",
    img: "images/svelte256.png",
    projects: [ techProjects.thisWebsite, techProjects.review, ],
    sub: [
      {
        key: "drizzle",
        name: "Drizzle",
        link: "https://orm.drizzle.team/",
        img: "images/drizzle.png",
      },
    ],
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
    darkImg: "images/github-dark256.png",
    sub: [
      {
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
    projects: [ techProjects.myDomain, ],
    sub: [
      {
        name: "k3s",
        link: "https://k3s.io/",
        img: "images/k3s.png",
      },
      {
        name: "Helm",
        link: "https://helm.sh/",
        img: "images/helm.svg",
      },
      {
        name: "Kustomize",
        link: "https://kustomize.io/",
        img: "images/kustomize.png",
      }
    ]
  },
  aws: {
    key: "aws",
    txDescription: "tech.aws.description",
    name: "AWS",
    link: "https://aws.amazon.com/",
    img: "images/aws.png",
    sub: [
      {
        name: "Lambda",
        link: "https://aws.amazon.com/lambda/",
        img: "images/lambda256.png",
      },
      {
        name: "EC2",
        link: "https://aws.amazon.com/ec2/",
        img: "images/ec2256.png",
      },
      {
        name: "API Gateway",
        link: "https://aws.amazon.com/api-gateway/",
        img: "images/api_gw256.png",
      },
      {
        name: "DynamoDB",
        link: "https://aws.amazon.com/dynamodb/",
        img: "images/dynamodb256.png",
      },
      {
        name: "S3",
        link: "https://aws.amazon.com/s3/",
        img: "images/s3256.png",
      },
      {
        name: "Route 53",
        link: "https://aws.amazon.com/route53/",
        img: "images/route53256.png",
      },
      {
        name: "CloudFront",
        link: "https://aws.amazon.com/cloudfront/",
        img: "images/cloudfront256.png",
      },
      {
        name: "IAM",
        link: "https://aws.amazon.com/iam/",
        img: "images/iam256.png",
      },
      {
        name: "Cognito",
        link: "https://aws.amazon.com/cognito/",
        img: "images/cognito256.png",
      },
      {
        name: "CloudWatch",
        link: "https://aws.amazon.com/cloudwatch/",
        img: "images/cloudwatch256.png",
      },
      {
        name: "Step Functions",
        link: "https://aws.amazon.com/step-functions/",
        img: "images/step_fn256.png",
      },
    ],
    projects: [ techProjects.businessCard, ],
  },
  gcp: {
    key: "gcp",
    txDescription: "tech.gcp.description",
    name: "Google Cloud",
    link: "https://cloud.google.com/",
    img: "images/gcp256.png",
    sub: [
      {
        name: "Compute Engine",
        link: "https://cloud.google.com/compute/",
        img: "images/gce256.png",
      },
      {
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
        name: "Arch Linux",
        link: "https://archlinux.org/",
        img: "images/arch256.png",
      },
      {
        name: "Debian",
        link: "https://www.debian.org/",
        img: "images/debian.svg",
      },
      {
        name: "Ubuntu",
        link: "https://ubuntu.com/",
        img: "images/ubuntu256.png",
      },
      {
        key: "nfs",
        name: "NFS",
        link: "https://docs.kernel.org/admin-guide/nfs/index.html",
        img: "images/linux256.png",
      },
      {
        key: "kvm",
        name: "libvirt/KVM",
        link: "https://libvirt.org/",
        img: "images/libvirt64.png",
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
        name: "Vim",
        link: "https://www.vim.org/",
        img: "images/vim256.png",
      },
      {
        name: "Tmux",
        link: "https://github.com/tmux/tmux/wiki",
        img: "images/tmux.svg",
      },
      {
        name: "Cron",
        link: "https://en.wikipedia.org/wiki/Cron",
        img: "images/cron.png",
      },
      {
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
    projects: [ techProjects.neovim, ],
  },
  vim: {
    key: "vim",
    txDescription: "tech.vim.description",
    name: "Vim",
    link: "https://www.vim.org/",
    img: "images/vim256.png",
  },
  neovim: {
    key: "neovim",
    txDescription: "tech.neovim.description",
    name: "Neovim",
    link: "https://neovim.io/",
    img: "images/neovim256.png",
    projects: [ techProjects.neovim, ],
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
  phaser: {
    key: "phaser",
    txDescription: "tech.phaser.description",
    name: "Phaser",
    link: "https://phaser.io/",
    img: "images/phaser.png",
    projects: [ techProjects.town, ],
  },
  tiled: {
    key: "tiled",
    txDescription: "tech.tiled.description",
    name: "Tiled",
    link: "https://www.mapeditor.org/",
    img: "images/tiled.png",
  },
  ansible: {
    key: "ansible",
    txDescription: "tech.ansible.description",
    name: "Ansible",
    link: "https://www.ansible.com/",
    img: "images/ansible.png",
  },
  traefik: {
    key: "traefik",
    txDescription: "tech.traefik.description",
    name: "Traefik",
    link: "https://traefik.io/traefik/",
    img: "images/traefik.png",
    projects: [ techProjects.myDomain, ],
  },
  nginx: {
    key: "nginx",
    txDescription: "tech.nginx.description",
    name: "Nginx",
    link: "https://www.nginx.com/",
    img: "images/nginx.png",
    sub: [
      {
        key: "nginx_reverse_proxy",
        name: "Nginx Reverse Proxy",
        link: "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/",
        img: "images/nginx.png",
      },
      {
        key: "ngx_http_auth_request_module",
        name: "Nginx HTTP Auth Request Module",
        link: "http://nginx.org/en/docs/http/ngx_http_auth_request_module.html",
        img: "images/nginx.png",
      },
    ]
  },
  proxmox: {
    key: "proxmox",
    txDescription: "tech.proxmox.description",
    name: "Proxmox",
    link: "https://www.proxmox.com/",
    img: "images/proxmox.png",
  },
  argocd: {
    key: "argocd",
    txDescription: "tech.argocd.description",
    name: "Argo CD",
    link: "https://argo-cd.readthedocs.io/en/stable/",
    img: "images/argocd.png",
    sub: [
      {
        key: "image_updater",
        name: "Argo CD Image Updater",
        link: "https://argocd-image-updater.readthedocs.io/en/stable/",
        img: "images/argocd.png",
      },
    ]
  },
  ceph: {
    key: "ceph",
    txDescription: "tech.ceph.description",
    name: "Ceph",
    link: "phttps://ceph.io/",
    img: "images/ceph.png",
  },
};
export type TechKeyType = keyof typeof techsRaw;
export const techs: Record<TechKeyType, TechType> = techsRaw;

const techCategoriesRaw = {
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
    techs.sveltekit,
  ],
  database: [
    techs.postgres,
    techs.mysql,
    techs.dynamodb,
  ],
  ci_cd: [
    techs.github,
    techs.docker,
    techs.argocd,
  ],
  infra: [
    techs.aws,
    techs.gcp,
    techs.proxmox,
    techs.kubernetes,
    techs.traefik,
    techs.nginx,
    techs.ceph,
  ],
  automation: [
    techs.selenium,
    techs.ansible,
  ],
  others: [
    techs.linux,
    techs.bash,
    techs.neovim,
    techs.lua,
    techs.vim,
  ],
  gamedev: [
    techs.phaser,
    techs.tiled,
  ],
};
export type TechCategoryKeyType = keyof typeof techCategoriesRaw;
const techCategories: Record<TechCategoryKeyType, TechType[]> = techCategoriesRaw;
export default techCategories;

