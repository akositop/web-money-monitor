<template>
    <nav class="global-header-wrapper navbar"
        role="navigation"
        aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/">
                <span class="navbar-item">
                    <!-- <icon name="th" scale="2" ></icon> -->
                    <icon name="th" scale="2" spin v-if="menuSpin"></icon>
                    <icon name="th" scale="2" v-else></icon>
                </span>
            </router-link>
            <span>title {{ title }}</span>
        </div>
    </nav>
</template>

<script src="./script/global-header.js"></script>

<style>
    @import "style/global-header.css";
</style>
