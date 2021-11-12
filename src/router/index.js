import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import AboutMe from './components/AboutMe.vue'
import Hello from './components/Hello.vue'
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'aboutMe',
            component: AboutMe
        }
    ]
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})