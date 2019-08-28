import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入mintUI组件
import Mint from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(Mint)
//引入axios第三方模块
import axios from 'axios'
//配置axios基础路径
axios.defaults.baseURL="http://localhost:8080"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
