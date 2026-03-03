import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Neurofeedback from '../views/Neurofeedback.vue'
import AboutMe from '../views/AboutMe.vue'
import Contact from '../views/Contact.vue'
import Booking from '../views/Booking.vue'
import Privacy from '../views/Privacy.vue'
import Impressum from '../views/Impressum.vue'

const routes = [
  {
    path: '/:locale?',
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'neurofeedback',
        name: 'Neurofeedback',
        component: Neurofeedback
      },
      {
        path: 'about',
        name: 'About',
        component: AboutMe
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: 'booking',
        name: 'Booking',
        component: Booking
      },
      {
        path: 'privacy',
        name: 'Privacy',
        component: Privacy
      },
      {
        path: 'impressum',
        name: 'Impressum',
        component: Impressum
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
