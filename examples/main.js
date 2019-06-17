import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import ropeokElementUi from '../packages/index'
Vue.use(ropeokElementUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
