// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// importing font awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import GlobalComponets from '@/components/global-components'
 
// globally (in your main .js file)
Vue.component('icon', Icon)
Vue.mixin(GlobalComponets)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
