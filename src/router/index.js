import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditVariables from '@/pages/edit-variables'
import Dashboard from '@/pages/dashboard'
import Auth from '@/pages/auth'
import {verify} from './script/route-gaurd'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Dasboard',
        component: Dashboard
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/edit-variables',
        name: 'EditVariables',
        component: EditVariables
    },
    {
        path: '/auth/:action',
        name: 'Auth',
        component: Auth
    }
  ]
})
