<script>
  export let display;

  $: ({ currentValue, expression, hasError } = display);
  $: color = hasError ? 'red' : 'white';
  $: fontSize = hasError ? '20px' : '40px';
</script>

<div class="display">
  <span class="wrapper">
    <div style="--fontSize: {fontSize}" class={`display-value ${color}`}>
      {currentValue}
    </div>
  </span>
  <div class="display-expression">{expression.join(' ')}</div>
</div>

<style lang="scss">
  @import 'src/sass/_colors.scss';
  @import 'src/sass/_fonts.scss';

  .display {
    position: relative;
    width: 550px;
    height: 92px;

    .wrapper {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 20px 50px;
    }

    &-value {
      font: 400 var(--fontSize) $secondary;
    }

    &-expression {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      color: color(grey);
      font: 400 14px $secondary;
      text-align: start;
      padding: 8px 15px;
    }
  }

  .white {
    color: color(white);
  }

  .red {
    color: color(light-red);
  }
</style>
