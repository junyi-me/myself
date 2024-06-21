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

export type ExperienceType = {
  txKey: string;
  startDate: string;
  endDate?: string;
  content: {
    txKey: string;
    techKeys: string[];
  }[];
}

