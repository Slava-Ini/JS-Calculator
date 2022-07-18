<script>
  import { onMount } from 'svelte';

  export let inputValue;
  export let setInputValue;

  let ref = null;

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  onMount(() => {
    ref.focus();
  });
</script>

<input
  on:input={handleInput}
  type="text"
  class="text-input"
  value={inputValue}
  bind:this={ref}
/>

<style lang="scss">
  @import 'src/sass/_colors.scss';
  @import 'src/sass/_fonts.scss';

  /* Hide input arrows for Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Hide input arrows for Firefox */
  input[type='text'] {
    -moz-appearance: textfield;
  }

  .text-input {
    height: 100%;
    width: 100%;
    /* TODO: remove font and color duplication */
    font: 400 25px $secondary;
    color: color(white);
    background-color: color(transparent-cyan);
    outline: none;
    border: none;
    text-align: center;
  }
</style>
