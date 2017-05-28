<template>
  <header class="app-header">
    <img src="~../assets/images/logo.png" alt="Nike" title="Símbolo da Nike" />
    <app-header-menu />
    <shop-cart />
  </header>
</template>

<script>
  import AppHeaderMenu from './AppHeaderMenu'
  import ShopCart from './ShopCart'

  export default {
    components: { AppHeaderMenu, ShopCart }
  }
</script>

<style lang="stylus">
  .app-header
    height: 72px
    background-color: #fff

    & > .app-menu
      margin-right: 40px
</style>
