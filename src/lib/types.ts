export type ArticleType = {
  name: string;
  title: string;
  content: string;
}

type SubTechType = {
  key: string;
  name: string;
  link: string;
  img: string;
}
export type TechType = SubTechType & {
  projects?: {
    key: string;
    name: string;
    link: string;
    img: string;
  }[];
  sub?: SubTechType[];
}

export type ProjectKeyType = {
  txKey: string;
  techKeys: string[];
}
export type ExperienceKeyType = {
  txKey: string;
  startDate: string;
  endDate?: string;
  projects: ProjectKeyType[];
}

export type ProjectType = {
  title: string;
  bullets: string[];
  techs: TechType[];
}
export type ExperienceType = {
  startDate: string;
  endDate?: string;
  title: string;
  company: string;
  description: string;
  projects: ProjectType[];
}

