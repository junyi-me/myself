<script lang="ts">
  let { checked = $bindable(false), onChange = () => {} }: { checked?: boolean; onChange?: any; } = $props();
</script>

<div class="container">
  <label class="switch">
    <input type="checkbox" bind:checked onchange={onChange}>
    <span class="slider round"></span>
  </label>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    gap: var(--gap-small);
  }

   /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
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
    height: 17px;
    width: 17px;
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
    -webkit-transform: translateX(15px);
    -ms-transform: translateX(15px);
    transform: translateX(15px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  } 
</style>

