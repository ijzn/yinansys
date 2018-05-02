import Vue from 'vue'
import Router from 'vue-router'
// import charts from '@/components/charts'
Vue.use(Router)

const routes = [
  // 前端 生成 exsel 表格
  {
    path: '/',
    name: 'demo',
    // component: () => import('@/components/demo/demo')
    component: () => import('@/components/down/index')
  },
  // 地图 下钻
  {
    path: '/map',
    component: () => import('@/components/charts/charts')
  },
  // 数字滚动 效果
  {
    path: '/tween',
    component: () => import('@/base/tween')
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // 若userkey不存在并且前往页面不是登陆页面，进入登陆

  next()
})

export default router
