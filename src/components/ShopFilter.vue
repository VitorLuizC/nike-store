<template>
  <div class="shop-filter">
    <h3 class="title">Chuteiras HyperVenom:</h3>
    <form-checkbox text="Cano Alto"></form-checkbox>
    <form-checkbox text="Cano Baixo"></form-checkbox>
    <form-checkbox text="Futebol Campo"></form-checkbox>
    <form-checkbox text="Futebol Society"></form-checkbox>
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
  .shop-filter
    display: flex

    & > .button
      margin-left: auto
</style>

