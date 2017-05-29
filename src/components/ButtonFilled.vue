<template>
  <button class="button-filled" :class="{ 'active': primary }">
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
  .button-filled
    display: flex
    align-items: center
    justify-content: center
    width: 166px
    height: 46px
    font-family: 'Roboto', sans-serif
    font-size: 13px
    text-transform: uppercase
    background-color: #313131

    &.active
      width: 183px
      background-color: #ff5c2b
</style>
