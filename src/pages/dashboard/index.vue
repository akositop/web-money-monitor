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
                            <img :src="fatherPhoto" alt="Bonifacio" />
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <h2>Second column</h2>
                        <div>
                            This is a playground to test code. It runs a full
                        </div>
                         <div>
                            <input type="file" id="uploader" name="userPhoto" />
                            <input type="button" value="submit" @click="upload()" />
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <div>
                            <h3>upload progress</h3>
                            <h4>{{ uploadProgress }}</h4>
                        </div>
                        <div v-for="image in images" style="position: relative;">
                            <img :src="image.urlPath" :alt="image.urlPath" />
                            <button class="button"
                                style="position: absolute; top: 0px; margin: 5px;"
                                @click="deleteImage(image)">
                                <icon name="trash"></icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <loading-indicator v-if="loading"></loading-indicator>
        </div>
    </transition>
</template>

<script type="text/javascript" src="./script/dashboard.js">
</script>

<style>
    @import "style/dashboard.css"
</style>
