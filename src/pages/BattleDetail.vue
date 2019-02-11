<template>
<q-page>
  <div class="container items-center">

    <q-card class="inline shadow-0">
      <q-card-title>
        <div  class="row items-center">
            <b>{{ battle.name }}</b>
        </div>
      </q-card-title>
    </q-card>

    <br />

    <q-card class="inline shadow-0" v-if="battle.winner">
      <q-card-title>
        <q-icon color="orange" size="40px" name="fa-trophy" />&nbsp&nbsp&nbsp MC {{ battle.winner.name }}
        <q-btn @click="$router.push('/profile/detail/'+battle.winner._id)" flat size="sm" style="margin-left: 100px;" icon="fa-chevron-right" />
        <br /><span align="middle" slot="subtitle" >&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp{{battle.winner.gender == 'mina' ? 'campeã da batalha' : 'campeão da batalha'}}</span>
      </q-card-title>
      <q-card-separator />
    </q-card>

    <br />

      <q-tabs color="white" position="top" inverted >
        <!-- Tabs - notice slot="title" -->
        <q-tab default slot="title" name="tab-1"  color="black" label="1 fase"/>
        <q-tab slot="title" name="tab-2"  color="black" label="quartas" />
        <q-tab slot="title" name="tab-3" color="black" label="semi"/>
        <q-tab slot="title" name="tab-4"  color="black" label="final"/>

        <!-- Targets -->
        <q-tab-pane name="tab-1">
          <br />

          <div v-for="round in battle.stages[0].rounds">
            <div class="row justify-around items-center">
              <q-btn @click="$router.push('/profile/detail/'+round.first._id)" :color="round.winner._id == round.first._id ? 'black' : 'grey-7' " flat>{{round.first.name}}</q-btn>
              <span class="absolute">X</span>
              <q-btn @click="$router.push('/profile/detail/'+round.second._id)" :color="round.winner._id == round.second._id ? 'black' : 'grey-7' " flat>{{round.second.name}}</q-btn>
            </div>
            <br />
          </div>

        </q-tab-pane>

        <q-tab-pane name="tab-2">
          <br />
          <div v-for="round in battle.stages[1].rounds">
            <div class="row justify-around items-center">
              <q-btn @click="$router.push('/profile/detail/'+round.first._id)" :color="round.winner._id == round.first._id ? 'black' : 'grey-7' " flat>{{round.first.name}}</q-btn>
              <span class="absolute">X</span>
              <q-btn @click="$router.push('/profile/detail/'+round.second._id)" :color="round.winner._id == round.second._id ? 'black' : 'grey-7' " flat>{{round.second.name}}</q-btn>
            </div>
            <br />
          </div>
        </q-tab-pane>

        <q-tab-pane name="tab-3">
          <br />
          <div v-for="round in battle.stages[2].rounds">
            <div class="row justify-around items-center">
              <q-btn @click="$router.push('/profile/detail/'+round.first._id)" :color="round.winner._id == round.first._id ? 'black' : 'grey-7' " flat>{{round.first.name}}</q-btn>
              <span class="absolute">X</span>
              <q-btn @click="$router.push('/profile/detail/'+round.second._id)" :color="round.winner._id == round.second._id ? 'black' : 'grey-7' " flat>{{round.second.name}}</q-btn>
            </div>
            <br />
          </div>
        </q-tab-pane>

        <q-tab-pane name="tab-4">
          <br />
          <div v-for="round in battle.stages[3].rounds">
            <div class="row justify-around items-center">
              <q-btn @click="$router.push('/profile/detail/'+round.first._id)" :color="round.winner._id == round.first._id ? 'black' : 'grey-7' " flat>{{round.first.name}}</q-btn>
              <span class="absolute">X</span>
              <q-btn @click="$router.push('/profile/detail/'+round.second._id)" :color="round.winner._id == round.second._id ? 'black' : 'grey-7' " flat>{{round.second.name}}</q-btn>
            </div>
            <br />
          </div>
        </q-tab-pane>
      </q-tabs>


  </div>


</q-page>
</template>


<script>

export default {
  name: 'BattleDetail',

  data () {
    return {
      battle: null
    }
  },

  beforeMount () {
    this.$store.dispatch('SET_BACK_BUTTON', true)
    const fetch = this.$store.getters.findBattle(this.$route.params.id)
    this.battle = fetch[0]
    console.log(this.battle)
  }


}

</script>


<style>

</style>
