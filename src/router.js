import Vue from 'vue'
import Router from 'vue-router'
import CatalogPage from './views/CatalogPage.vue'
import Restaurants from './views/Restaurants.vue'
import Delivery from './views/Delivery.vue'
import Karaoke from './views/Karaoke.vue'
import About from './views/About.vue'
import News from './views/News.vue'
import Contacts from './views/Contacts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'catalogPage',
      component: CatalogPage
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: Delivery
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/karaoke',
      name: 'karaoke',
      component: Karaoke
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    }
  ]
})
