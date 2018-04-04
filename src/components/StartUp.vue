<template>
<div>
<q-layout ref="layout" view="hHh lpr fFf" :header-class="{'no-shadow': true}">
  
  <div class="text-center" slot="header">
    <q-toolbar slot="header" color="black">
      <q-toolbar-title glossy="true" align="center">
        BDE
      </q-toolbar-title>
    </q-toolbar>
    <q-transition
      appear
      enter="bounceInLeft"
      leave="fadeOut"
    >
      <div class="header-card shadow-4" slot="header" >
        <img align="center" src="~assets/003.svg">
        <br />
      </div>
    </q-transition>
  </div>

  <div class="container">
    <div class="responsive">
          <q-transition appear group enter="bounceInRight" leave="fadeOut" @after-leave="test">
            
          <div class="tutorial" key="carousel" v-if="tutorial" >
            <q-carousel dots fullscreen class="tutorial">
              <div slot="slide" class="bg-light centered">
                <p style="font-size: 30px"><center>Aplicativo BDE</center></p>
                <p>Aproximando a Batalha à você, artista, MC, pensador e ser vivo</p>
                <!-- <blockquote>
                  <p>Rap é compromisso, não é viagem</p>
                  <small><cite title="Quasar Framework">Sabotage</cite></small>
                </blockquote> -->

              </div>
              <div slot="slide" class="bg-light centered">
                <big>Objetivos e Funcionalidades</big>
                <!-- <blockquote>
                  <p class="text-left">Dados sobre Batalhas anteriores</p>
                  <p class="text-left">Perfil de artista</p>
                  <p class="text-left">Vencedor da semana</p>
                  <p class="text-left">Mídia (fotos/vídeos) dos MC's e batalhas semanais</p>
                </blockquote> -->
              </div>
              <div slot="slide" class="bg-light centered">
                <big>Acesse com sua conta</big>
                <p>para ter acesso às funcionalidades do app</p>
                <q-item-separator />
                <div class="text-center no-wrap">
                  <q-btn icon="fa-sign-in" color="pink-6" @click="loadLogin">
                    Login
                  </q-btn> 

                  <q-btn icon="fa-user-plus" color="pink-6" @click="loadRegister">
                    Cadastro
                  </q-btn>
                </div>

              </div>
            </q-carousel>
          </div>

          <div key="login" v-else-if="login" >
            <Login />
          </div>

          <div key="register" v-else-if="register" >
            <Register />
          </div>
        </q-transition>
      <!-- </div>-->
    </div> 
  </div>


</q-layout>
</div>
</template>

<script>

import Login from './Login'
import Register from './Register'

export default {
  components: { Login, Register },

  data () {
    return {
      tutorial: true,
      login: false,
      register: false
    }
  },

  beforeCreate () {
    // console.log("----STARTUP----")
    // console.log(this.$store.getters.session)
    // console.log(this.$store.getters.battles)
    // console.log(this.$store.getters.activeBattle)

    
  },

  methods: {
    loadLogin () {
      this.tutorial = false;
      this.register = false;
      setTimeout( () => {
        this.login = true;
      }, 200);
    },

    loadRegister () {
      this.tutorial = false;
      this.login    = false;
      setTimeout( () => {
        this.register = true;
      }, 200);
    },

    test () {
      console.log('animation done')
    }
  }

}

</script>

<style scoped>

.header-card {
  -webkit-overflow-scrolling: touch;
  height: 8em;
  background:
    radial-gradient(black 3px, transparent 4px),
    radial-gradient(black 3px, transparent 4px),
    linear-gradient(#fff 4px, transparent 0),
    linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
    linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px),
  #fff;
  background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
}

img {
    max-width: 100%;
    max-height: 100%;
}

.tutorial {
  margin-top: 40px;
  margin-bot: 400px;
  padding-bottom: 400px;
  /* height: 10em; */
  /* size: 20em; */
  /* top: 0; */
}

.carousel {
  width: 100%;
  height: 100%;
}

.container {
  /* padding: 40px 40px 0 40px; */
  /* margin-top: 500px; */
  overflow-y: auto;
  /* left: 0; */
  -webkit-overflow-scrolling: touch;
  /* position: fixed; */
  /* top: 0; */
  width: 100%;
  /* height: 20%; */
}

/* .text-center {
  margin: 0;
  width: 100%;
} */

.image-container{
  width: 100%;
}

</style>
