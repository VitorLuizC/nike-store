<template>
  <p>{{ boots }}</p>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/types'

  export default {
    computed: mapGetters({
      boots: types.BOOTS
    }),
    created() {
      this.$store.dispatch(types.BOOTS_LOAD)
    }
  }
</script>

