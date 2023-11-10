import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/district',
    name: 'district',
    component: () => import( '../views/DistrictView.vue')
  },
  {
    path: '/mortgage',
    name: 'mortgage',
    component: () => import( '../views/MortgageView.vue')
  },
  {
    path: '/flatsCatalog',
    name: 'flatsCatalog',
    component: () => import( '../views/FlatsCatalogView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import( '../views/ContactsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
