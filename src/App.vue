<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<style lang="postcss" scoped>
  .app {
    padding: 15px;

    @media only screen and (min-width: 600px) {
      padding: 30px;
    }
  }
</style>
