import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import CounterView from '@/views/CounterView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: CounterView
    },
    {
        path: '/todo',
        name: 'todo',
        component: () => import('@/views/TodoListView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
