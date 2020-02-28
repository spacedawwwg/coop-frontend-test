<template>
  <CharityDonation v-bind="charityData" />
</template>

<script>
  import CharityDonation from '../components/CharityDonation';

  export default {
    name: 'App',
    components: {
      CharityDonation
    },
    metaInfo: {
      title: 'Co-op front-end test',
      htmlAttrs: {
        lang: 'en',
        amp: true
      },
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'A charity donation component built with Vue.js'
        }
      ]
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
