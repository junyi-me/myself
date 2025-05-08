import type { ArticleType } from '../types';

const articlesRaw = {
  'intro': {
    txTitle: 'home.intro.title',
    txContent: 'home.intro.content',
  },
  'tech': {
    txTitle: 'home.tech.title',
    txContent: 'home.tech.content',
  },
  'certs': {
    txTitle: 'home.certs.title',
    txContent: 'home.certs.content',
  },
  'projects': {
    txTitle: 'home.projects.title',
    txContent: 'home.projects.content',
  },
  'exp': {
    txTitle: 'home.exp.title',
    txContent: 'home.exp.content',
  }
};
export type ArticleKeyType = keyof typeof articlesRaw;
const articles: Record<ArticleKeyType, ArticleType> = articlesRaw;
export default articles;

