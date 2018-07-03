<template>
    <transition name="fade-slide">
        <div id="app" v-if="showApp">
            <global-header></global-header>
            <div>
                <router-link to="/hello">Hello page</router-link> | 
                <router-link to="/edit-variables">Edit Variables</router-link> | 
                <router-link to="/">Dashboard</router-link>
            </div>
            <router-view />
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