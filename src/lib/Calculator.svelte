<script>
  import Button from './Button.svelte';
  import Display from './Display.svelte';
  import { BUTTONS } from './constants';

  // TODO: add support for active keys display and keyboard arrow input
  // TODO: make better folder structure
  // TODO: make mobile layout
  // TODO: fix the issue with the background not fully taking the screen on zoom
  // TODO: consider making store instead of display variable (read more about store)
  //       it will probably make sense (like reducer) for button and input actions
  // TODO: consider adding (, ), /, *, typeof, <, >, <=, >=
  // TODO: Probably make some little dot indicator saying that the current display value
  //       on the right is the result, not another value

  let display = {
    currentValue: '',
    expression: [],
    hasError: false,
  };

  function setDisplay(value, array) {
    const expression = array || [...display.expression, value];

    display = {
      currentValue: value,
      expression,
      hasError: false,
    };
  }

  function catchGloabalError(error) {
    display.hasError = true;
    display.currentValue = error;
  }

  window.onerror = catchGloabalError;
</script>

<div class="main">
  <Display {display} />
  <div class="main-buttons">
    {#each BUTTONS as button}
      <Button {...button} {display} {setDisplay} />
    {/each}
  </div>
</div>

<style lang="scss">
  @import 'src/sass/_colors.scss';

  .main {
    position: relative;
    width: 550px;
    height: 550px;
    background: color(dark-blue);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 2px;
    }
  }
</style>
