<template>
  <div class="shop-product">
    <figure class="product-image">
      <img class="image" :src="product.image" :alt="product.name" />
    </figure>
    <div class="product-details">
      <p class="product-heading">
        <img class="icon" src="~../assets/images/customize.png" alt="Personalize" />
        Personalize
      </p>
      <h4 class="name">{{ product.name }}</h4>
      <p class="type">{{ product.highTop ? 'Cano Alto' : 'Cano Baixo' }}</p>
      <h5 class="price">R$ {{ product.price | money }}</h5>
      <h6 class="installments">ou {{ installments.times }}X {{ installments.price }} sem juros</h6>
      <button-filled v-if="" @click.native="buy(product)" text="Comprar" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    filters: {
      money(value) {
        return value.toFixed(2).toString().replace('.', ',')
      }
    }
  }
</script>
