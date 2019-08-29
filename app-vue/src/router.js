import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login.vue'
import footer from './components/footer.vue'
import food1 from "./components/food1.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/login',component:login},
    {path:'/foot',component:footer},
    {path:'/food1',component:food1},
  ]
})
