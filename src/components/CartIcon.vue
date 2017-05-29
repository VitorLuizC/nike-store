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
