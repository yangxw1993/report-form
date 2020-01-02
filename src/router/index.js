import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect(){
      return '/day'
    }
  },
  {
    path: '/day',
    name: 'DayReport',
    component: () => import('../views/DayReport')
  },
  {
    path: '/week',
    name: 'WeekReport',
    component: () => import('../views/WeekReport')
  },
  {
    path: '/month',
    name: 'MonthReport',
    component: () => import('../views/MonthReport')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
