import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from '@/views/mainPage/mainPage'
import login from '@/views/login/index'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: mainPage
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
]

const router = new VueRouter({
  routes
})

export default router
