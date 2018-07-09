<template>
    <div class="user-info-wrapper">
        <section class="section" v-if="infoStep == 0">
            <div class="">
                <div class="columns">
                    <div class="column input-label is-two-fifths">
                        First Name
                    </div>
                    <div class="column">
                        <input type="text" class="input" />
                    </div>
                </div>
            </div>
            <div class="">
                <div class="columns">
                    <div class="column input-label is-two-fifths">
                        Middle Name
                    </div>
                    <div class="column">
                        <input type="text" class="input" />
                    </div>
                </div>
            </div>
            <div class="">
                <div class="columns">
                    <div class="column input-label is-two-fifths">
                        Last Name
                    </div>
                    <div class="column">
                        <input type="text" class="input" />
                    </div>
                </div>
            </div>
        </section>
        <section class="section" v-if="infoStep == 1">
            <div class="">
                <div class="columns">
                    <div class="column input-label is-two-fifths">
                        Email
                    </div>
                    <div class="column">
                        <input type="text" class="input" />
                    </div>
                </div>
            </div>
             <div class="">
                <div class="columns">
                    <div class="column input-label is-two-fifths">
                        Birthday
                    </div>
                    <div class="column">
                        <div class="input">
                            <date-picker
                                :date="startTime"
                                :option="option"
                                :limit="limit">
                            </date-picker>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="columns">
                    <div class="column input-label is-two-fifths">
                        Gender
                    </div>
                    <div class="column">
                        <label>Male <input type="radio" name="gender" /></label>
                        <label>Female <input type="radio" name="gender" /></label>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" v-if="infoStep == 2">
            <div class="">
                <div class="columns">
                    <div class="column input-label is-two-fifths">
                        Self Description
                    </div>
                    <div class="column">
                        <textarea class="input" ></textarea>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="columns">
                    <div class="column input-label is-two-fifths">
                        Job Description
                    </div>
                    <div class="column">
                        <input type="text" class="input" />
                    </div>
                </div>
            </div>
        </section>
        <button class="button" @click="step(false)">back</button>
        <button class="button" @click="step(true)">next</button>
    </div>
</template>

<script type="text/javascript" src="./script/user-info.js">
</script>

<style>
  @import "style/user-info.css"
</style>
