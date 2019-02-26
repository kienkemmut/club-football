import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/common/Home'
// import Page1 from '@/components/page1'
// import Child1 from '@/components/child1'
// import Page2 from '@/components/page/page2'
// import Child2 from '@/components/page/child2'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Trang chu'
      }
    }
    // { path: '*', component: NotFoundComponent }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
