const app = Vue.createApp({
  data() {
    return {
      name: 'Clyne Paulo Fuentes',
      age: '23',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Man_Daeng_Waterfall.jpg/640px-Man_Daeng_Waterfall.jpg',
    }
  },
  methods: {
    calculateAgeAfter5Years() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    }
  }
});

app.mount('#assignment');