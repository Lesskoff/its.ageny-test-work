import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// plugin for media queries
import VueMQ from 'vue-mq'

Vue.use(VueMQ, {
  breakpoints: { // default breakpoints - customize this
    sm: 576,
    md: 769,
    lg: 1356,
    xl: Infinity
  },
  defaultBreakpoint: 'lg' // customize this for SSR
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
