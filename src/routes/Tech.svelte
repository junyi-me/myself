<script lang="ts">
  export let name: string;
  export let img: string;
  export let subTechs: { name: string, link: string }[] = [];
  export let link: string;
  
  let expanded = false;
</script>

<div>
  <div class="oval">
    <img src={img} alt={name} />
    <p>{name}</p>
  </div>
  {#if expanded}
    <div class="content">
      <ul>
        {#each subTechs as subTech}
          <li>
            <a href={subTech.link}>{subTech.name}</a>
          </li>
        {/each}
        <li>
          <a href={link}>Learn more about {name}</a>
      </ul>
    </div>
  {/if}
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
  }

  .oval img {
    width: 2em;
    height: 2em;
    margin-right: 1em;
  }

  .oval p {
    margin: 0;
    font-weight: 500;
  }
</style>

