<template>
  <nav class="app-menu" role="navigation">
    <ul class="menu-list">
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

<style lang="stylus">
  .menu-list
    display: flex
    list-style: none

  .menu-item
    & + &
      margin-left: 36px

    & > .link

      font-weight: 600
      color: #000
      text-decoration: none
      text-transform: uppercase
</style>
