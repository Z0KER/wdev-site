import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Videos from '@/pages/Videos'
import Sobre from '@/pages/Sobre'
import Contato from '@/pages/Contato'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/videos',
        name: 'videos',
        component: Videos
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: Sobre
    },
    {
        path: '/contato',
        name: 'contato',
        component: Contato
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router