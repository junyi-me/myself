<script lang="ts">
  export let key: string;
  export let name: string;
  export let img: string;
  export let onClick: () => void;
  export let focus = false;
</script>

<div>
  <button class="tech" on:click={onClick} class:focus={focus} id={`tech-${key}`}>
    <div>
      <img src={img} alt={name} />
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
    transition: background-color 0.3s linear;
    box-shadow: var(--card-shadow);
  }

  .tech:hover {
    background-color: var(--bg-2);
  }

  .tech.focus {
    box-shadow: 2px 2px 1px 1px var(--fg-2);
    transition: box-shadow 0.2s linear;
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
</style>

