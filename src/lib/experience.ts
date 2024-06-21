import type { ExperienceType } from "./types";

export default [
  {
    txKey: "apolloeye",
    startDate: "2021-02",
    content: [
      {
        txKey: "logrpa",
        techKeys: ["java", "springboot", "selenium", "gcp", "linux"],
      },
      {
        txKey: "aeweb",
        techKeys: ["java", "springboot", "selenium", "gcp", "linux"],
      },
      {
        txKey: "aemonitor",
        techKeys: ["java", "springboot", "selenium", "docker", "aws", "linux"],
      },
    ],
  },
  {
    txKey: "prussian",
    startDate: "2022-07",
    endDate: "2023-04",
    content: [
      {
        txKey: "prussian",
        techKeys: ["react", "aws", "dynamodb"],
      },
      {
        txKey: "tinky",
        techKeys: ["react", "aws", "dynamodb"],
      },
    ],
  }
] as ExperienceType[];

