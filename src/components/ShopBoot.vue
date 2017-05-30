<template>
  <div class="shop-boot">
    <figure class="boot-image">
      <img class="image" :src="boot.image" :alt="boot.name" />
    </figure>
    <div class="boot-details">
      <p class="boot-heading">
        <img class="icon" src="~../assets/images/customize.png" alt="Personalize" />
        Personalize
      </p>
      <h4 class="name">{{ boot.name }}</h4>
      <p class="type">{{ boot.highTop ? 'Cano Alto' : 'Cano Baixo' }}</p>
      <h5 class="price">R$ {{ boot.price | money }}</h5>
      <h6 class="installments">ou {{ boot.installments.times }}X {{ boot.installments.price }} sem juros</h6>
      <button-filled @click.native="buy(boot)" text="Comprar" />
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import * as types from '../store/types'
  import ButtonFilled from './ButtonFilled'

  export default {
    components: { ButtonFilled },
    props: {
      boot: {
        type: Object,
        required: true
      }
    },
    filters: {
      money(value) {
        return +(value).toFixed(2).toString().replace('.', ',')
      }
    },
    methods: mapActions({ buy: types.CART_INCLUDE })
  }
</script>
