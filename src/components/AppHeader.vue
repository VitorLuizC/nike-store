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
  .app-header
    display: flex
    height: 72px
    background-color: #fff

    & > .logo
      display: block
      width: 70px
      height: 25px
      max-width: 100%
      margin-top: 28px

    & > .app-menu
      margin-top: 38px
      margin-left: 40px
    
    & > .shop-cart
      margin-top: 23px
      margin-left: auto
</style>
