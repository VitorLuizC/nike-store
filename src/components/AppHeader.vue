<template>
  <header class="app-header">
    <img class="logo" src="~../assets/images/logo.png" alt="Nike" title="Símbolo da Nike" />
    <app-menu />
    <shop-cart />
  </header>
</template>

<script>
  import AppMenu from './AppMenu'
  import ShopCart from './ShopCart'

  export default {
    components: { AppMenu, ShopCart }
  }
</script>

<style lang="stylus">
  @import '../assets/styles/helpers'

  .app-header
    position: relative
    box-sizing: border-box
    display: flex
    width: calc(100% - 20px)
    height: 72px
    margin-right: 10px
    margin-left: @margin-right
    background-color: #fff

    @media screen and (min-width: 1050px)
      centralize(block) // overwrite margins
      width: 1024px

    @media screen and (min-width: 1310px)
      width: 1280px

    & > .logo
      display: block
      width: 70px
      height: 25px
      max-width: 100%
      margin-top: 28px

    & > .app-menu
      margin-top: 38px
      margin-left: 40px

      @media screen and (max-width: (768px - 1px))
        order: -1
        margin-top: 28px
        margin-left: 0
        margin-right: 20px

    & > .shop-cart
      margin-top: 23px
      margin-left: auto
</style>
