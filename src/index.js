import Vue from 'vue'
import App from './components/App'
import store from './store'

new Vue({
  el: '#app',
  store,
  render: renderize => renderize(App)
})
