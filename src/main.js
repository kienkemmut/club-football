// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/main.scss'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import './mixins/common.js'
import jQuery from 'jquery'
import FullCalendar from 'vue-full-calendar'
import 'fullcalendar'
import 'fullcalendar/dist/fullcalendar.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import {ServerTable, ClientTable, Event} from 'vue-tables-2'
import BootstrapVue from 'bootstrap-vue'
// import 'expose?$!expose?jQuery!jquery'

global.jQuery = jQuery
global.$ = jQuery
Vue.config.productionTip = false
// Vue.use(jQuery)
Vue.use(BootstrapVue)
Vue.use(ClientTable, {}, false, 'bootstrap4')
Vue.use(ServerTable)
Vue.use(Event)
Vue.use(VueGoodTablePlugin)
Vue.use(FullCalendar)
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
