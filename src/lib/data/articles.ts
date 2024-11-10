import type { ArticleType } from '../types';

export type ArticleKeyType = 'intro' | 'why' | 'tech' | 'projects' | 'certs' | 'exp';

export const articles: { [key in ArticleKeyType]: ArticleType } = {
  'intro': {
    txTitle: 'home.intro.title',
    txContent: 'home.intro.content',
  },
  'why': {
    txTitle: 'home.why.title',
    txContent: 'home.why.content',
  },
  'tech': {
    txTitle: 'home.tech.title',
    txContent: 'home.tech.content',
  },
  'projects': {
    txTitle: 'home.projects.title',
    txContent: 'home.projects.content',
  },
  'certs': {
    txTitle: 'home.certs.title',
    txContent: 'home.certs.content',
  },
  'exp': {
    txTitle: 'home.exp.title',
    txContent: 'home.exp.content',
  }
};

