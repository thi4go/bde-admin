import store from '../store/index'
import localforage from 'localforage'

export default {

  requireAuth (to, from, next) {
    let session = store.getters.session

    if (session == null || session == undefined) {
      localforage.getItem('session').then( resp => {
        if (resp != null)
          next()
        else
          next ({ path: '/startup' })
      })
    } else {
      next()
    }
  }

}
