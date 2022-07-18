<script>
  // TODO: Probably make re-exports
  // TODO: make the logic if input was not sent to display and any button was pressed then it counts as it was sent
  // seems natural
  import NumberInput from './NumberInput.svelte';

  export let name = '';
  export let setDisplay;
  export let setIsDisplayInput;

  let inputValue = '';

  function setInputValue(value) {
    inputValue = value;
  }

  function handleSubmit() {
    setDisplay(inputValue);
    setIsDisplayInput(false);
  }
</script>

<form class="field">
  <div class="field-name">{name}</div>
  <div class="field-input">
    <!-- TODO: svelte - how to use switch case or property access -->
    <!-- {#key }

    {/keyswitch} -->
    <NumberInput {setInputValue} {inputValue} />
  </div>
  <button
    on:click|preventDefault={handleSubmit}
    type="submit"
    class="field-apply">></button
  >
</form>

<style lang="scss">
  @import 'src/sass/_colors.scss';
  @import 'src/sass/_fonts.scss';

  .field {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    top: 92px;
    height: 90px;
    width: 100%;
    /* TODO: make background darker */
    background-color: color(cyan);

    &-name {
      /* TODO: remove font and color duplication */
      font: 400 25px $secondary;
      color: color(white);
    }

    &-input {
      height: 60%;
      width: 60%;
    }

    &-apply {
      font: 400 25px $secondary;
      color: color(dark-blue);
      outline: none;
      border: none;
      width: 10%;
      height: 60%;
      background: none;
      cursor: pointer;
    }
  }
</style>
