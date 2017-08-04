import Vue from 'vue'
import Router from 'vue-router'
// import Hello from 'src/page/components/Hello'
const  layzLoading = path => ()=> import(`src/page/${path}.vue`)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: layzLoading('main/Hello')
    },
    {
      path: '/main',
      name: 'main',
      component: layzLoading('main/main')
    },
    {
      path: '/flex',
      name: 'flex',
      component: layzLoading('main/flex')
    },
    {
      path: '/comList',
      name: 'comList',
      component: layzLoading('main/comList')
    },
    {
      path: '/daping',
      name: 'daping',
      component: layzLoading('main/daping')
    },
    {
      path: '/render',
      name: 'render',
      component: layzLoading('main/render')
    },
  ]
})
