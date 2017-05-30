<template>
  <main>
    <shop-shelf title="Lançamentos" :boots="releases"></shop-shelf>
    <shop-shelf title="Mais Vendidos" :boots="bestSellers"></shop-shelf>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/types'
  import ShopShelf from './ShopShelf'

  export default {
    components: { ShopShelf },
    computed: mapGetters({
      releases: types.BOOTS_RELEASES,
      bestSellers: types.BOOTS_BEST_SELLERS
    }),
    data: () => ({ error: null }),
    async created() {
      const status = await this.$store.dispatch(types.BOOTS_LOAD)

      if (status instanceof Error)
        this.error = status.message
    }
  }
</script>
