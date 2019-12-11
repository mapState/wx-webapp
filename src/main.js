import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible/index.js'
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill();
Es6Promise.polyfill()
Vue.use(Vant);
Vue.config.productionTip = false
// router.afterEach((to,from,next) => {
//   window.scrollTo(0,0);
// })
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
