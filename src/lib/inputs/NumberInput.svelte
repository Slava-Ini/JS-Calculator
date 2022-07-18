<script>
  import { onMount } from 'svelte';

  export let inputValue;
  export let setInputValue;

  let ref = null;

  function handleInput(event) {
    const { value } = event.target;
    const isNumber = !Number.isNaN(Number(value));

    if (isNumber) {
      setInputValue(event.target.value);
    }
  }

  onMount(() => {
    ref.focus();
  });
</script>

<!-- TODO: Add button to insert Infinity -->
<!-- TODO: Probably allow _ delimiter in input -->
<!-- TODO: Remove default validation and make better one -->
<!-- Make delimiter, 1e2, NOT a big -->

<input
  on:input={handleInput}
  type="number"
  class="number-input"
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
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .number-input {
    height: 100%;    width: 100%;
    /* TODO: remove font and color duplication */
    font: 400 25px $secondary;
    color: color(white);
    background-color: color(transparent-cyan);
    outline: none;
    border: none;
    text-align: center;
  }
</style>
