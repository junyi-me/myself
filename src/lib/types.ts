import type { TechKeyType } from "./data/techs";

export type ArticleType = {
  txTitle: string;
  txContent: string;
}

type SubTechType = {
  key: string
  name: string;
  link: string;
  img: string;
  darkImg?: string;
}

export type TechType = SubTechType & {
  txDescription: string;
  projects?: {
    key: string;
    name: string;
    link: string;
    img: string;
  }[];
  sub?: SubTechType[];
}

export type ProjectType = {
  txTitle: string;
  txDescription: string;
  techs: {
    key: TechKeyType,
    sub?: string[]
  }[];
}

export type ExperienceType = {
  txOrg: string;
  txTitle: string;
  txDescription: string;
  startDate: Date;
  endDate?: Date;
  projects: ProjectType[];
  color: string;
}

export type LanguageType = 'en' | 'jp' | 'cn';

