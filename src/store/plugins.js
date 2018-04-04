import localforage from 'localforage'

export const persistPlugin = store => {
  store.subscribe((mutation, state) => {
    console.log("PLUGIN")
    localforage.setItem('session', state);
  })
}
