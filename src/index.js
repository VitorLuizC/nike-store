import Vue from 'vue'
import App from './components/App'

new Vue({
  el: '#app',
  render: renderize => renderize(App)
})
