import Vue from 'vue'
// import Constant from '../utils/const.js'
// import router from '../router'
// import store from '../store'

Vue.mixin({
  computed: {
    isShowBtn: {
      get: function () {
        return this.$store.getters.isShowBtn
      }
    }
  },
  methods: {
    showText: function () {
      if (this.isShowBtn) {
        this.$store.dispatch('setShowBtn', false)
      } else {
        this.$store.dispatch('setShowBtn', true)
      }
    }
  }
})
