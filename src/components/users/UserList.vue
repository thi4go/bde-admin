<template>
  <div>
    <q-btn
      color="dark"
      @click="opened = true"
      icon="edit"
      outline
      size="sm"
    />


    <q-modal content-classes="list-modal" minimized v-model="opened">
      <!-- Notice "dark" property -->
      <q-list >

        <div style="width: 100%; padding-right: 25px; padding-left: 25px">
          <q-search
          class="search-field"
          v-model="search"
          placeholder="Buscar MC"
          @change="searchUsers"
          color="black"
          />
        </div>
        <br />

        <q-item v-if="filteredUsers == null">
          <q-item-main>
            <div class="text-center" color="black">
              <p class="text-italic light-paragraph">... pesquise o nome de um MC</p>
            </div>
          </q-item-main>
        </q-item>

        <q-item v-else-if="filteredUsers != null && filteredUsers.length == 0">
          <q-item-main>
            <div class="text-center" color="black">
              <p class="text-italic light-paragraph">... este MC não foi encontrado</p>
              <UserCreate />
            </div>
          </q-item-main>
        </q-item>

        <q-item v-for="user in filteredUsers">
          <q-item-main >
            <q-item-tile label>{{user.name}}</q-item-tile>
            <q-item-tile sublabel>{{user.gender}}</q-item-tile>
          </q-item-main>
          <q-item-side >
            <q-btn
              :loading="loading"
              label="Trocar MC"
              icon="fa-exchange-alt"
              color="dark"
              @click="editRound (user)"
            />
          </q-item-side>
        </q-item>

      </q-list>
    </q-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '../../api'
import UserCreate from 'components/users/UserCreate'

export default {
  name: 'UserList',

  props: ['round', 'position'],

  components: { UserCreate },

  data () {
    return {
      opened: false,
      loading: false,
      search: ''
    }
  },

  computed: {
    ...mapGetters([
      'users'
    ]),

    filteredUsers () {
      const users = this.search == '' ? null : this.searchUsers()
      return users
    }
  },

  methods: {
    searchUsers () {
      const regexSearch = new RegExp(this.search, 'i')

      return this.users.filter( function(user) {
        if (user.name != null && user.email != null)
        return user.name.match(regexSearch) || user.email.match(regexSearch)
      })
    },

    async editRound (user) {
      this.loading = true

      var payload = null

      if (this.position == 1) {
        payload = {
          first: user._id
        }
      } else if (this.position == 2) {
        payload = {
          second: user._id
        }
      } else if (this.position == 3) {
        payload = {
          third: user._id
        }
      }

      const resp = await api.updateRound(this.round._id, payload)

      this.$emit('update', resp.data)

      this.loading = false
      this.opened  = false
    }
  }
}

</script>

<style>
.list-modal {
  width: 600px;
  padding: 20px;
  margin: 20px;
}

</style>
