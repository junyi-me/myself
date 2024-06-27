import type { ExperienceKeyType } from "./types";

export default [
  {
    txKey: "nagrastar",
    startDate: "2023-02",
    projects: [
      {
        txKey: "ns_manager",
        techKeys: [
          {
            key: "python",
            sub: ["flask", "sqlalchemy"],
          },
          {
            key: "html_css_js",
          },
          {
            key: "docker",
          },
          {
            key: "linux"
          },
        ],
      },
      {
        txKey: "ns_events",
        techKeys: [
          {
            key: "python",
          },
          {
            key: "html_css_js",
          },
          {
            key: "docker",
          },
          {
            key: "kubernetes",
          },
          {
            key: "linux"
          },
        ],
      },
      {
        txKey: "ns_publish",
        techKeys: [
          {
            key: "python",
          },
          {
            key: "csharp",
          },
          {
            key: "cpp",
          },
          {
            key: "html_css_js",
          },
          {
            key: "docker",
          },
          {
            key: "kubernetes",
          },
          {
            key: "linux"
          },
        ],
      },
    ],
  },
  {
    txKey: "apolloeye",
    startDate: "2021-02",
    projects: [
      {
        txKey: "logrpa",
        techKeys: [
          {
            key: "java",
          },
          {
            key: "selenium",
          },
          {
            key: "gcp",
          },
          {
            key: "linux"
          },
        ],
      },
      {
        txKey: "aeweb",
        techKeys: [
          {
            key: "java",
          },
          {
            key: "selenium",
          },
          {
            key: "gcp",
          },
          {
            key: "linux"
          },
        ],
      },
      {
        txKey: "aemonitor",
        techKeys: [
          {
            key: "java",
          },
          {
            key: "selenium",
          },
          {
            key: "docker",
          },
          {
            key: "aws",
          },
          {
            key: "linux"
          },
        ],
      },
    ],
  },
  {
    txKey: "prussian",
    startDate: "2022-07",
    endDate: "2023-04",
    projects: [
      {
        txKey: "prussian",
        techKeys: [
          {
            key: "react",
            sub: ["reactnative", "redux"],
          },
          {
            key: "aws",
          },
          {
            key: "dynamodb"
          },
        ],
      },
      {
        txKey: "tinky",
        techKeys: [
          {
            key: "react",
          },
          {
            key: "aws",
            sub: ["lambda", "api_gw", "dynamodb", "s3", "cognito", "cloudfront", "route53", "cloudwatch"],
          },
          {
            key: "dynamodb"
          },
        ],
      },
    ],
  },
] as ExperienceKeyType[];

