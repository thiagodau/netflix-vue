import Vue from 'vue'

//import App from './App'
import Home from './pages/Home'

//importacao da biblioteca vue-resour
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Home },
  template: '<Home/>'
})
