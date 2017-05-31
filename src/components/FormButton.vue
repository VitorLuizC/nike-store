<template>
  <button class="form-button" :class="{ 'active': primary }">
    {{ text }}
  </button>
</template>

<script>
  export default {
    props: {
      primary: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="stylus">
  .form-button
    display: flex
    align-items: center
    justify-content: center
    width: 166px
    height: 46px
    padding: 0
    border: 0 none transparent
    border-radius: 4px
    outline: @border
    font-family: 'Roboto', sans-serif
    font-weight: 600
    font-size: 13px
    color: #fff
    text-transform: uppercase
    background-color: #313131

    &.active
      width: 183px
      background-color: #ff5c2b
</style>
