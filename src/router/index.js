import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
// import AboutView from "../views/AboutView.vue"
import NotFound from "../views/NotFound.vue"
import JobsView from "../views/jobs/JobsView.vue"
import JobDetailsView from "../views/jobs/JobDetailsView.vue"

const AboutView = () => import("../views/AboutView.vue")

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
            // component: AboutView,
            // component: () => import("../views/AboutView.vue"),
            component: AboutView,
        },
        {
            path: "/jobs",
            name: "Jobs",
            component: JobsView,
        },
        {
            path: "/jobs/:id",
            name: "JobDetails",
            component: JobDetailsView,
            props: true,
        },
        // redirect
        {
            path: "/all-jobs",
            redirect: "/jobs",
        },
        // catchall 404
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFound,
        },
    ],
})

export default router
