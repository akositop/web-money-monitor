<template>
    <transition name="fade-slide">
        <div id="app" v-if="showApp">
            <global-header></global-header>
            <div>
                <router-link to="/hello">Hello page</router-link> |
                <router-link to="/edit-variables">Edit Variables</router-link> |
                <router-link to="/auth/login">login</router-link> |
                <router-link to="/auth/register">register</router-link>
            </div>
            <div class="section">
                <router-view />
            </div>
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