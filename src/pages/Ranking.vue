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
      <q-card class="inline shadow-4">

        <q-card-media>
          <img align="center" src="~assets/003.svg" width="100" height="100">
        </q-card-media>
      </q-card>

      <br /><br />

      <q-table
        title=""
        :data="this.data"
        :columns="columns"
        row-key="name"
        :pagination.sync="pagination"
      >
      <q-tr slot="body" slot-scope="props" :props="props" class="cursor-pointer">
        <q-td v-for="col in props.cols" :key="col.name" :props="props" style="font-size:15px">
           {{ col.value }}
        </q-td>
        <q-td>
          <q-btn size="sm" flat icon="fa-angle-right" @click="rowClick(props.row)"></q-btn>
        </q-td>
      </q-tr>
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
      pagination: {
        sortBy: null,
        descending: false,
        page: 1,
        rowsPerPage: 10
      }
    }
  },

  async beforeMount() {
    this.$store.dispatch('SET_BACK_BUTTON', false)
    
    if (this.$store.getters.ranking == null) {
      this.loading = true
      await this.$store.dispatch('FETCH_RANKING')
    }

    this.data = this.$store.getters.ranking

    this.loading = false
  },

  methods: {
    rowClick (v) {
      console.log(v)
      this.$router.push('/profile/detail/'+v._id)
    }
  }

}

</script>
