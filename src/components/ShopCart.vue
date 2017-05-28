<template>
  <div class="shop-cart">
    <figure class="cart-icon">
      <img
        class="image"
        src="~../assets/images/cart.png"
        :alt="text"
        :title="text" />
      <span v-if="count > 0" class="counter">{{ count }}</span>
    </figure>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/types'

  export default {
    computed: {
      ...mapGetters({
        items: types.CART_ITEMS,
        count: types.CART_COUNT
      }),
      text() {
        if (this.count > 0) {
          const word = this.count > 1 ? 'items' : 'item'
          return `${this.count} ${word} no carrinho de compras`
        }
        return 'Carrinho de compras vazio'
      }
    }
  }
</script>

<style lang="stylus">
  .cart-icon
    position: relative

    & > .counter
      position: absolute
      bottom: 0
      right: 0
      display: block
      color: #fff
      border-radius: 50%
      background-color: #ff5f2f
</style>
