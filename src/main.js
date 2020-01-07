import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button , Select,Option, DatePicker, Table, TableColumn} from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(TableColumn);
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/base.css'
Vue.config.productionTip = false

//路由守卫
router.beforeEach((to, from, next) => {
  console.log(to,'to');
  console.log(from,'from');
  if (to.meta.isLogin) { // 判断该路由是否需要登录权限
    const { loginInfo } = localStorage;
    if(loginInfo){ //判断本地是否存在登录信息
      next();
    }else {
      next({
        path:'/login'
      })
    }
  }else {
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  // if(to.fullPath == "/login"){
  //   if(JSON.parse(localStorage.getItem('islogin'))){
  //     next({
  //       path:from.fullPath
  //     });
  //   }else {
  //     next();
  //   }
  // }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
