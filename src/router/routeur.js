import Vue from 'vue';
import VueRouter from "vue-router";

const App = () => import("../App.vue");
const SignUp= () => import("../components/SignUp.vue");
const LogIn = () => import("../components/LogIn.vue");
const PageC = () => import("../components/PageC.vue");

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
    path: "/PageC",
    name: "PageC",
    component: PageC
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;