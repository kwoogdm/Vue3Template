import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => { require(['@/pages/Index'], resolve) }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
      meta: {
        requireAuth: true,
        title:'首页',
      }
    },
   
  ]
});
