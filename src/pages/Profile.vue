<template>
  <q-page>
  <div class="container items-center">


    <q-card class="inline">
      <q-card-title>
        <div class="row justify-between">
          <div>
            <b>MC</b> &nbsp&nbsp{{ user.name }}
          </div>

          <div slot="right" >
            <q-btn size="md" flat icon="fa-edit" color="grey" @click="opened = true"/>
          </div>
        </div>
      </q-card-title>
      <br />
      <q-card-main>
        <q-uploader :url="url" @add="files" :send-raw="true" color="dark"/>
      </q-card-main>
    </q-card>

    <br />

    <div class="col col-8 bot">
      <q-tabs color="white" position="top" inverted >
        <!-- Tabs - notice slot="title" -->
        <q-tab default slot="title" name="tab-1" icon="account_box" color="black" />
        <q-tab slot="title" name="tab-2" icon="mic" color="black" />
        <q-tab slot="title" name="tab-3" icon="fingerprint" color="black" />
        <!-- Targets -->
        <q-tab-pane name="tab-1">
          <br />
          <ProfileTab />
        </q-tab-pane>

        <q-tab-pane name="tab-2">
          <br />
          <TimelineTab />
        </q-tab-pane>

        <q-tab-pane name="tab-3">
          <br />
          <SocialMediaTab />
        </q-tab-pane>
      </q-tabs>
    </div>
  </div>
  </q-page>
</template>

<script>
// import Avatar from 'vue-avatar'
import ProfileCard from '../components/profile/ProfileCard'
import SocialMediaTab from '../components/profile/SocialMediaTab'
import ProfileTab from '../components/profile/ProfileTab'
import TimelineTab from '../components/profile/TimelineTab'


export default {

  components: { ProfileCard, SocialMediaTab, ProfileTab, TimelineTab },

  data () {
    return {
      user: null,
      url: "http://localhost:8000/upload-image"
    }
  },

  beforeMount () {
    this.$store.dispatch('SET_BACK_BUTTON', false)

    this.user = this.$store.getters.session.user
  },

  methods: {
    files (fs) {
      console.log(fs)
    },
    upload (fs) {
      console.log(fs)
    }
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
