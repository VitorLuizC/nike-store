<template>
  <div class="shop-filter">
    <h3 class="title">Chuteiras HyperVenom:</h3>
    <div class="filters">
      <form-checkbox text="Cano alto"></form-checkbox>
      <form-checkbox text="Cano baixo"></form-checkbox>
      <form-checkbox text="Futebol Campo"></form-checkbox>
      <form-checkbox text="Futebol Society"></form-checkbox>
    </div>
    <form-button class="button" text="Todos os Produtos"></form-button>
  </div>
</template>

<script>
  import * as types from '../store/types'
  import FormCheckbox from './FormCheckbox'
  import FormButton from './FormButton'

  export default {
    components: { FormButton, FormCheckbox }
  }
</script>

<style lang="stylus">
  @import '../assets/styles/helpers'

  .shop-filter
    display: flex
    align-items: center
    width: calc(100% - 20px)
    margin-right: 10px
    margin-left: 10px
    padding-bottom: 12px
    border-bottom: 1px solid #ccc

    @media screen and (min-width: 1050px)
      centralize(block) // overwrite margins
      width: 1024px

    @media screen and (min-width: 1310px)
      width: 1280px

    & > .title
      font-size: 18px
      font-weight: 600
      color: #010101

    & > .button
      margin-left: auto

    & > .filters
      display: flex
      justify-content: space-between
      width: 585px
      margin-left: 30px
</style>
