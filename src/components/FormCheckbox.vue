<template>
  <div class="form-checkbox">
    <input
      v-model="checked"
      :id="id"
      class="input"
      type="checkbox" />
    <label class="checkbox" :class="{ 'active': checked }" />
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
  import uuid from 'uuid/v1'

  export default {
    props: {
      checked: {
        type: Boolean,
        required: false
      },
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      id() {
        return `checkbox-${uuid()}`
      }
    }
  }
</script>

<style lang="stylus">
  .form-checkbox
    display: flex
    cursor: pointer

    & > .input
      display: none

    & > .text
      margin-top: 0
      margin-left: 10px
      margin-bottom: 3px
      font-size: 16px
      font-weight: 700
      color: #999

    & > .checkbox
      box-sizing: border-box
      display: block
      width: 19px
      height: @width
      padding: 3px
      border: 1px solid #ccc
      transition:
        background-color .5s,
        border-color .5s

      &.active
        border-color: #000
        background-color: #000
        background-clip: content-box
</style>
