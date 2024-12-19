import type { LanguageType } from '$lib/data/translations';
import { writable, type Writable } from 'svelte/store';

export type PrefType = {
  lang: LanguageType;
  darkTheme: boolean;
  systemTheme: boolean;
}
export type StoreType = {
  pref: PrefType;
}

const stored = localStorage.content;
const store: Writable<StoreType> = writable(stored ? JSON.parse(stored) : {
  pref: {
    lang: 'en',
    darkTheme: false,
    systemTheme: true
  }
});

store.subscribe(value => {
  localStorage.content = JSON.stringify(value);
});

export default store;

