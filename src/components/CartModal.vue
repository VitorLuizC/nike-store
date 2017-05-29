<template>
  <div v-if="false" class="cart-modal" role="dialog" aria-labelledby="title" aria-describedby="description">
    <h2 id="title">Carrinho de compras</h2>
    <p id="description"></p>
  </div>
</template>

<script>
  export default {
    props: {
      count: {
        type: Number,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>
