import Vue from 'vue'
import Main from './components/Main'

new Vue({
  el: '#app',
  render: renderize => renderize(Main)
})
