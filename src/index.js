import Vue from 'vue'
import App from './components/App'
import Carousel from 'vue-carousel'
import store from './store'

Vue.use(Carousel)

new Vue({
  el: '#app',
  store,
  render: renderize => renderize(App)
})
