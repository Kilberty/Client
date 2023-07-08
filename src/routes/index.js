import TelaLogin from '../components/TelaLogin.vue'
import TelaLogado from '../components/TelaLogado.vue'
import Infra from '../components/Infra.vue'

import {createRouter,createWebHashHistory} from "vue-router";


const router = createRouter({
    history: createWebHashHistory(),
    routes : [

        {
            path: '/',
            name: 'Home',
            redirect: '/Login'
        },
        {
            path: '/Login',
            name: 'Login',
            component: TelaLogin
        },
        {
            path: '/Infra',
            name: 'Infra',
            component: Infra
        },
       {
            path: '/Logado',
            name: 'Logado',
            component: TelaLogado
        }

    ]
})


export default router