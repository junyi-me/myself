<script>
  export let name;
  export let title;
  export let doubleCol = false;
</script>

<style>
  div {
    max-width: 1200px;
    padding: 2em;
    margin: 0 auto;
  }

  h1 {
    color: #333;
  }

  div.double-col {
    max-width: 600px;
    display: inline-block;
    margin: 0 1em;
  }
</style>

<div id={name} class:double-col={doubleCol}>
  <h1>{title}</h1>
  <slot />
</div>

