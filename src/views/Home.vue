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
      title: 'Co-op Frontend Test',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
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
