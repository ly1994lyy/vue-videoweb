import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Main,
    children: [
      { path: "/", name: "home", component: () => import("../views/Home.vue") },
      {
        path: "/courses/list",
        name: "course-list",
        component: () => import("../views/courses/CourseList.vue"),
      },
      {
        path: "/courses/create",
        name: "course-creste",
        component: () => import("../views/courses/CourseEdit.vue"),
      },
      {
        path: "/courses/edit/:id",
        name: "course-edit",
        component: () => import("../views/courses/CourseEdit.vue"),
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
