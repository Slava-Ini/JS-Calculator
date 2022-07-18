<script>
  import Logo from './lib/Logo.svelte';
  import Calculator from './lib/Calculator.svelte';
</script>

<main>
  <Logo />
  <Calculator />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html, body, #app) {
    height: 100vh;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: linear-gradient(
      82.84deg,
      #4dcc8c 0%,
      #4bd08d 12.93%,
      #75eda6 100%
    );
  }
</style>
