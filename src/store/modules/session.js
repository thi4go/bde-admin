import {
  DEFINE_SESSION,
  DEFINE_USER
} from '../mutations'

import {
  SET_SESSION,
  SET_USER,
  SET_INITIAL_SESSION_STATE
} from '../actions'

import localforage from 'localforage'
import api from '../../api/'

const state = {
  session: {
    user: null,
    token: null
  }
}


const getters = {
  session: (state) => {
    return state.session
  }
}

const mutations = {
  [DEFINE_SESSION] (state, session) {
    state.session = session
  },

  [DEFINE_USER] (state, user) {
    state.session.user = user
  }
}

const actions = {
  async [SET_INITIAL_SESSION_STATE] ({commit, state}) {
    const session = await localforage.getItem('session')
    commit(DEFINE_SESSION, session)
  },

  async [SET_SESSION] ({commit, state}, data) {
    console.log('defining session')
    try {
      commit(DEFINE_SESSION, data)
      await localforage.setItem('session', data)
      return
    } catch (error) {
      throw error
    }
  },

  [SET_USER] ({commit, state}, user) {
    commit(DEFINE_USER, user)
  },

  async register ({dispatch, commit}, payload) {
    try {
      const response = await api.createUser(payload)
      const credentials = {
        email: payload.email,
        password: payload.password
      }
      await dispatch('login', credentials)
      return response
    } catch (error) {
      throw error
    }
  },

  async login ({dispatch, commit}, user) {
    try {
      const { data } = await api.login(user)
      await dispatch(SET_SESSION, data)
      return data
    } catch (error) {
      throw error
    }
  },

  logout ({ commit }) {
    commit('SET_USER', null)
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
