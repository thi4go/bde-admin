<template>
  <div class="container" background-color="black">

    <div class="col col-8 shadow-6">
      <div v-if="!create" style="padding: 20px">

        <big>Gerência v2</big>
        <br /><br />
        <p> Nessa seção você pode criar, editar e excluir batalhas. </p>

        <q-btn
          color="dark"
          @click="create = true"
          >
          <q-icon name="add" />
        </q-btn>
      </div>
      <div v-else class="row" style="padding: 15px">
        <div>
          <q-btn
            color="dark"
            size="sm"
            @click="create = false"
            >
            <q-icon name="arrow back" />
          </q-btn>
        </div>
        <div>
          <p>  &nbsp&nbsp &nbsp&nbsp Criando uma nova batalha ...</p>
        </div>
      </div>
    </div>

    <div v-if="loading">
      <q-inner-loading :visible="loading">
        <q-spinner-gears size="50px" color="black"></q-spinner-gears>
      </q-inner-loading>
    </div>

    <div v-else-if="create">
      <br />
      <BattleCreator />
    </div>

    <div v-else>
      <br />
    <div v-for="battle in localBattles">
      <br />
      <q-card inline style="width: 100%">
        <q-card-title color="black">
          {{battle.name}}
          <span slot="subtitle">degrau a degrau, mil grau.</span><br />

          <div slot="right" class="row items-center">
            <span v-if="!battle.active">{{DateFormat.parse(battle.created)}}</span>
            <span v-else><b>Em andamento !</b></span>
          </div>
        </q-card-title>
        <q-card-separator />

        <q-card-main>
          <div class="row wrap">
            <div class="col-6">
              <q-card-media style="width: 90%;">
                <img align="center" src="~assets/003.svg" width="50%" height="50%">
              </q-card-media>
            </div>

            <div class="col-6">
              <table class="q-table" slot="right">
                <thead>
                  <tr>
                    <th class="text-left">estatísticas</th>
                    <th class="text-right">#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-left">mcs</td>
                    <td class="text-right">x</td>
                  </tr>
                  <tr>
                    <td class="text-left">rounds</td>
                    <td class="text-right">y</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </q-card-main>


        <q-card-separator />

        <q-card-actions align="around">
          <q-btn @click="$router.push('/battle-management/'+battle._id)" flat round small color="pink-6">Administrar Batalha</q-btn>
        </q-card-actions>

      </q-card>
    </div>
    </div>



  </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'

import BattleCreator from '../../components/battle/BattleCreator.vue'

import DateFormat from '../../utils/DateFormat'
import Statistics from '../../utils/Statistics'

export default {
  name: 'BattleManage',

  components: {BattleCreator, DateFormat},

  data() {
    return {
      localBattles: null,
      favorited: false,
      loading: false,
      create: false,

      DateFormat: null,
      Statistics: null
    }
  },

  async beforeMount () {
    if (this.$store.getters.battles.length == 0) {
      this.loading = true
      await this.$store.dispatch('SET_BSTATE')
      console.log('fetched')
    }

    this.loading = false

    this.localBattles = this.$store.getters.battles
    this.DateFormat = DateFormat
    this.Statistics = Statistics
  },

  computed: {
    ...mapGetters([
      'battles'
    ])
  },

  methods: {

  }
}
</script>
