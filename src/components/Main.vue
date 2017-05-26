<template>
  <header-block></header-block>
</template>

<script>
  import HeaderBlock from './HeaderBlock'

  export default {
    components: { HeaderBlock },
    data: () => ({
      text: 'Hello world!'
    })
  }
</script>
