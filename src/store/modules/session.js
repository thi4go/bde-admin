import {
  DEFINE_SESSION
} from '../mutations'

import {
  SET_SESSION,
  SET_INITIAL_SESSION_STATE
} from '../actions'

import localforage from 'localforage'
import api from '../../api/'

const state = {
  session: null
}


const getters = {
  session: (state) => {
    return state.session
  }
}

const mutations = {
  [DEFINE_SESSION] (state, session) {
    state.session = session
  }
}

const actions = {
  async [SET_INITIAL_SESSION_STATE] ({commit, state}) {
    const session = await localforage.getItem('session')
    commit(DEFINE_SESSION, session)
  },

  [SET_SESSION] ({commit, state}, data) {
    return new Promise((resolve, reject) => {
      localforage.setItem('session', data).then( res => {
        commit(DEFINE_SESSION, data)
        resolve(res)
      }).catch( err => {
        reject(err)
      })
    })

  },

  async register ({dispatch, commit}, payload) {
    try {
      const response = await api.createUser(payload)
      const credentials = {
        email: payload.email,
        password: payload.password
      }
      return dispatch('login', credentials)
    } catch (error) {
      throw error
    }
  },

  async login ({dispatch, commit}, user) {
    try {
      const { data } = await api.login(user)
      return dispatch(SET_SESSION, data)
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
