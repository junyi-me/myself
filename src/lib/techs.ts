type SubTechType = {
  key: string;
  name: string;
  link: string;
  img: string;
}
type TechType = SubTechType & {
  projects?: {
    key: string;
    name: string;
    link: string;
    img: string;
  }[];
  sub?: SubTechType[];
}

export default {
  frontend: [
    {
      key: "svelte",
      name: "Svelte",
      link: "https://svelte.dev/",
      img: "/images/svelte256.png",
      projects: [
        {
          key: "this_website",
          name: "This Website",
          link: "/",
          img: "/images/github.png",
        }
      ],
    },
    {
      key: "react",
      name: "React",
      link: "https://react.dev/",
      img: "/images/react128.png",
    },
    {
      key: "jquery",
      name: "jQuery",
      link: "https://jquery.com/",
      img: "/images/jquery256.png",
    },
    {
      key: "html_css_js",
      name: "HTML/CSS/JS",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      img: "/images/html_css_js256.png",
    },
  ],
  backend: [
    {
      key: "golang",
      name: "Golang",
      link: "https://go.dev/",
      img: "/images/go256.png",
      projects: [
        {
          key: "cs_go",
          name: "CS in Go",
          link: "https://github.com/jywang99/cs_go",
          img: "/images/github.png",
        },
        {
          key: "leetcode",
          name: "Leetcode",
          link: "https://github.com/jywang99/leetcode",
          img: "/images/github.png",
        },
      ],
      sub: [
        {
          key: "echo",
          name: "echo",
          link: "https://echo.labstack.com/",
          img: "/images/echo256.png",
        },
      ],
    },
    {
      key: "java",
      name: "Java",
      link: "https://www.java.com/",
      img: "/images/java256.png",
      sub: [
        {
          key: "springboot",
          name: "Spring Boot",
          link: "https://spring.io/projects/spring-boot",
          img: "/images/springboot256.png",
        },
        {
          key: "maven",
          name: "Maven",
          link: "https://maven.apache.org/",
          img: "/images/maven256.png",
        },
        {
          key: "junit",
          name: "JUnit",
          link: "https://junit.org/junit5/",
          img: "/images/junit256.png",
        },
        {
          key: "jpa",
          name: "Spring Data JPA",
          link: "https://spring.io/projects/spring-data-jpa",
          img: "/images/jpa256.png",
        },
      ]
    },
    {
      key: "python",
      name: "Python",
      link: "https://www.python.org/",
      img: "/images/python256.png",
    },
    {
      key: "csharp",
      name: "C#",
      link: "https://dotnet.microsoft.com/languages/csharp",
      img: "/images/csharp256.png",
    },
    {
      key: "cpp",
      name: "C++",
      link: "https://cplusplus.com/",
      img: "/images/cpp256.png",
    },
  ],
  database: [
    {
      key: "mysql",
      name: "MySQL",
      link: "https://www.mysql.com/",
      img: "/images/mysql256.png",
    },
    {
      key: "dynamodb",
      name: "DynamoDB",
      link: "https://aws.amazon.com/dynamodb/",
      img: "/images/dynamodb256.png",
    },
  ],
  ci_cd: [
    {
      key: "docker",
      name: "Docker",
      link: "https://www.docker.com/",
      img: "/images/docker256.png",
    },
    {
      key: "kubernetes",
      name: "Kubernetes",
      link: "https://kubernetes.io/",
      img: "/images/kubernetes256.png",
    },
  ],
  cloud: [
    {
      key: "aws",
      name: "Amazon Web Services",
      link: "https://aws.amazon.com/",
      img: "/images/aws256.png",
    },
    {
      key: "gcp",
      name: "Google Cloud Platform",
      link: "https://cloud.google.com/",
      img: "/images/gcp256.png",
    },
  ],
  others: [
    {
      key: "linux",
      name: "Linux",
      link: "https://archlinux.org/",
      img: "/images/linux256.png",
    },
    {
      key: "bash",
      name: "Bash",
      link: "https://www.gnu.org/software/bash/",
      img: "/images/bash.svg",
    },
    {
      key: "lua",
      name: "Lua",
      link: "https://lua.org/",
      img: "/images/lua256.png",
    },
    {
      key: "neovim",
      name: "Neovim",
      link: "https://neovim.io/",
      img: "/images/neovim256.png",
    },
    {
      key: "selenium",
      name: "Selenium",
      link: "https://www.selenium.dev/",
      img: "/images/selenium256.png",
    },
  ],
} as { [key: string]: TechType[] };
