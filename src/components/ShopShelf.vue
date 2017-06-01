<template>
  <section class="shop-shelf">
    <h3 class="title">{{ title }}</h3>
    <carousel
      :perPageCustom="[[1310, 4], [900, 3], [630, 2], [0, 1]]"
      :paginationSize="10"
      :paginationPadding="5"
      paginationColor="#d1d1d1"
      paginationActiveColor="#a5a5a5"
      scrollPerPage>
      <slide v-for="(boot, index) in boots" :key="index">
        <shop-boot :boot="boot" :active="active === index" @click.native="toggle(index)" />
      </slide>
    </carousel>
  </section>
</template>

<script>
  import ShopBoot from './ShopBoot'

  export default {
    components: { ShopBoot },
    data: () => ({ active: 0 }),
    props: {
      title: {
        type: String,
        required: true
      },
      boots: {
        type: Array,
        required: true
      }
    },
    methods: {
      toggle(boot) {
        this.active = boot
      }
    }
  }
</script>

<style lang="stylus">
  @import '../assets/styles/helpers'

  .shop-shelf
    width: calc(100% - 20px)
    margin-right: 10px
    margin-left: 10px

    @media screen and (min-width: 1050px)
      centralize(block) // overwrite margins
      width: 1024px

    @media screen and (min-width: 1310px)
      width: 1280px

    & > .title
      font-size: 16px
      font-weight: 700
      color: #000
      margin-bottom: 35px
</style>
