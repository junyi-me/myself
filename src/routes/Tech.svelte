<script lang="ts">
  export let key: string;
  export let name: string;
  export let img: string;
  export let onClick: () => void;
  export let focus = false;
</script>

<div>
  <button class="oval" on:click={onClick} class:focus={focus} id={`tech-${key}`}>
    <img src={img} alt={name} />
    <p>{name}</p>
  </button>
</div>

<style>
  .oval {
    padding: 1em 2em;
    border: 2px solid var(--fg-3);
    border-radius: 2em;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 1em;
    margin-bottom: 1em;
    max-height: 60px;
    color: var(--fg-1);
    transition: background-color 0.3s linear;
  }

  .oval:hover {
    background-color: var(--bg-2);
  }

  .oval.focus {
    box-shadow: 2px 2px 1px 1px var(--fg-2);
    transition: box-shadow 0.2s linear;
  }

  .oval img {
    height: 2em;
    margin-right: 1em;
  }

  .oval p {
    margin: 0;
    font-weight: 500;
  }
</style>

