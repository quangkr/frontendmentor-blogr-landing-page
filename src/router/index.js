import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const DEFAULT_TITLE = "Blogr - A modern publishing platform";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { title: () => "Blogr | About us" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title ? to.meta.title() : DEFAULT_TITLE;
});

export default router;
