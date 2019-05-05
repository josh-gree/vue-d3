import Vue from 'vue'
import Chart from './Chart.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Chart),
}).$mount('#chart')
