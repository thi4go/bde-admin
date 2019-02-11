import {
  DEFINE_BATTLES,
  DEFINE_ACTIVE_BATTLE,
  DEFINE_RANKING
} from '../mutations'

import {
  SET_BSTATE,
  FETCH_BATTLES,
  FETCH_ACTIVE_BATTLE,
  FETCH_RANKING,
  CREATE_BATTLE,
  UPDATE_BATTLE,
  UPDATE_ROUND_WINNER
} from '../actions'

import localforage from 'localforage'
import api from '../../api'

const state = {
  battles      : [],
  activeBattle : null,
  ranking: null
}

const getters = {
  battles: (state) => {
    return state.battles
  },

  findBattle: (state) => {
    return id => state.battles.filter( battle => {
      return id === battle._id
    })
  },

  activeBattle: (state) => {
    return state.activeBattle
  },

  ranking: (state) => {
    return state.ranking
  }
}

const mutations = {
  [DEFINE_BATTLES] (state, battles) {
    state.battles = battles
  },

  [DEFINE_ACTIVE_BATTLE] (state, battle) {
    state.activeBattle = battle
  },

  [DEFINE_RANKING] (state, ranking) {
    state.ranking = ranking
  }
}

const actions = {

  async [SET_BSTATE] ({commit, dispatch, state}) {
    if (state.activeBattle == null || state.battles.length == 0) {
      await dispatch(FETCH_BATTLES)
      await dispatch(FETCH_ACTIVE_BATTLE)
    }
  },

  /*
  * API FETCH CALLS
  */

  async [FETCH_BATTLES] ({commit, state}) {
    const battles = await api.getBattles()

    let bs = battles.data.sort( (a, b) => {
      var n = a.name.split("#").pop()
      var m = b.name.split("#").pop()

      if (parseInt(n) < parseInt(m)) return -1
      if (parseInt(n) > parseInt(m)) return 1
      return 0
    })

    commit(DEFINE_BATTLES, bs.reverse())

    return localforage.setItem('battles', bs)
  },

  async [FETCH_ACTIVE_BATTLE] ({commit, state}) {
    let activeBattle = await api.getActiveBattle()

    if (activeBattle.data != null) {
      activeBattle = activeBattle.data[0]
      commit(DEFINE_ACTIVE_BATTLE, activeBattle)
    }

    return localforage.setItem('activeBattle', activeBattle.data)
  },

  async [FETCH_RANKING] ({commit, state}) {
    try {
      let ranking = await api.getRanking()
      commit (DEFINE_RANKING, ranking.data)
    } catch (err) {
      console.log(err)
    }
  },

  /*
  * API PAYLOAD CALLS
  */

  async [CREATE_BATTLE] ({commit, dispatch, state}, payload) {
    console.log('REQUEST')
    console.log(payload)
    const response = await api.createBattle(payload)
    console.log('RESPOSTA')
    console.log(response)

    commit(DEFINE_ACTIVE_BATTLE, response.data)

    //TODO: refactor
    await dispatch(FETCH_BATTLES)
  },

  async [UPDATE_BATTLE] ({commit, dispatch, state}, id, payload) {
    const response = await api.updateBattle(id, payload)
    console.log("store updating battle winner")
    console.log(response)
  },

  async [UPDATE_ROUND_WINNER] ({commit, dispatch, state}, payload) {
    const response = await api.updateRoundWinner(payload)

    console.log("store updating roudn winner")
    console.log(response)
    commit(DEFINE_ACTIVE_BATTLE, response.data)
  }

}

export default {
  state,
  getters,
  mutations,
  actions
}
