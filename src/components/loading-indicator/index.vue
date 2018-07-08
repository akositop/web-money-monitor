<template>
    <transition name="fade">
        <div class="loading-indicator-wrapper">
            <span class="prompt">
                <icon name="refresh" spin></icon>
                <span>loading...</span>
            </span>
        </div>
    </transition>
</template>

<script src="./script/loading-indicator.js"></script>

<style>
    @import "./style/loading-indicator.css";
</style>
