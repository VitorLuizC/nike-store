<template>
  <section class="shop-shelf">
    <h3 class="title">{{ title }}</h3>
    <carousel></carousel>
  </section>
</template>

<script>


  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      boots: {
        type: Array,
        required: true
      }
    }
  }
</script>
