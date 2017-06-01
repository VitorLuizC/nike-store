<template>
  <figure class="cart-icon">
    <img class="image" src="~../assets/images/cart.png" :alt="text" :title="text" />
    <span v-if="count > 0" class="counter">{{ count }}</span>
  </figure>
</template>

<script>
  export default {
    props: {
      count: {
        type: Number,
        required: true
      }
    },
    computed: {
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
    cursor: pointer

    & > .counter
      position: absolute
      right: -3px
      bottom: @right
      display: block
      width: 25px
      height: @width
      line-height: @width
      font-weight: 700
      color: #fff
      text-align: center
      background-color: #ff5e2d
      border-radius: 50%
</style>

