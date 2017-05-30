<template>
  <section class="shop-shelf">
    <h3 class="title">{{ title }}</h3>
    <carousel :perPageCustom="[[1280, 4], [768, 3], [544, 2], [0, 1]]" scrollPerPage>
      <slide v-for="(boot, index) in boots" :key="index">
        <shop-boot :boot="boot" />
      </slide>
    </carousel>
  </section>
  <!-- 1280px -->
</template>

<script>
  import ShopBoot from './ShopBoot'

  export default {
    components: { ShopBoot },
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
