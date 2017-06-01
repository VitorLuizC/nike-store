<template>
  <parallax-container class="app-banner-header" background="#ff5e2d">
    <img
      class="banner-image"
      src="~../assets/images/banner-header.png"
      alt="Finish it!"
      title="Nike: Finish it!" />
  </parallax-container>
</template>

<script>
  import ParallaxContainer from './ParallaxContainer'

  export default {
    components: { ParallaxContainer }
  }
</script>

<style lang="stylus">
  @import '../assets/styles/helpers'

  .app-banner-header
    min-height: 551px
    max-height: @min-height

    .banner-image
      centralize(block)
      display: block
      transform: translateX(-510px) scale(.5)

      @media screen and (min-width: 350px)
        transform: translateX(-490px) scale(.6)

      @media screen and (min-width: 350px)
        transform: translateX(-490px) scale(.6)

      @media screen and (min-width: 450px)
        transform: translateX(-460px) scale(.7)

      @media screen and (min-width: 560px)
        transform: translateX(-460px)

      @media screen and (min-width: 768px)
        transform: translateX(-150px) scale(.7)

      @media screen and (min-width: 980px)
        transform: translateX(-50px) scale(.8)

      @media screen and (min-width: 1050px)
        transform: none
</style>
