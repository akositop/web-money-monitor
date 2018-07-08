<template>
    <transition name="fade" mode="out-in">
        <div class="auth-wrapper">
            <div class="auth-content">
                <transition name="page">
                    <div class="auth-login auth-sub-page section"
                        v-if="$route.params.action === 'login'">
                        <!-- <h1>auth login</h1> -->
                        <user-credential></user-credential>
                        <button class="button is-rounded is-fullwidth">login</button>
                    </div>
                </transition>
                <transition name="page">
                    <div class="auth-register auth-sub-page section"
                        v-if="$route.params.action === 'register'">
                         <user-info></user-info>
                         <section class="section">
                             <user-credential></user-credential>
                         </section>
                        <button class="button is-rounded is-fullwidth">Register</button>
                    </div>
                </transition>
            </div>
        </div>
    </transition>
</template>

<script type="text/javascript" src="./script/auth.js">
</script>

<style>
  @import "style/auth.css"
</style>
