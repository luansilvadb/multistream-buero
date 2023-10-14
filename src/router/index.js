import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
import routes from './routes'

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : createWebHistory(process.env.VUE_ROUTER_BASE)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createHistory,
    routes
  })

  Router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default Title'
    next()
  })

  return Router
})
