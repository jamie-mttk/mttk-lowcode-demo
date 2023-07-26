import { createRouter, createWebHistory } from 'vue-router'

import {lcDeployed} from 'mttk-lowcode'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
       redirect: '/deploy/' 
    },
    {
      path: '/deploy/:app?/:page?',
      name: 'deploy',
      component: () => lcDeployed,
      meta:{
        showBreadcrumb:false,
      }
    }
  ]
})

export default router
