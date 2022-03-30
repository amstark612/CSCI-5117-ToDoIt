import Vue from "vue";
import VueRouter from "vue-router";
// import { createRouter, createWebHistory } from "vue-router";

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
    component: TodosView,
  },
  {
    path: "/todos/:category",
    name: "todo/:category",
    component: TodosView,
  },
  {
    path: "/done",
    name: "done",
    component: DoneView,
  },
  {
    path: "/done/:category",
    name: "done/:category",
    component: DoneView,
  },
  {
    path: "/todo/:id",
    name: "todo",
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

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

const router = new VueRouter({
  mode: "history",
  // history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

export default router;
