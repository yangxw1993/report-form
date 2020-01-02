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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
