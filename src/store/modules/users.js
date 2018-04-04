import {
  DEFINE_USERS,
  ADD_USER_OBJ,
  REMOVE_USER_OBJ
} from '../mutations'

import {
  SET_USTATE,
  FETCH_USERS,
  CREATE_USER,
  REMOVE_USER
} from '../actions'

import localforage from 'localforage'
import api from '../../api'

const state = {
  users: []
}

const getters = {
  users: (state) => {
    return state.users
  }
}

const mutations = {
  [DEFINE_USERS] (state, users) {
    state.users = users
  },

  [ADD_USER_OBJ] (state, user) {
    state.users.push(user)
  },

  [REMOVE_USER_OBJ] (state, user) {
    state.users.filter( el => {
      return el._id !== user._id
    })
  }
}

const actions = {

  async [SET_USTATE] ({commit, dispatch, state}) {
    if (state.users.length == 0) {
      try {
        await dispatch(FETCH_USERS)
      } catch (err) {
        //handle error
        console.log(err)
      }
    }
  },

  async [FETCH_USERS] ({commit, state}, data) {
    const users  = await api.getUsers()

    commit(DEFINE_USERS, users.data)

    return localforage.setItem('users', users.data)
  },

  async [CREATE_USER] ({commit}, user) {
    await api.createUser(user)

    commit(ADD_USER_OBJ, user)
  },

  [REMOVE_USER] ({commit}, user) {
    commit(REMOVE_USER_OBJ, user)
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}
