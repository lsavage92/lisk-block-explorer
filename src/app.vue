<style lang="scss">
  .content {
    background-color: #f5f5f5
  }
</style>

<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/images/lisk_logo.png" />
    </div>
    <div class="main">
      <div class="content">
        <transition name="fade" mode="out-in" appear>
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
