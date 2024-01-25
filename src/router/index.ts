import { createRouter, createWebHashHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import JobResultView from "@/views/JobResultView.vue"
import JobView from "@/views/JobView.vue"
import TeamsView from "@/views/TeamsView.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/jobs/results", // http://localhost:3000/#/jobs/results
    name: "JobResults",
    component: JobResultView
  },
  {
    path: "/jobs/results/:id", // http://localhost:3000/#/jobs/results/7
    name: "JobListing",
    component: JobView
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // effect when change route
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" }
  }
})

export default router
