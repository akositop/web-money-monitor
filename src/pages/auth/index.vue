<template>
    <transition name="fade" mode="out-in">
        <div class="auth-wrapper">
            <div class="auth-content">
                <transition name="page">
                    <div class="auth-login auth-sub-page section"
                        v-if="$route.params.action === 'login'">
                        <h1>auth login</h1>
                        <div class="row">
                            <span>Birthday：</span>
                            <date-picker
                                :date="startTime"
                                :option="option"
                                :limit="limit">
                            </date-picker>
                        </div>
                    </div>
                </transition>
                <transition name="page">
                    <div class="auth-register auth-sub-page section"
                        v-if="$route.params.action === 'register'">
                        <h1>auth register</h1>
                        <div class="row">
                            <span>Birthday：</span>
                            <date-picker
                                :date="startTime"
                                :option="option"
                                :limit="limit">
                            </date-picker>
                        </div>
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
