const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  computed: {
    result() {
      const goalNumber = 37;
      if(this.counter < goalNumber) {
        return 'Not there yet'
      } else if(this.counter > goalNumber) {
        return 'Too much!'
      } else {
        return this.counter;
      }
    }
  },
  watch: {
    counter() {
      const that = this;
      setTimeout(() => {
        this.counter = 0;
      }, 5000);
    }
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  }
});

app.mount('#assignment');