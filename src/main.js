import Vue from 'vue'
import App from './App.vue'

import router from './router'
//当一个项目包含多个域名时更加推荐封装使用
// import './utils/serviceIpConfig';
// Vue.prototype.$configApi = window.serviceIpConfig.dev;
import axios from './utils/axios';

import api from './utils/api';
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;

Vue.config.productionTip = false
var vue = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export default vue
