<template>
  <q-tabs color="white" position="top" inverted>
    <q-tab default slot="title" name="form" icon="format_quote" color="black" />
    <q-tab slot="title" name="subscription" icon="list" color="black" />
    <q-tab slot="title" name="lottery" icon="playlist_add_check" color="black" />

    <q-tab-pane name="form">
      <!-- <q-list> -->

        <q-card>
          <q-card-title>
            Nova Batalha
          </q-card-title>

          <!-- <q-card-media class="fixed-center" style="width: 50%; margin-left: 25%" >
            <img class="fixed-center" align="center" src="~assets/003.svg">
          </q-card-media> -->

          <q-card-main>
            <q-input float-label="título da batalha" v-model="lottery.name" color="black" /><br />
            <q-input float-label="descrição" v-model="lottery.description" color="black" />
          </q-card-main>
        </q-card>

      <!-- </q-list> -->

    </q-tab-pane>

    <q-tab-pane name="subscription">

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
              <q-toggle v-model="lottery.selectedUsers" icon="mic" :val="user" color="pink-7" />
            </q-item-side>
          </q-item>
        </q-list>


    </q-tab-pane>

    <q-tab-pane name="lottery">
      <q-list>
        <q-list-header>Selecionados para o Sorteio</q-list-header>
        <q-item-separator />

        <q-item v-for="user in lottery.selectedUsers">
          <q-item-side>
            <q-icon name="mic" size="20px"/>
            <q-checkbox color="pink-4" v-model="user.virgin" />
          </q-item-side>
          <q-item-main :label="user.name" />
          <q-item-side >
            <q-btn size="sm" @click="removeUser(user)">
              <q-icon name="fa-times" />
            </q-btn>
          </q-item-side>

        </q-item>
      </q-list>
      <br /><br />
      <q-btn @click="generateBattle()" :loading="loading" color="pink-4" big class="full-width">
        Sortear !
      </q-btn>
    </q-tab-pane>

  </q-tabs>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import { Dialog } from 'quasar'
import UserCreate from 'components/users/UserCreate'
import api from '../../api'

export default {
  name: 'BattleCreator',

  components: { UserCreate },

  data() {
    return {
      search: '',
      loading: false,
    }
  },

  computed: {
    ...mapGetters([
      'lottery',
      'users'
    ]),

    filteredUsers () {
      const users = this.search == '' ? null : this.searchUsers()
      return users
    }
  },

  async mounted () {
    await this.$store.dispatch('SET_USTATE')
    this.lottery.filteredUsers = this.users
  },

  methods: {
    ...mapActions ({
      store_selected_users : 'SET_SELECTED_USERS'
    }),

    searchUsers () {
      const regexSearch = new RegExp(this.search, 'i')

      return this.users.filter( function(user) {
        if (user.name != null && user.email != null)
        return user.name.match(regexSearch) || user.email.match(regexSearch)
      })
    },

    removeUser (user) {
      let index = this.lottery.selectedUsers.indexOf(user)
      let users = this.lottery.selectedUsers
      users.splice(index, 1)
      this.store_selected_users(users)
    },

    async generateBattle () {
      this.loading = true

      const payload = {
        name: this.lottery.name,
        description: this.lottery.description,
        users: this.lottery.selectedUsers
      }

      console.log('sending create request')

      try {
        await this.$store.dispatch('CREATE_BATTLE', payload)

        this.$store.dispatch('RESET_LOTTERY_STATES')

        this.$q.notify({
          message: 'Batalha criada com sucesso',
          color: 'black',
          textColor: 'white',
          timeout: 2000
        })
      } catch (err) {
        this.$q.notify({
          message: 'Error no servidor, contacte o suporte',
          color: 'black',
          textColor: 'white',
          timeout: 2000
        })

        this.$router.go('/battle-management')
      }

      this.loading = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
