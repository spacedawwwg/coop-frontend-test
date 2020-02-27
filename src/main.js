import Vue from 'vue';
import App from './App.vue';

import '@coopdigital/css-foundations/dist/foundations.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
