<template>
  <div class="form-checkbox">
    <input v-model="checked" :id="id" class="input" type="checkbox">
    <label :for="id" class="checkbox" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      checked: {
        type: Boolean,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      id() {
        return `checkbox-${Date.now()}`
      }
    }
  }
</script>

<style lang="stylus">
  .form-checkbox
    display: block
</style>
