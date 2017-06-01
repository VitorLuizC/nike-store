<template>
  <div class="app">
    <app-header />
    <app-banner-header />
    <shop-container />
    <app-banner-footer />
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from './AppHeader'
  import AppBannerHeader from './AppBannerHeader'
  import AppBannerFooter from './AppBannerFooter'
  import AppFooter from './AppFooter'
  import ShopContainer from './ShopContainer'

  export default {
    components: {
      AppHeader,
      AppBannerHeader,
      ShopContainer,
      AppBannerFooter,
      AppFooter,
    }
  }
</script>

<style lang="stylus" src="../assets/styles/reset.styl"></style>
