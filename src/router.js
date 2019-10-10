import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'

import Films from './views/home/films.vue'
import Cinemas from './views/home/cinemas.vue'
import Center from './views/home/center.vue'

import City from './views/city/index.vue'
import Balance from './views/balance/index.vue'
import Detail from './views/detail/index.vue'
import Login from './views/login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'cinemas',
          component: Cinemas
        },
        {
          path: 'films',
          component: Films
        },
        {
          path: 'center',
          component: Center
        }
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/balance',
      component: Balance
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/films/:id',
      component: Detail
    }
  ]
})
