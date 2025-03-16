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

const defaultStore: StoreType = {
  pref: {
    lang: 'en',
    darkTheme: false,
    systemTheme: true
  }
}
const stored = localStorage.content;
const store: Writable<StoreType> = writable(stored ? JSON.parse(stored) : defaultStore);

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const switchDarkTheme = (dark: boolean) => document.documentElement.dataset.scheme = dark ? 'dark' : 'light';
let switchFn: ((e: MediaQueryListEvent) => void) = (e: MediaQueryListEvent) => switchDarkTheme(e.matches);

mediaQuery.addEventListener('change', switchFn);

const switchTheme = (userDark: boolean, systemTheme: boolean) => {
  if (systemTheme) {
    // Add the listener only if it doesn't exist
    mediaQuery.addEventListener('change', switchFn);

    // Set the color based on current system preference
    switchDarkTheme(mediaQuery.matches);
    // also update store, for other components to react
    if (userDark !== mediaQuery.matches) {
      store.update((current) => {
        current.pref.darkTheme = mediaQuery.matches;
        return current;
      });
    }
    return;
  }

  // Remove the listener if switching to a specific theme
  mediaQuery.removeEventListener('change', switchFn);
  switchDarkTheme(userDark);
};

const validateStore = (store: StoreType) => {
  if (
    typeof store.pref.lang !== 'string' ||
    !store.pref.lang ||
    typeof store.pref.darkTheme !== 'boolean' ||
    typeof store.pref.systemTheme !== 'boolean'
  ) {
    return false;
  }
  return true;
}

store.subscribe(value => {
  if (!validateStore(value)) {
    console.warn('Invalid store, resetting to default', value);
    store.set(defaultStore);
    value = defaultStore;
  }
  localStorage.content = JSON.stringify(value);
  switchTheme(value.pref.darkTheme, value.pref.systemTheme);
});

export default store;

export const toastStore = writable<string | null>(null);

