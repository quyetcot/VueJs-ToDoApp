import {createRouter, createWebHistory} from 'vue-router';


const routes = [
    {
        path:'/',
        name:'home',
        component:()=>import('@/views/HomePage.vue')
    },
    {
        path: '/list',
        name:'list',
        component:()=>import('@/views/ToDoList.vue')
    },
    {
        path:'/list/create',
        name:'create.list',
        component:()=> import('@/views/FormAddToDo.vue')
    }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router