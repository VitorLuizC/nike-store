<template>
  <section class="parallax-container" :style="{ 'background-color': background }">
    <parallax
      :speedFactor="speed"
      sectionClass="parallax-banner"
      containerClass="container">
      <slot></slot>
    </parallax>
    <slot name="content"></slot>
  </section>
</template>

<script>
  import Parallax from 'vue-parallaxy'

  export default {
    components: { Parallax },
    props: {
      speed: {
        type: Number,
        default: .35
      },
      background: {
        type: String,
        default: null
      }
    }
  }
</script>

<style lang="stylus">
  .parallax-container
    position: relative
    overflow: hidden
    width: 100%
    scroll-behavior: smooth
    z-index: -1
</style>
