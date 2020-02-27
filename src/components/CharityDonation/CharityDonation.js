import axios from 'axios';
import ICountUp from 'vue-countup-v2';

export default {
  name: 'CharityDonation',
  components: {
    ICountUp
  },
  props: {
    title: {
      type: String,
      required: true
    },
    charity: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      target: 0,
      raised: 0,
      error: null,
      countUp: {
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          decimalPlaces: 2,
          prefix: '',
          suffix: '',
          duration: 1
        }
      }
    };
  },
  computed: {
    progress() {
      let percent = 0;
      if (this.target && this.raised) {
        percent = Math.ceil(
          (parseInt(this.raised) * 100) / parseInt(this.target)
        );
      }
      return `${percent}%`;
    }
  },
  methods: {
    getData() {
      this.loading = true;
      axios
        .get('https://coop-mock-test-api.herokuapp.com/')
        .then(({ data }) => {
          this.target = data.target;
          this.raised = data.raised;
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          this.error = error;
        });
    }
  },
  mounted() {
    this.getData();
  }
};
