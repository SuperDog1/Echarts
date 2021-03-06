// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import axios from 'axios'
import echarts from 'echarts/index.js'
import registerMap from './common/registerMap.js'
import { post, fetch, patch, put } from './api/axios'

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts
registerMap(echarts)

/* Ajax */

Vue.prototype.$post = post

Vue.prototype.$fetch = fetch
Vue.use(ElementUI)

/* bus */
Vue.prototype.$bus = new Vue()

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
