// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引用vue
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 入口文件为 src/App.vue 文件 所以要引用
import App from './App'
// 引用路由配置文件
import router from './router'

Vue.config.productionTip = false

// 光引用不成，还得使用
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
