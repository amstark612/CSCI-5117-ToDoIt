import { auth } from "@/firebaseConfig";
import Vue from "vue";
import VueRouter from "vue-router";

import DoneView from "../views/DoneView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import SplashView from "../views/SplashView.vue";
import TodosView from "../views/TodosView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "splash",
    component: SplashView,
  },
  {
    path: "/todos",
    name: "todos",
    meta: {
      requiresAuth: true,
    },
    component: TodosView,
  },
  {
    path: "/todos/:category",
    name: "todos/:category",
    meta: {
      requiresAuth: true,
    },
    component: TodosView,
  },
  {
    path: "/done",
    name: "done",
    meta: {
      requiresAuth: true,
    },
    component: DoneView,
  },
  {
    path: "/done/:category",
    name: "done/:category",
    meta: {
      requiresAuth: true,
    },
    component: DoneView,
  },
  {
    path: "/todo/:id",
    name: "todo",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../views/TodoView.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import("../views/AboutView.vue"),
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    component: NotFoundView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/");
  } else {
    next();
  }
});

export default router;
