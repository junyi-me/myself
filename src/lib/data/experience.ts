import type { ExperienceType } from '../types';

const experience: ExperienceType[] = [
  {
    txOrg: "exp.nagrastar.company",
    txTitle: "exp.nagrastar.title",
    txDescription: "exp.nagrastar.description",
    startDate: new Date("2023-02-16"),
    color: '#ff9900',
    projects: [
      {
        txTitle: "exp.nagrastar.ns_manager.title",
        txDescription: "exp.nagrastar.ns_manager.description",
        techs: [
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
        txTitle: "exp.nagrastar.ns_events.title",
        txDescription: "exp.nagrastar.ns_events.description",
        techs: [
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
        txTitle: "exp.nagrastar.ns_publish.title",
        txDescription: "exp.nagrastar.ns_publish.description",
        techs: [
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
          {
            key: "selenium",
          },
        ],
      },
    ],
  },
  {
    txOrg: "exp.apolloeye.company",
    txTitle: "exp.apolloeye.title",
    txDescription: "exp.apolloeye.description",
    startDate: new Date("2021-02-01"),
    color: '#33cc33',
    projects: [
      {
        txTitle: "exp.apolloeye.logrpa.title",
        txDescription: "exp.apolloeye.logrpa.description",
        techs: [
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
        txTitle: "exp.apolloeye.aeweb.title",
        txDescription: "exp.apolloeye.aeweb.description",
        techs: [
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
        txTitle: "exp.apolloeye.aemonitor.title",
        txDescription: "exp.apolloeye.aemonitor.description",
        techs: [
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
    txOrg: "exp.prussian.company",
    txTitle: "exp.prussian.title",
    txDescription: "exp.prussian.description",
    startDate: new Date("2022-06-22"),
    endDate: new Date("2023-02-15"),
    color: '#3399ff',
    projects: [
      {
        txTitle: "exp.prussian.prussian.title",
        txDescription: "exp.prussian.prussian.description",
        techs: [
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
        txTitle: "exp.prussian.tinky.title",
        txDescription: "exp.prussian.tinky.description",
        techs: [
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
];

export default experience;

