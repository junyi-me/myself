import type { LanguageType } from '$lib/data/translations';
import { writable, type Writable } from 'svelte/store';

export type ThemeType = 'light' | 'dark' | 'auto';
export type PrefType = {
  lang: LanguageType;
  theme: ThemeType;
}
export type StoreType = {
  pref: PrefType;
}

const stored = localStorage.content;
const store: Writable<StoreType> = writable(stored ? JSON.parse(stored) : {
  pref: {
    lang: 'en',
    dark: 'auto',
  }
});

store.subscribe(value => {
  localStorage.content = JSON.stringify(value);
});

export default store;

