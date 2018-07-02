<template>
    <transition name="fade-slide">
        <div id="app" v-if="showApp">
            <global-header></global-header>
            <transition name="page" mode="out-in">
                <router-view />
            </transition>
        </div>
    </transition>
</template>

<script src="./script/app.js">
</script>

<style>
    @import 'bulma/css/bulma.css';
</style>

<style>
    @import './style/app.css';
</style>