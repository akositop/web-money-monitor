<template>
    <transition name="zoom" mode="out-in">
        <div class="auth-wrapper">
            <h1>auth</h1>
            <div class="row">
              <span>Departure Date：</span>
              <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
            </div>
        </div>
    </transition>
</template>

<script type="text/javascript" src="./script/auth.js">
</script>

<style>
  @import "style/auth.css"
</style>
