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
      width: 100%
      @media screen and (min-width: 630px)
        margin-top: -420px // ?

    & > .banner-content
      centralize(absolute)
      display: flex
      flex-direction: column
      align-items: center
      width: 100%

      & > .title
        margin: 0
        margin-bottom: 25px
        font-size: 72px
        font-weight: 900
        color: #fff
        text-transform: uppercase
</style>
