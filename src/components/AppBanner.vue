<template>
  <parallax :speedFactor=".35" sectionClass="app-banner" containerClass="banner-container">
    <img class="image" src="~../assets/images/banner.png" alt="Finish it!" title="Nike: Finish it!" />
  </parallax>
</template>

<script>
  import Parallax from 'vue-parallaxy'

  export default {
    components: { Parallax }
  }
</script>

<style lang="stylus">
  @import '../assets/styles/helpers'

  .app-banner
    position: relative
    overflow: hidden
    width: 100%
    min-height: 551px
    max-height: @min-height
    background-color: #ff5e2d
    scroll-behavior: smooth

  .banner-container
    & > .image
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
