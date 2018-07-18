<template>
    <transition name="zoom" mode="out-in">
        <div class="dashboard-wrapper container">
            <div class="columns">
                <div class="column">
                    <div class="content">
                        <h2>First column</h2>
                        <div>
                            This is a playground to test code. It runs a full
                            Node.js environment and already has all of npm’s
                            400,000 packages pre-installed, including validator.
                            Try it out:
                        </div>
                        <div>
                            <img src="static/files/father.jpg" alt="Bonifacio" />
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <h2>Second column</h2>
                        <div>
                            This is a playground to test code. It runs a full
                            Node.js environment and already has all of npm’s
                            400,000 packages pre-installed, including validator.
                            Try it out:
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/javascript" src="./script/dashboard.js">
</script>

<style>
  @import "style/dashboard.css"
</style>
