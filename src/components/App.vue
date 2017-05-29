<template>
  <div class="app">
    <app-header />
    <shop-container />
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from './AppHeader'
  import AppFooter from './AppFooter'
  import ShopContainer from './ShopContainer'

  export default {
    components: { AppHeader, AppFooter, ShopContainer }
  }
</script>

<style lang="stylus" src="../assets/styles/reset.styl"></style>
