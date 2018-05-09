<template>
  <div class="container items-center">

    <div class="col col-8 shadow-6">
      <div style="padding: 20px">

        <big>Gerência</big>
        <br /><br />
        <p>
          Nessa seção você pode criar, editar e excluir os usuários.
        </p>
          <UserCreate />
      </div>

    </div>

    <br />

    <div class="col col-8 bot">
      <div class="user-table-list">
        <q-list highlight>
          <div style="width: 100%; padding: 25px">

            <q-search
              class="search-field"
              v-model="search"
              placeholder="Buscar MC e gerenciar"
            />
          </div>

          <div v-for="user in filteredUsers">
            <q-item >
              <q-item-main >
                <q-item-tile label>{{user.name}}</q-item-tile>
                <q-item-tile v-if="user.email" sublabel><small>{{user.email}}</small></q-item-tile>
                <q-item-tile sublabel><small>{{user.gender}}</small></q-item-tile>
              </q-item-main>

              <UserEdit :user="user" />
              <UserDelete :user="user" />

            </q-item>
            <q-item-separator />
          </div>

          <br />
          <div class="text-center">
            <q-pagination direction-links color="dark" v-model="page" :min="1" :max="parseInt(this.users.length/10)+1" />
          </div>
        </q-list>
      </div>
    </div>

    <q-inner-loading :visible="loading">
      <q-spinner-gears size="50px" dark color="black"></q-spinner-gears>
    </q-inner-loading>
  </div>
</div>

</template>

<script>

import { mapGetters } from 'vuex'

import UserCreate from 'components/users/UserCreate'
import UserEdit from 'components/users/UserEdit'
import UserDelete from 'components/users/UserDelete'

export default {
  name: 'UsersManage',

  components: { UserCreate, UserEdit, UserDelete },

  data() {
    return {
      page: 1,
      loading: false,
      search: ''
    }
  },

  async beforeCreate () {
    if(this.$store.getters.users.length == 0) {
      this.loading = true
      await this.$store.dispatch('SET_USTATE')
    }
    this.loading = false
  },

  computed: {
    ...mapGetters([
      'users'
    ]),

    filteredUsers () {
      const start = this.page == 1 ? 0  : (10 * (this.page - 1))
      const end   = this.page == 1 ? 10 : (10 * (this.page))

      const users = this.search == '' ? this.users.slice(start, end)
                                      : this.searchUsers()

      return users
    }
  },


  methods: {
    searchUsers () {
      const scope = this

      const regexSearch = new RegExp(this.search, 'i')

      return this.users.filter( function(user) {
        if (user.name != null && user.email != null)
          return user.name.match(regexSearch) || user.email.match(regexSearch)
      })
    }
  }
}
</script>

<style>




</style>
