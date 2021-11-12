import { createWebHistory, createRouter } from 'vue-router'
import AboutMe from '../components/AboutMe.vue'
import HelloWorld from '../components/HelloWorld.vue'
import PageNotFound from '../components/PageNotFound.vue'

const routes = [
    {
        path: "/",
        name: "AboutMe",
        component: AboutMe
    },
    {
        path: "/hello",
        name: "HelloWorld",
        component: HelloWorld
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router