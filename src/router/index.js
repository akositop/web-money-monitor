import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import editVariables from '@/pages/edit-variables'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/edit-variables',
      name: 'editVariables',
      component: editVariables
    }
  ]
})
