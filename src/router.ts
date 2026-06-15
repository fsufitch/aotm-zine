import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

export const ROUTES: { [key: string]: RouteRecordRaw } = {
  root: {
    path: "/",
    redirect: "/landing",
  },
  landing: {
    path: "/landing",
    name: "landing",
    component: () => import("@/scenes/landing/LandingScene.vue"),
  },
  study: {
    path: "/study",
    name: "study",
    component: () => import("@/scenes/study/StudyScene.vue"),
  },
  computer: {
    path: "/computer",
    name: "computer",
    component: () => import("@/scenes/computer/ComputerScene.vue"),
  },
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.values(ROUTES),
});

export default router;
