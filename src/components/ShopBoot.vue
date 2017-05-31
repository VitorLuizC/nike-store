<template>
  <div class="shop-boot" :class="{ 'active': active }">
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
      <h5 class="price">R$ {{ boot.price | real }}</h5>
      <h6 class="installments">ou {{ boot.installments.number }}X {{ boot.installments.value | real }} sem juros</h6>
      <button-filled v-if="active" class="boot-button" @click.native="buy(boot)" text="Comprar" primary />
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
      active: {
        type: Boolean,
        default: false
      },
      boot: {
        type: Object,
        required: true
      }
    },
    methods: mapActions({ buy: types.CART_INCLUDE })
  }
</script>

<style lang="stylus">
  @import '../assets/styles/helpers'

  .shop-boot
    centralize(block)
    box-sizing: border-box
    width: 290px
    height: 430px
    padding-right: 45px
    padding-left: @padding-right

    &.active
      border: 1px solid #ccc

      & > .boot-details > .boot-heading
        margin-top: 0

  .boot-heading
    display: flex
    align-items: center
    margin-top: 25px
    margin-bottom: 0
    padding-bottom: 4px
    border-bottom: 1px solid #e2e2e2
    font-size: 12px
    font-weight: 600
    color: #666
    text-transform: uppercase

    & > .icon
      margin-right: 5px

  .boot-details
    & > .name
    & > .type
    & > .price
    & > .installments
      margin-top: 10px
      margin-bottom: 0
      font-size: 14px
      color: #666

    & > .name
      font-weight: 600
      color: #010101

    & > .type
      color: #999

    & > .price
      font-size: 16px
      font-weight: 600

  .boot-button
    centralize(block)
    margin-top: 15px
</style>

