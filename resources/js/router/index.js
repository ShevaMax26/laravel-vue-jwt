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
        {
            path: '/:catchAll(.*)',
            name: '404',
            component: () => import('../components/Error/404.vue')
        },
    ]
})

router.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next()
        } else {
            return next({
                name: 'user.login'
            })
        }
    }

    if (to.name === 'user.login' || to.name === 'user.register' && accessToken) {
        return next({
            name: 'user.cabinet'
        })
    }

    next()
})
export default router
