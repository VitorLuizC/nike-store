<template>
  <app-header />
</template>

<script>
  import AppHeader from './AppHeader'

  export default {
    components: { AppHeader },
    data: () => ({
      text: 'Hello world!'
    })
  }
</script>
