import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EditVariables from '@/pages/edit-variables'
import Dashboard from '@/pages/dashboard'

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
    }
  ]
})
