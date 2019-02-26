import * as types from '../mutation-types'
// import Constant from '../../utils/const.js'
// import router from '../../router'
import Vue from 'vue'

const state = {
  isShowBtn: true,
  score: [0, 1],
  listData: []
}

const getters = {
  isShowBtn: state => state.isShowBtn,
  score: state => state.score,
  listData: state => state.listData
}

const actions = {
  setShowBtn ({ commit }, status) {
    commit(types.SET_SHOW_BTN, status)
  },
  setScore ({commit}, int) {
    commit(types.SET_SCORE, int)
  },
  getData ({commit}, data) {
    Vue.axios.get('https://5a3393521faf4b001277c6ba.mockapi.io/api/v1/one').then((response) => {
      let dataFake = response.data
      let listData = dataFake
      commit(types.GET_DATA, dataFake)
      console.log(listData, 'ssss')
    })
  }
}

const mutations = {
  [types.SET_SHOW_BTN] (state, status) {
    state.isShowBtn = status
  },
  [types.SET_SCORE] (state, int) {
    state.score = int
  },
  [types.GET_DATA] (state, dataFake) {
    console.log(dataFake, '3434')
    state.listData = dataFake
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
