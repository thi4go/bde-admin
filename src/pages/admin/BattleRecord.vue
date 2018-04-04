<template>
  <div>
    <div v-if="loading">
      <q-inner-loading :visible="loading">
        <q-spinner-gears size="50px" color="black"></q-spinner-gears>
      </q-inner-loading>
    </div>

    <div v-else>
    <q-card v-if="battle.winner">
      <q-card-title>
        <q-icon color="orange" size="40px" name="fa-trophy" />&nbsp&nbsp&nbsp MC {{ battle.winner.name }}
        <br /><span align="middle" slot="subtitle" >campeão da batalha</span>
      </q-card-title>
      <q-card-separator />
    </q-card>

    <br />

    <q-card class="shadow-6" style="margin:1px">
      <q-card-title align="center">
        {{ battle.name }}
        <span slot="subtitle">{{ battle.description}}</span>
      </q-card-title>
      <q-card-separator />

      <q-card-media align="center">
        <img align="center" src="~assets/003.svg" height="120px" width="120px">
      </q-card-media>

      <q-card-main>


      </q-card-main>

      <q-card-actions align="center">

        <q-btn @click="endBattleDialog()" size="sm" >
          <q-icon name="fa-check-square" color="orange"  />
        </q-btn>
        &nbsp&nbsp&nbsp
        <q-btn @click="deleteBattleDialog()" size="sm">
          <q-icon name="fa-times" color="red"  />
        </q-btn>

      </q-card-actions>
    </q-card>

    <br /><br />

    <q-list >

      <div v-for="(stage, key) in battle.stages">

        <q-collapsible icon="fa-users" :label="getStageLabel(key)">

          <div v-for="round in stage.rounds" >

            <div v-if="round.winner == null" class="row justify-around " style="padding-top: 20px">
              <q-btn @click="setWinner(round.first, round)" outline size="sm" >
                <span>{{round.first.name}}</span>
              </q-btn>
              <span class="absolute"> X </span>
              <q-btn v-if="round.second != null" @click="setWinner(round.second, round)" outline size="sm" >
                <span>{{round.second.name}}</span>
              </q-btn>

              <div v-if="round.third != null">
                <span class="relative" style="padding-right: 20px"> X </span>
                <q-btn @click="setWinner(round.third, round)" outline size="sm" >
                  <span>{{round.third.name}}</span>
                </q-btn>
              </div>

              <q-inner-loading :visible="updating">
                <q-spinner-gears size="50px" color="black"></q-spinner-gears>
              </q-inner-loading>
            </div>

            <div v-else class="row justify-around " style="padding-top: 20px">
              <q-btn size="sm" :color="round.first._id == round.winner._id ? 'green' : 'grey'" :outline="round.first._id == round.winner._id ? false : true">
                <span>{{round.first.name}}</span>
              </q-btn>
              <span class="absolute"> X </span>
              <q-btn v-if="round.second != null" :color="round.second._id == round.winner._id ? 'green' : 'grey'" :outline="round.second._id == round.winner._id ? false : true" size="sm">
                <span>{{round.second.name}}</span>
              </q-btn>

              <div v-if="round.third != null">
                <span class="relative" style="padding-right: 20px"> X </span>
                <q-btn size="sm" :color="round.third._id == round.winner._id ? 'green' : 'grey'" :outline="round.third._id == round.winner._id ? false : true">
                  <span>{{round.third.name}}</span>
                </q-btn>
              </div>

              <q-inner-loading :visible="updating">
                <q-spinner-gears size="50px" color="black"></q-spinner-gears>
              </q-inner-loading>
            </div>
            <br />


          </div>

        </q-collapsible>

      </div>
    </q-list>
  </div>
  </div>
</template>


<script>
import api from '../../api'

export default {
  name: 'BattleRecord',

  data () {
    return {
      loading: true,
      updating: false,
      battle: null
    }
  },

  created () {
    const fetch  = this.$store.getters.findBattle(this.$route.params.id)
    this.battle  = fetch[0]
    this.loading = false
    console.log(this.battle)
  },

  methods: {

    getStageLabel (key) {
      switch (key) {
        case 0:
          return 'Primeira Fase'
        case 1:
          return 'Segunda Fase'
        case 2:
          return 'Semi Final'
        case 3:
          return 'Final'
      }
    },

    async setWinner (user, round) {
      console.log(round)
      try {
        await this.$q.dialog({
          title: '',
          message: 'O MC ' + user.name + ' venceu o round?',
          position: 'right',
          ok: 'Sim',
          cancel: 'Não',
          color: 'dark'
        })
        this.updating = true

        const payload = {
          battle_id: this.battle._id,
          round_id: round._id,
          user_id: user._id
        }

        await this.$store.dispatch('UPDATE_ROUND_WINNER', payload)

        this.updating = false

        this.$q.notify({
          message: 'MC ' + user.name + 'passou de fase',
          color: 'black',
          textColor: 'white',
          timeout: 2000
        })
      } catch (err) {

      }

    },

    async endBattleDialog () {

      try {
        await this.$q.dialog({
          title: 'Epâ !',
          message: 'Certeza que a batalha já acabou?',
          position: 'right',
          ok: 'Sim',
          cancel: 'Não'
        })

        await api.updateBattle(this.battle._id, { "active": false })

        this.$store.commit('DEFINE_ACTIVE_BATTLE', null)

        this.$q.notify({
          message: 'Batalha foi finalizada com sucesso',
          color: 'black',
          textColor: 'white',
          timeout: 2000
        })

        this.$router.go('/home')
      } catch (err) {
        console.log(err)
      }
    },

    // primeiro é o delete das relações na API
    async deleteBattleDialog () {
      try {
        await this.$q.dialog({
          title: 'Cuidado !',
          message: 'Certeza que é pra deletar a batalha do banco de dados?',
          position: 'right',
          ok: 'Sim',
          cancel: 'Não'
        })

        await api.deleteBattle(this.battle._id)

        await this.$store.dispatch('FETCH_BATTLES')

        this.$q.notify({
          message: 'Batalha deletada com sucesso',
          color: 'black',
          textColor: 'white',
          timeout: 2000
        })

        this.$router.go('/battle-management')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>


<style>

</style>
