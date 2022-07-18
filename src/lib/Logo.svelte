<script>
  import icon from '/src/assets/icon.png';
</script>

<div class="logo">
  <img class="logo-image" src={icon} alt="js-logo" />
  <p class="logo-header">Calculator</p>
</div>

<style lang="scss">
  @import 'src/sass/_colors.scss';
  @import 'src/sass/_fonts.scss';

  .logo {
    margin-bottom: 20px;

    &-image {
      max-width: 180px;
      max-height: 180px;
    }

    &-header {
      text-align: center;
      font: 400 30px $primary;
      color: color(dark-red);
    }
  }
</style>
