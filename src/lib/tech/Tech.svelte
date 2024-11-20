<script lang="ts">
  import { onDestroy } from "svelte";
  import store from "../../routes/stores";

  export let key: string;
  export let name: string;
  export let img: string;
  export let darkImg: string|undefined;
  export let onClick: () => void;
  export let focus = false;

  let dark = false;
  const unsubscribe = store.subscribe(store => {
    dark = store.pref.dark;
  });
  onDestroy(unsubscribe);
</script>

<div>
  <button class="tech" on:click={onClick} class:focus={focus} id={`tech-${key}`}>
    <div>
      <img src={(dark && darkImg != undefined) ? darkImg : img} alt={name} />
    </div>
    <p>{name}</p>
  </button>
</div>

<style>
  .tech{
    padding: var(--gap-medium);
    border: 1px solid var(--bg-3);
    border-radius: var(--card-border-radius);
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-right: var(--gap-small);
    margin-bottom: var(--gap-small);
    color: var(--fg-1);
    transition: background-color var(--transition-linear);
    box-shadow: var(--card-shadow);
  }

  .tech:hover {
    background-color: var(--bg-2);
  }

  .tech.focus {
    background-color: var(--bg-2);
  }

  .tech div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 4em;
    min-height: 3em;
  }

  .tech img {
    max-height: 3em;
    max-width: 3em;
  }

  .tech p {
    margin: 0;
    font-size: 0.8em;
  }

  @media screen and (max-width: 800px) {
    .tech {
      margin-right: var(--gap-tiny);
      margin-bottom: var(--gap-tiny);
    }

    .tech p {
      font-size: 0.6em;
    }
  }
</style>

