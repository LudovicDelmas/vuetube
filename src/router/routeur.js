import Vue from 'vue';
import VueRouter from "vue-router";

const SignUp= () => import("../views/SignUp.vue");
const LogIn = () => import("../views/LogIn.vue");
const Dashboard = () => import("../views/Dashboard.vue");

Vue.use(VueRouter)

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/login",
    name: "login",
    component: LogIn
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;