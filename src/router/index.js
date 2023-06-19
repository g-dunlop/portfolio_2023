import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import LoginView from '../views/LoginView.vue'
import CvView from '../views/CvView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPost from '../components/blog/BlogPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects/:id',
      name: 'projects',
      component: ProjectView
    },
    {
      path: '/login',
      name:'login',
      component:LoginView
    },
    {
      path: '/cv',
      name:'cv',
      component:CvView
    },
    {
      path: '/blog',
      name:'blog',
      component:BlogView
    },
    {
    path: '/blog/:id',
    name: 'blogpost',
    component: BlogPost
    },
  ]
})

export default router
