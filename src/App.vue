<template>
  <div id="app">
    <CharityDonation v-bind="charityData"/>
  </div>
</template>

<script>
import CharityDonation from './components/CharityDonation'

export default {
  name: 'App',
  components: {
    CharityDonation
  },
  data() {
    return {
      charityData: {
        title: "Help refugees rebuild their lives and commiunities in Manchester",
        charity: "Manchester Refugee Support Network (MRSN)"
      }
    }
  }
}
</script>
