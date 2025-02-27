import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import HomePage from "@/views/HomePage.vue";

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
      },
      {
        path: '/app',
        name: 'HomePage',
        component: HomePage
      },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
