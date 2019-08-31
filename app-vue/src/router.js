import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login.vue'
import footer from './components/footer.vue'
import food1 from "./components/food1.vue"
import order from "./components/order.vue"
import advice from "./components/advice.vue"
import setting from "./components/setting.vue"
import update from "./components/updatePwd.vue"
import reg from "./components/reg.vue"
import foodDetail from './components/gd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/login',component:login},
    {path:'/foot',component:footer},
    {path:'/food1',component:food1},
    {path:'/order',component:order},
    {path:'/advice',component:advice},
    {path:'/setting',component:setting},
    {path:'/update',component:update},
    {path:'/reg',component:reg},
    {path:'/foodDetail',component:foodDetail},
  ]
})
