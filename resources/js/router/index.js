import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/fruits',
            name: 'fruit.index',
            component: () => import('../components/Fruit/Index.vue')
        },
        {
            path: '/users/login',
            name: 'user.login',
            component: () => import('../components/User/Login.vue')
        },
        {
            path: '/users/register',
            name: 'user.register',
            component: () => import('../components/User/Register.vue')
        },
        {
            path: '/users/cabinet',
            name: 'user.cabinet',
            component: () => import('../components/User/Cabinet.vue')
        },
    ]
})

export default router
