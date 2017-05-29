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
    data: () => ({ error: null }),
    async created() {
      const status = await this.$store.dispatch(types.BOOTS_LOAD)

      if (status instanceof Error)
        this.error = status.message
    }
  }
</script>

