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
        techs: [ "python", "html_css_js", "docker", "linux", ],
      },
      {
        txTitle: "exp.nagrastar.ns_events.title",
        txDescription: "exp.nagrastar.ns_events.description",
        techs: [ "python", "html_css_js", "docker", "kubernetes", "linux", ],
      },
      {
        txTitle: "exp.nagrastar.ns_publish.title",
        txDescription: "exp.nagrastar.ns_publish.description",
        techs: [ "python", "csharp", "cpp", "html_css_js", "docker", "kubernetes", "linux", "selenium", ],
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
        techs: [ "java", "selenium", "gcp", "linux", ],
      },
      {
        txTitle: "exp.apolloeye.aeweb.title",
        txDescription: "exp.apolloeye.aeweb.description",
        techs: [ "java", "selenium", "gcp", "linux", ],
      },
      {
        txTitle: "exp.apolloeye.aemonitor.title",
        txDescription: "exp.apolloeye.aemonitor.description",
        techs: [ "java", "selenium", "docker", "aws", "linux", ],
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
        techs: [ "react", "aws", "dynamodb", ],
      },
      {
        txTitle: "exp.prussian.tinky.title",
        txDescription: "exp.prussian.tinky.description",
        techs: [ "react", "aws", "dynamodb", ],
      },
    ],
  },
  {
    txOrg: "exp.bostoncollege.company",
    txTitle: "exp.bostoncollege.title",
    txDescription: "exp.bostoncollege.description",
    startDate: new Date("2018-08-26"),
    endDate: new Date("2022-05-22"),
    color: '#ef7c74',
    projects: [],
  },
];

export default experience;

