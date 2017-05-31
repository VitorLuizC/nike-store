<template>
  <div class="app">
    <app-header />
    <app-banner />
    <shop-container />
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from './AppHeader'
  import AppBanner from './AppBanner'
  import AppFooter from './AppFooter'
  import ShopContainer from './ShopContainer'

  export default {
    components: { AppHeader, AppBanner, AppFooter, ShopContainer }
  }
</script>

<style lang="stylus" src="../assets/styles/reset.styl"></style>
