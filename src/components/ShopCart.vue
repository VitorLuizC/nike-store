<template>
  <div class="shop-cart">
    <cart-icon :count="count" />
    <cart-modal :count="count" :items="items"></cart-modal>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/types'
  import CartIcon from './CartIcon'
  import CartModal from './CartModal'

  export default {
    components: { CartIcon, CartModal },
    computed: mapGetters({
      count: types.CART_COUNT,
      items: types.CART_ITEMS
    })
  }
</script>
