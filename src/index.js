import Vue from 'vue'
import App from './components/App'
import Carousel from 'vue-carousel'
import store from './store'

Vue.use(Carousel)

Vue.filter('real', value => {
  const moneyFormat = Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 3
  })

  return moneyFormat.format(value)
})

new Vue({
  el: '#app',
  store,
  render: renderize => renderize(App)
})
