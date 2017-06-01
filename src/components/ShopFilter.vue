<template>
  <div class="shop-filter">
    <h3 class="title">Chuteiras HyperVenom:</h3>
    <div class="filters">
      <form-checkbox
        v-for="(filter, index) in filters"
        :key="index"
        :checked="filter.active"
        :text="filter.name"
        @click.native="applyFilter(filter)" />
    </div>
    <form-button @click.native="disableAllFilters" class="button" text="Todos os Produtos"></form-button>
  </div>
</template>

<script>
  import * as types from '../store/types'
  import FormCheckbox from './FormCheckbox'
  import FormButton from './FormButton'

  export default {
    components: { FormButton, FormCheckbox },
    data() {
      return {
        filters: [
          {
            name: 'Cano alto',
            active: false,
            disable: 'Cano baixo',
            filter: boot => boot.highTop
          },
          {
            name: 'Cano baixo',
            active: false,
            disable: 'Cano alto',
            filter: boot => !boot.highTop
          },
          {
            name: 'Futebol Campo',
            active: false,
            disable: 'Futebol Society',
            filter: boot => boot.category === 'soccer'
          },
          {
            name: 'Futebol Society',
            active: false,
            disable: 'Futebol Campo',
            filter: boot => boot.category === 'indor soccer'
          }
        ]
      }
    },
    methods: {
      disableFiltersByNames(names) {
        const disableFilterByName = name => {
          const filter = this.filters.find(filter => filter.name === name)

          if (filter)
            filter.active = false
        }

        (Array.isArray(names) ? names : [names]).forEach(disableFilterByName)
      },
      applyFilter(filter) {
        filter.active = !filter.active

        if (filter.disable)
          this.disableFiltersByNames(filter.disable)
        this.$store.dispatch(types.BOOTS_FILTER, this.filters)
      },
      disableAllFilters() {
        this.disableFiltersByNames(this.filters.map(filter => filter.name))
        this.$store.dispatch(types.BOOTS_FILTER, this.filters)
      }
    }
  }
</script>

<style lang="stylus">
  @import '../assets/styles/helpers'

  .shop-filter
    display: flex
    align-items: center
    width: calc(100% - 20px)
    margin-right: 10px
    margin-left: 10px
    padding-bottom: 12px
    border-bottom: 1px solid #ccc
    flex-direction: column

    @media screen and (min-width: 930px)
      flex-direction: row

    @media screen and (min-width: 1050px)
      centralize(block) // overwrite margins
      width: 1024px

    @media screen and (min-width: 1310px)
      width: 1280px

    & > .title
      font-size: 18px
      font-weight: 700
      color: #010101

    & > .button
      @media screen and (min-width: 930px)
        margin-left: auto

    & > .filters
      display: flex
      justify-content: space-around
      flex-direction: column
      height: 150px
      margin-bottom: 15px

      @media screen and (min-width: 530px)
        justify-content: space-between
        flex-direction: row
        width: 100%
        height: auto

      @media screen and (min-width: 930px)
        width: 520px
        margin-left: 10px
        margin-bottom: 0

      @media screen and (min-width: 1050px)
        width: 585px
        margin-left: 30px
</style>
