import vue from 'vue'
import vueRouter from 'vue-router'
import home from '../views/home.vue'
import gallery from '../views/gallery.vue'
import store from '../views/store.vue'
import commissions from '../views/commission.vue'

vue.use(vueRouter)

  const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },

    {
        path: '/gallery',
        name: 'gallery',
        component: gallery,
    },

    {
        path: '/store',
        name: 'store',
        component: store,
    },

    {
        path: '/commissions',
        name: 'commissions',
        component: commissions,
    }
  ]

  const router = new vueRouter({
      routes
  })

  export default router