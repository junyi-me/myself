import type { ExperienceKeyType } from "./types";

export default [
  {
    txKey: "nagrastar",
    startDate: "2023-02",
    projects: [
      {
        txKey: "ns_manager",
        techKeys: ["python", "html_css_js", "docker", "linux"],
      },
      {
        txKey: "ns_events",
        techKeys: ["python", "html_css_js", "docker", "kubernetes", "linux"],
      },
      {
        txKey: "ns_publish",
        techKeys: ["python", "csharp", "cpp", "html_css_js", "docker", "kubernetes", "linux"],
      },
    ],
  },
  {
    txKey: "apolloeye",
    startDate: "2021-02",
    projects: [
      {
        txKey: "logrpa",
        techKeys: ["java", "selenium", "gcp", "linux"],
      },
      {
        txKey: "aeweb",
        techKeys: ["java", "selenium", "gcp", "linux"],
      },
      {
        txKey: "aemonitor",
        techKeys: ["java", "selenium", "docker", "aws", "linux"],
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
        techKeys: ["react", "aws", "dynamodb"],
      },
      {
        txKey: "tinky",
        techKeys: ["react", "aws", "dynamodb"],
      },
    ],
  },
] as ExperienceKeyType[];

