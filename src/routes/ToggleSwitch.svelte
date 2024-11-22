<script lang="ts">
  export let checked = false;
  export let onChange = () => {};
  export let label: string;
</script>

<div class="container">
  <label class="switch">
    <input type="checkbox" bind:checked on:change={onChange}>
    <span class="slider round"></span>
  </label>
  <p>{label}</p>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    gap: var(--gap-small);
  }

  p {
    margin: 0;
  }

   /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 28px;
    margin: 0;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: var(--gap-tiny);
    bottom: var(--gap-tiny);
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: var(--accent);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  } 
</style>

