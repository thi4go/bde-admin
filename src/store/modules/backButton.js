import {
  DEFINE_BACK_BUTTON
} from '../mutations'

import {
  SET_BACK_BUTTON
} from '../actions'

const state = {
  backButton: false
}


const getters = {
  backButton: (state) => {
    return state.backButton
  }
}

const mutations = {
  [DEFINE_BACK_BUTTON] (state, b) {
    state.backButton = b
  }
}

const actions = {
  [SET_BACK_BUTTON] ({commit, state}, b) {
    commit(DEFINE_BACK_BUTTON, b)
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
