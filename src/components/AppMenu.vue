<template>
  <nav class="app-menu" role="navigation">
    <button @click="toggle" class="menu-toggler" :class="{ 'active': show }">Alternar o menu</button>
    <ul class="menu-list" :class="{ 'active': show }">
      <li class="menu-item">
        <a class="link" href="#">Masculino</a>
      </li>
      <li class="menu-item">
        <a class="link" href="#">Feminino</a>
      </li>
      <li class="menu-item">
        <a class="link" href="#">Menino</a>
      </li>
      <li class="menu-item">
        <a class="link" href="#">Menina</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data: () => ({ show: false }),
    methods: {
      toggle() {
        this.show = !this.show
      }
    }
  }
</script>

<style lang="stylus">
  .menu-list
    display: flex
    list-style: none

    @media screen and (max-width: (768px - 1px))
      position: absolute
      top: 72px
      left: 0
      display: none
      align-items: center
      justify-content: space-around
      flex-direction: column
      width: calc(100% + 20px)
      margin-left: -10px
      height: 'calc(75vh - %s)' % @top
      background-color: #fff
      box-shadow: 0 5px 8px -2px rgba(#000, .25);
      z-index: 1

      &.active
        display: flex

  .menu-item
    @media screen and (min-width: 768px)
      & + &
        margin-left: 36px


    & > .link
      display: block
      margin: 12px
      font-weight: 600
      color: #000
      text-decoration: none
      text-transform: uppercase

      @media screen and (min-width: 768px)
        margin: 0

  .menu-toggler
    position: relative;
    margin-top: (6px * 1.75)
    margin-bottom: @margin-top
    padding: 0
    border: 0 none transparent
    outline: @border
    font-size: 0
    color: transparent
    cursor: pointer

    @media screen and (min-width: 768px)
      display: none !important

    &
    &::before
    &::after
      display: block
      width: 30px
      height: 6px
      border-radius: 8px
      background-color: #000
      transition: transform .8s ease-out,
                  background-color .2s ease-in

    &::before
    &::after
      content: ''

    &::before
      transform: translateY(-175%)

    &::after
      transform: translateY(75%)


    &.active
      background-color: transparent

      &::before
        transform: rotate(45deg)

      &::after
        transform: translateY(-100%) rotate(-45deg)
</style>
