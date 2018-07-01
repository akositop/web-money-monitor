<template>
  <div id="app">
    <transition name="fade">
        <global-header v-if="showNav"></global-header>
    </transition>
    <router-view/>
  </div>
</template>

<script src="./script/app.js">
</script>

<style>
    @import 'bulma/css/bulma.css';
</style>

<style>
    @import './style/app.css';
</style>