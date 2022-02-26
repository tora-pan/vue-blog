import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
import Admin from "../views/Admin.vue";
import Home from "../views/Home.vue";

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
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/blogdetail/:id",
    name: "BlogDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BlogDetail.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    beforeEnter(to, from, next) {
      if (!store.getters.isLoggedIn) {
        next("/");
      } else {
        next();
      }
    },
    // component: () =>
    //   import(/*webpackChunkName: "admin" */ "../views/Admin.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
