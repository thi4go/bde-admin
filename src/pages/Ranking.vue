<template>
  <q-page>
  <div class="no-scroll" no-scroll>

    <div v-if="loading">
      <q-inner-loading :visible="loading">
        <q-spinner-gears size="50px" color="black"></q-spinner-gears>
      </q-inner-loading>
    </div>

    <div v-else>
      <!-- <battle-creator /> -->
      <q-table
        title="Table Title"
        :data="this.data"
        :columns="columns"
        row-key="name"
      >

      <template slot="top-left" slot-scope="props">
      <q-select
        v-model="selection"
        stack-label="Selection"
        hide-underline
        :options="[
          { label: 'Single', value: 'single' },
          { label: 'Multiple', value: 'multiple' },
          { label: 'None', value: 'none' }
        ]"
        color="secondary"
        style="min-width: 100px"
      />
    </template>



      </q-table>
    </div>



  </div>
  </q-page>
</template>

<script>
import api from '../api'

export default {
  name: 'Battle',

  data () {
    return {
      loading: false,
      data: null,
      columns: [
      {
        name: 'name',
        required: true,
        label: 'MC',
        align: 'left',
        field: 'name',
        sortable: true
      },
      {
        name: 'points',
        required: true,
        label: 'Pontos',
        align: 'center',
        field: 'points',
        sortable: true
      },
    ],
    }
  },

  async mounted () {
    this.loading = true

    let d = await api.getRanking()

    this.data = d.data

    console.log(this.data)
    this.loading = false
    // console.log(this.battle)
  }

}

</script>
