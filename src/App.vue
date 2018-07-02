<template>
  <div id="app">
    <transition name="fade-slide">
        <global-header  v-if="showNav"></global-header>
    </transition>
    <transition name="page"  mode="out-in">
        <router-view />
    </transition>
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