import axios from 'axios';

export default {
  name: 'CharityDonation',
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
      error: null
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
    async getData() {
      this.loading = true;
      await axios
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
