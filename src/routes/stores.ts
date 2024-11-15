import type { LanguageType } from '$lib/types';
import { writable, type Writable } from 'svelte/store';

export type PrefType = {
  lang: LanguageType;
  dark: boolean;
}
export type StoreType = {
  pref: PrefType;
}

const stored = localStorage.content;
const store: Writable<StoreType> = writable(stored ? JSON.parse(stored) : {
  pref: {
    lang: 'en',
    dark: false,
  }
});

store.subscribe(value => {
  localStorage.content = JSON.stringify(value);
});

export default store;

