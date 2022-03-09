import Vue from "vue";
import VueRouter from "vue-router";
import { Form, Preview } from "./views";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Форма",
    component: Form,
  },
  {
    path: "/preview",
    name: "Превью",
    component: Preview,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
