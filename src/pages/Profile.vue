<template>
  <q-page>
  <div class="container items-center">

    <div class="col col-8 top shadow-6">

      <div class="row">
        <div class="col-2" style="margin-left: 10px; margin-top: 10px;">
          <q-item-side avatar="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg" />
        </div>
        <div class="col-8" style="margin-left: 10px; margin-top: 13px;">
          <big>sdas</big><br />
          <q-chip tag small pointing="up" color="dark">
            MC
          </q-chip> <br><br>
        </div>
      </div>

    </div>
    <br />
    <div class="col col-8 bot">
      <q-tabs color="white" position="top" inverted >
        <!-- Tabs - notice slot="title" -->
        <q-tab default slot="title" name="tab-1" icon="mic" color="black" />
        <q-tab slot="title" name="tab-2" icon="fingerprint" color="black" />
        <q-tab slot="title" name="tab-3" icon="account_box" color="black" />
        <!-- Targets -->
        <q-tab-pane name="tab-1">
          participações na batalha e ranking
        </q-tab-pane>

        <q-tab-pane name="tab-2">
          redes sociais
        </q-tab-pane>

        <q-tab-pane name="tab-3">
          <small>descrição do usuario louco, quem sou, onde estamos, pra onde vamos</small>
        </q-tab-pane>
      </q-tabs>
    </div>
  </div>
  </q-page>
</template>

<script>
// import Avatar from 'vue-avatar'
import ProfileCard from '../components/profile/ProfileCard'

export default {

  components: { ProfileCard },

  data () {
    return {
      user: null
    }
  },

  mounted () {
    this.user = this.$store.getters.session.user
    console.log(this.user)
    console.log('bla')
  }
}
</script>

<style>
.top {
  background-color: white;
  padding-left: 20px;
  /* text-align: center; */
  /* border-radius: 15px; */
}

.avatar {
  margin: auto;
  width: 30%;
  margin-top: 50px;
  /* position: fixed; */
  /* border: 3px solid green; */
  /* padding: 10px; */
}

.bot {
  background-color: white;
  width: 100%;
  padding: 0px;

}
</style>
