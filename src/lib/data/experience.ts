import type { ExperienceType } from '../types';

export default [
  {
    txHead: "exp.nagrastar.name",
    txCompany: "exp.nagrastar.company",
    txTitle: "exp.nagrastar.title",
    txDescription: "exp.nagrastar.description",
    startDate: "2023-02",
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
        ],
      },
    ],
  },
  {
    txHead: "exp.apolloeye.name",
    txCompany: "exp.apolloeye.company",
    txTitle: "exp.apolloeye.title",
    txDescription: "exp.apolloeye.description",
    startDate: "2021-02",
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
    txHead: "exp.prussian.name",
    txCompany: "exp.prussian.company",
    txTitle: "exp.prussian.title",
    txDescription: "exp.prussian.description",
    startDate: "2022-07",
    endDate: "2023-04",
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
] as ExperienceType[];

