<template>
  <parallax-container class="app-banner-footer" background="#000" :speed=".19">
    <img
      class="banner-image"
      src="~../assets/images/banner-footer.png"
      alt="Finish it!"
      title="Nike: Finish it!" />
    <article class="banner-content" slot="content">
      <h2 class="title">Just do it.</h2>
      <form-button text="Todos os Produtos"></form-button>
    </article>
  </parallax-container>
</template>

<script>
  import ParallaxContainer from './ParallaxContainer'
  import FormButton from './FormButton'

  export default {
    components: { ParallaxContainer, FormButton }
  }
</script>

<style lang="stylus">
  @import '../assets/styles/helpers'

  .app-banner-footer
    position: relative
    min-height: 568px
    max-height: @min-height

    .banner-image
      centralize(block)
      display: block
      width: 300%
      margin-left: -100%

      @media screen and (min-width: 370px)
        margin-top: -100px // issue
        width: 300%;
        margin-left: -100%;

      @media screen and (min-width: 480px)
        margin-top: -175px // issue
        width: 300%;
        margin-left: -100%;

      @media screen and (min-width: 570px)
        margin-top: -100px // issue
        width: 200%;
        margin-left: -50%;

      @media screen and (min-width: 680px)
        margin-top: -100px // issue
        width: 150%;
        margin-left: -25%;

      @media screen and (min-width: 1050px)
        margin-top: -500px;
        width: 130%;
        margin-left: -15%;

      @media screen and (min-width: 1280px)
        width: 100%
        margin-top: -420px
        margin-left: auto

    & > .banner-content
      centralize(absolute)
      display: flex
      flex-direction: column
      align-items: center
      width: 100%

      & > .title
        margin: 0
        margin-bottom: 25px
        font-size: 48px
        font-weight: 900
        color: #fff
        text-transform: uppercase

        @media screen and (min-width: 400px)
          font-size: 72px
</style>
