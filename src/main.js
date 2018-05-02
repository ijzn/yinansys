import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index'
import 'element-ui/lib/theme-chalk/index.css'
// import { Button, Select } from 'element-ui'
import elementUI from 'element-ui'
import tween from '@/base/tween'

Vue.config.productionTip = false

Vue.use(elementUI)
// Vue.use(Button)
// Vue.use(Select)

Vue.component('tweenNum', tween)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
