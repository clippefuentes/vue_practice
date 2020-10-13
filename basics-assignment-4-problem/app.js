const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      paragraphIsVisible: true,
      paragraphBackgroundColor: '',
    }
  },
  computed: {
    visibilityClass() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        hidden: !this.paragraphIsVisible,
        visible: this.paragraphIsVisible
      }
    }
  },
  methods: {
    triggerVisibility() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    }
  }
});

app.mount('#assignment');