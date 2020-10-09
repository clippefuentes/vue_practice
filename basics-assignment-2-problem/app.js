const app = Vue.createApp({
  data() {
    return {
      inputProvided: '',
      confirmedInput: '',
    }
  },
  methods: {
    showAlert() {
      alert("Hey alert is working");
    },
    changeInput(event) {
      this.inputProvided = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.inputProvided;
    }
  }
});

app.mount('#assignment');