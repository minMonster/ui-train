import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['./views/index'], resolve)
    },
    {
      path: '/store',
      name: 'store',
      component: resolve => require(['./views/store'], resolve)
    },
    {
      path: '/user',
      name: 'user',
      component: resolve => require(['./views/user'], resolve)
    }
  ]
})
