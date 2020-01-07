import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const isLogin= true;
const routes = [
  {
    path: '/',
    redirect(){
      return '/day'
    },
    meta: {
      isLogin
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
  },
  {
    path: '/day',
    name: 'DayReport',
    component: () => import('../views/DayReport'),
    meta: {
      isLogin
    }
  },
  {
    path: '/week',
    name: 'WeekReport',
    component: () => import('../views/WeekReport'),
    meta: {
      isLogin
    }
  },
  {
    path: '/month',
    name: 'MonthReport',
    component: () => import('../views/MonthReport'),
    meta: {
      isLogin
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
