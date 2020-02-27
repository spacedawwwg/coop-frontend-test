<template>
  <div id="app" class="app">
    <CharityDonation v-bind="charityData" />
  </div>
</template>

<script>
  import CharityDonation from './components/CharityDonation';

  export default {
    name: 'App',
    components: {
      CharityDonation
    },
    data() {
      return {
        charityData: {
          title:
            'Help refugees rebuild their lives and commiunities in Manchester',
          charity: 'Manchester Refugee Support Network (MRSN)'
        }
      };
    }
  };
</script>

<style lang="postcss" scoped>
  .app {
    padding: 15px;

    @media only screen and (min-width: 600px) {
      padding: 30px;
    }
  }
</style>
