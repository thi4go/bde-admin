<template>
<div>

    <div>

        <div style="padding-top: 13em">
            <q-list no-border link inset-separator>
                <q-list-header>#BDE - Gestão</q-list-header>

                <!-- Home Screen -->
                <q-side-link item to="/battles">
                    <q-item-side icon="home" />
                    <q-item-main label="Batalhas" />
                </q-side-link>

                <q-side-link item to="/users">
                    <q-item-side icon="trending up" />
                    <q-item-main label="Usuários"/>
                </q-side-link>


                <q-btn class="signout" @click="logout">
                  <q-icon name="fa-sign-out" />
                  <label>Sair</label>
                </q-btn>

            </q-list>

        </div>
</div>

</div>

</template>


<script>

export default {

  methods: {
    logout () {
      this.$store.dispatch('SET_SESSION', null)
      this.$router.go('/startup')
    }
  }
}

</script>

<style scoped>
.signout {
  margin-top: 30%;
  position: fixed;
}
</style>
