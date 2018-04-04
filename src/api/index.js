import axios from 'axios'


const http = axios.create({
  // baseURL: 'http://localhost:8000'
  baseURL: 'https://batalha-da-escada.herokuapp.com/'
})


export default {

  /**
    POST Routes
  **/

  login (credentials) {
    return http.post('/login', credentials)
  },

  createUser (data) {
    return http.post('/user', data)
  },

  createBattle (payload) {
    return http.post('/battle', payload)
  },

  /**
    GET Routes
  **/

  getBattles () {
    return http.get('/battles')
  },

  getActiveBattle () {
    return http.get('/get-active-battle')
  },

  getUsers () {
    return http.get('/users')
  },

  /**
    DELETE Routes
  **/

  deleteUser (id) {
    return http.delete('/user/'+id)
  },

  deleteBattle (id) {
    return http.delete('/battle/'+id)
  },
  /**
    PUT Routes
  **/

  updateBattle (id, data) {
    return http.put('/battle/'+id, data)
  },

  updateUser (id, data) {
    return http.put('/user/'+id, data)
  },

  updateRoundWinner (payload) {
    return http.post('/update-round-winner', payload)
  }
}