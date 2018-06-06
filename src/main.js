// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem } from 'mint-ui';
// import FastClick from 'fastclick'

// 引入配置项
import './config/rem'
import './assets/js/createToast'
import axios from './config/service'
console.log('环境变量--'+process.env.NODE_ENV)

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

