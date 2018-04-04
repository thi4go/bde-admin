import Vue from 'vue'
import Vuex from 'vuex'

import lottery from './modules/lottery'
import users from './modules/users'
import battles from './modules/battles'
import session from './modules/session'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    lottery,
    users,
    battles,
    session
  }
})

export default store
