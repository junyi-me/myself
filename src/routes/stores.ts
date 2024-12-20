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

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
let switchFn: ((e: MediaQueryListEvent) => void) | null = null;

const switchDarkTheme = (dark: boolean) => document.documentElement.dataset.scheme = dark ? 'dark' : 'light';
const switchTheme = (userDark: boolean, systemTheme: boolean) => {
  if (systemTheme) {
    // Add the listener only if it doesn't exist
    if (!switchFn) {
      switchFn = (e: MediaQueryListEvent) => switchDarkTheme(e.matches);
      mediaQuery.addEventListener('change', switchFn);
    }

    // Set the color based on current system preference
    switchDarkTheme(mediaQuery.matches);
    // also update store, for other components to react
    if (userDark !== mediaQuery.matches) {
      store.update((current) => {
        current.pref.darkTheme = mediaQuery.matches;
        return current;
      });
    }
  }

  // Remove the listener if switching to a specific theme
  if (switchFn) {
    mediaQuery.removeEventListener('change', switchFn);
    switchFn = null;
  }
  switchDarkTheme(userDark);
};

store.subscribe(value => {
  localStorage.content = JSON.stringify(value);
  switchTheme(value.pref.darkTheme, value.pref.systemTheme);
});

export default store;

