import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import { routes as auth } from "@/modules/auth";
import { routes as home } from "@/views/home/";
import { routes as crud } from "@/views/crud/";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [...home, ...crud, ...auth];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
