<template>
<q-page>
  <div class="container items-center">

    <q-card class="inline">
      <q-card-title>
        <div  class="row items-center">
            <b>{{ battle.name }}</b>
        </div>
      </q-card-title>
    </q-card>

    <br />

    <q-card v-if="battle.winner">
      <q-card-title>
        <q-icon color="orange" size="40px" name="fa-trophy" />&nbsp&nbsp&nbsp MC {{ battle.winner.name }}
        <br /><span align="middle" slot="subtitle" >campeão da batalha</span>
      </q-card-title>
      <q-card-separator />
    </q-card>

    <br />
      <q-stepper ref="stepper" vertical color="black">
        <!-- Step: -->
        <q-step default title="Primeira Fase" done-icon="fa-arrows-alt" active-icon="fa-arrows-alt" subtitle="">
            <div class="row justify-around items-center">
              <b>sdas</b> <span class="fixed">X</span> <b>sasasdsdsd</b>
            </div> <br />
            <div class="row justify-around items-center">
              <b>sdas</b> <span class="absolute">X</span> <b>sasasdasdd</b>
            </div> <br />
            <div class="row justify-around items-center">
              <b>sdas</b> <span class="absolute">X</span> <b>sasd</b>
            </div> <br />
        </q-step>

        <!-- Step: -->
        <q-step title="Segunda Fase" done-icon="fa-arrows-alt-h" icon="fa-arrows-alt-h" active-icon="fa-arrows-alt-h" >
          <div class="row justify-around items-center">
            <b>sdas</b> <span class="fixed">X</span> <b>sasasdsdsd</b>
          </div> <br />
          <div class="row justify-around items-center">
            <b>sdas</b> <span class="absolute">X</span> <b>sasasdasdd</b>
          </div> <br />
          <div class="row justify-around items-center">
            <b>sdas</b> <span class="absolute">X</span> <b>sasd</b>
          </div> <br />
        </q-step>

        <!-- Step: -->
        <q-step title="Semi" done-icon="fa-bomb" icon="fa-bomb" active-icon="fa-bomb" subtitle="">
          <b>sss</b>
        </q-step>

        <q-step title="Final" done-icon="fa-trophy" icon="fa-trophy" active-icon="fa-trophy" subtitle="">
          <b>sss</b>
        </q-step>

        <!--
          Optional.

          "Globally" available Stepper navigation which means
          that it will be visible regardless of the current step.
          If we'd put QStepperNavigation under a QStep then we'd
          be using it for that step only.
        -->
        <q-stepper-navigation class="items-center">
          <q-btn
            flat
            @click="$refs.stepper.previous()"
            label="<"
          />
          <q-btn
            @click="$refs.stepper.next()"
            label=">"
          />
        </q-stepper-navigation>
      </q-stepper>
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
  },

  beforeDestroy () {
    this.$store.dispatch('SET_BACK_BUTTON', false)
  }


}

</script>


<style>

</style>
