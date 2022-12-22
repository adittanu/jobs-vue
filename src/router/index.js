import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import JobsView from "../views/jobs/JobsView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "About",
            component: AboutView,
        },
        {
            path: "/jobs",
            name: "Jobs",
            component: JobsView,
        },
    ],
})

export default router
