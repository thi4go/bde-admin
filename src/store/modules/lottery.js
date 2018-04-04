import {
  DEFINE_SELECTED_USERS,
  DEFINE_NAME,
  DEFINE_DESCRIPTION,
  DEFINE_FILTERED_USERS
} from '../mutations'

import {
  SET_SELECTED_USERS,
  SET_NAME,
  SET_DESCRIPTION,
  SET_FILTERED_USES,
  RESET_LOTTERY_STATES
} from '../actions'

import _ from 'lodash'



const state = {
  lottery: {
    name: null,
    description: null,
    selectedUsers: [],
    filteredUsers: null
  }
}


const getters = {
  lottery: (state) => {
    return state.lottery
  },

  hasUser: (state, user) => {
    return _.some(state.lottery, user)
  }
}

const mutations = {
  [DEFINE_SELECTED_USERS] (state, users) {
    state.lottery.selectedUsers = users
  },
  [DEFINE_NAME] (state, name) {
    state.lottery.name = name
  },
  [DEFINE_DESCRIPTION] (state, desc) {
    state.lottery.description = desc
  },
  [DEFINE_FILTERED_USERS] (state, filteredUsers) {
    state.lottery.filteredUsers = filteredUsers
  },
}

const actions = {
  [SET_SELECTED_USERS] ({commit, state}, users) {
    commit(DEFINE_SELECTED_USERS, users)
  },
  [SET_NAME] ({commit, state}, name) {
    commit(ADD_USER, name)
  },
  [SET_DESCRIPTION] ({commit, state}, desc) {
    commit(REMOVE_USER, desc)
  },
  [SET_FILTERED_USES] ({commit, state}, filteredUsers) {
    commit(REMOVE_USER, filteredUsers)
  },
  [RESET_LOTTERY_STATES] ({commit}) {
    commit(DEFINE_NAME, null)
    commit(DEFINE_DESCRIPTION, null)
    commit(DEFINE_SELECTED_USERS, [])
    commit(DEFINE_FILTERED_USERS, null)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
