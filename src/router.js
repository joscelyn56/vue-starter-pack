import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'

import Home from './components/layouts/Home.vue'

import Login from './components/pages/Login.vue'
import ForgotPassword from './components/pages/ForgotPassword.vue'
import Register from './components/pages/Register.vue'

let router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/login',
          name: 'login',
          meta: {
            blocked: false
          },
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          meta: {
            blocked: false
          },
          component: Register
        },
        {
          path: '/forgot-password',
          name: 'forgot_password',
          meta: {
            blocked: false
          },
          component: ForgotPassword
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      VueScrollTo.scrollTo(to.hash, 700)
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let token = localStorage.getItem('access_token')
    if (token == null) {
      next({
        path: '/',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.blocked)) {
    next({
      path: '/coming-soon',
      params: { nextUrl: to.fullPath }
    })
  } else {
    next()
  }
})
export default router
