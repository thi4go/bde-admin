<template>
  <q-card inline style="width: 90%">

    <q-card-title color="black">
      {{battle.name}}
      <span slot="subtitle">degrau a degrau, mil grau.</span>
    </q-card-title>
    <q-card-separator />

    <q-card-media style="width: 50%" >
      <img align="center" src="~assets/003.svg">
    </q-card-media>


    <q-card-separator />

    <q-card-actions align="around">
      <!-- <q-btn @click="favorited = !favorited" flat round small :color="favorited? 'grey' : 'red'"><q-icon name="favorite" /></q-btn> -->
      <q-btn flat round small color="faded">Administrar Batalha</q-btn>
    </q-card-actions>

  </q-card>
</template>

<script>

export default {
  name: 'Card',


}

</script>
