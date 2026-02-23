import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/landing/LandingPage.vue"),
    },
    {
      path: "/kaboom",
      name: "kaboom",
      component: () => import("@/pages/kaboom/Kaboom.vue"),
    },
  ],
});

export default router;
