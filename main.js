const app = {
    data() {
        return {
            msg: 'Hello, Vue3',

            tasks: [{ image: 'images/Strike.jpg', article: 'ZGMF-X20A',name: 'Gundam Strike Freedom' , done: false },
            { image: 'images/Exia.jpg', article: 'GN-001', name: 'Gundam Exia' , done: false },
            { image: 'images/Barbatos.jpg', article: 'ASW-G-08',name: 'Gundam Barbatos Lupus Rex' , done: false }
            ]

            
        }
    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        }
    },
    computed: {
        countlikepic() {
            return this.tasks.filter( t => t.done ).length
        }
    }

}
Vue.createApp(app).mount('#app')