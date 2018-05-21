import Vue from 'vue'
import Vuex from 'vuex'

import lottery from './modules/lottery'
import users from './modules/users'
import battles from './modules/battles'
import session from './modules/session'
import backButton from './modules/backButton'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    lottery,
    users,
    battles,
    session,
    backButton
  }
})

export default store
