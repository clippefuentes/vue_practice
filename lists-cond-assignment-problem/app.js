const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
            taskVisibility: true
        }
    },
    computed: {
        buttonText() {
            return this.taskVisibility ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
        },
        toggleTaskVisibility() {
            this.taskVisibility = !this.taskVisibility;
        }
    },
}) 

app.mount('#assignment');