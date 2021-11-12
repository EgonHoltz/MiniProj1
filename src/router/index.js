import { createWebHistory, createRouter } from 'vue-router'
import AboutMe from '../components/AboutMe.vue'
import MyActivities from '../components/MyActivities'
import Hobbies from '../components/Hobbies'
import PageNotFound from '../components/PageNotFound.vue'

const routes = [
    {
        path: "/",
        name: "AboutMe",
        component: AboutMe
    },
    {
        path: "/activities",
        name: "MyActivities",
        component: MyActivities
    },
    {
        path: "/hobbies",
        name: "Hobbies",
        component: Hobbies
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