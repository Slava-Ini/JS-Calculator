<script>
  import ManualInput from './inputs/ManualInput.svelte';
  import { BUTTON_STYLES, BUTTON_TYPE } from './constants';

  export let value = '';
  export let type = '';
  export let display;
  export let setDisplay;
  // export let setIsDisplayInput;

  $: ({ expression } = display);

  let isDisplayInput = false;
  const { fontSize, background, width } = BUTTON_STYLES[type];

  function setIsDisplayInput(flag) {
    isDisplayInput = flag;
  }

  function handleClick() {
    const updatedExpression = [...expression.slice(0, -1)];
    const updatedValue = updatedExpression.at(-1);

    switch (type) {
      case BUTTON_TYPE.ERASE:
        if (updatedExpression.length) {
          setDisplay(updatedValue, updatedExpression);
        } else {
          setDisplay('', []);
        }
        break;
      case BUTTON_TYPE.CLEAR:
        setDisplay('', []);
        break;
      case BUTTON_TYPE.RESULT:
        if (expression.length) {
          // eslint-disable-next-line no-eval
          setDisplay(eval(expression.join(' ')), expression);
        }
        break;
      case BUTTON_TYPE.INPUT: {
        setIsDisplayInput(true);
        break;
      }
      default:
        setDisplay(value);
        break;
    }
  }
</script>

<button
  on:click={handleClick}
  style="--fontSize: {fontSize}px; --width: {width}"
  class={`calc ${background}`}
>
  <span class="calc-inner">
    {value}
  </span>
</button>

{#if isDisplayInput}
<!-- TODO: probably ?? make it depend on global state but not on every button -->
  <ManualInput name={value} {setDisplay} {setIsDisplayInput} />
{/if}

<style lang="scss">
  @import 'src/sass/_colors.scss';
  @import 'src/sass/_fonts.scss';

  .calc {
    display: flex;
    justify-content: center;
    align-items: center;
    color: color(white);
    border: none;
    outline: none;
    width: calc(var(--width) * 1px);
    height: 90px;
    font: 400 var(--fontSize) $secondary;
    cursor: pointer;

    &:hover {
      border: 2px solid white;
    }

    &:active {
      box-shadow: inset 2px 2px 4px color(transparent-grey);
    }
  }

  @each $key, $color in $colors {
    .#{$key} {
      background-color: $color;
    }
  }
</style>
