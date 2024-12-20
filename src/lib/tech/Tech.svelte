<script lang="ts">
  import store from "$lib/stores";

  interface Props {
    key: string;
    name: string;
    img: string;
    darkImg: string|undefined;
    onClick: () => void;
    focus?: boolean;
  }
  let { key, name, img, darkImg, onClick, focus = false }: Props = $props();
</script>

<div>
  <button class="tech" onclick={onClick} class:focus id={`tech-${key}`}>
    <div>
      <img src={($store.pref.darkTheme && darkImg != undefined) ? darkImg : img} alt={name} />
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

