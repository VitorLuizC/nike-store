<template>
  <main class="shop-container">
    <shop-filter class="filter"></shop-filter>
    <shop-shelf class="shelf" title="Mais vendidos" :boots="bestSellers"></shop-shelf>
    <shop-shelf class="shelf" title="Lançamentos" :boots="releases"></shop-shelf>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/types'
  import ShopShelf from './ShopShelf'
  import ShopFilter from './ShopFilter'

  export default {
    components: { ShopShelf, ShopFilter },
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

<style lang="stylus">
  .shop-container
    & > .filter
      margin-top: 35px

    & > .filter
    & > .shelf
      margin-bottom: 80px
</style>

