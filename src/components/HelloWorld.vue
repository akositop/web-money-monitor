<template>
    <transition name="page" mode="out-in">
        <div class="hello">
            <!-- <h1>{{ msg }}</h1> -->
            <section class="section">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <h2>column 1</h2>
                            <div>
                                <icon name="beer" scale="5"></icon>
                            </div>
                        </div>
                        <div class="column">
                            <h2>column 2</h2>
                            <div>
                                <icon name="refresh" scale="2" spin></icon>
                                <icon name="comment" flip="horizontal"></icon>
                                <icon name="code-fork" label="Forked Repository"></icon>
                            </div>
                        </div>
                        <div class="column">
                            <h2>column 3</h2>
                            <div>
                                <icon label="No Photos" spin>
                                    <icon name="camera"></icon>
                                    <icon name="ban" scale="2" class="alert"></icon>
                                </icon>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <loading-indicator v-if="loading"></loading-indicator>
        </div>
    </transition>
</template>

<script>
// AJAX library import
// import axios from 'axios/dist/axios'
import moment from 'moment/moment'
import request from '../services/request/request'
import validator from '../services/validator/validator'
import Vue from 'vue'

// console.log(GlobalHeader)

Vue.use(request)
Vue.use(validator)

export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your starting Vue.js App',
            loading: false
        }
    },

    components: {},

    created () {
        localStorage.setItem('origin', 'gilbert nice one');
    },

    mounted () {
        this.fetch()
       // axios({
       //    method: 'GET',
       //    url: 'static/tempdocs/userDoc.json',
       //    cache: false
       // })
       // .then(function (data) {
       //    console.log('fetch data: ', data)
       //    console.log(moment().format('MM DD, YYYY'))
       // })
       console.log(this.$check.isEmail('gilbert.cuerbo@gmailcom'))
       console.log(this.$check.isPassword('gilbertgi lbertcuerbo'))
       console.log(this.$check.isPassword('gilbertqwe'))
    },

    methods: {
        fetch() {
            this.loading = true
            this.$request({
                method: 'GET',
                // url: 'http://localhost:3000/',
                contentType: 'application/json',
                cache: false
             // }, true)
            })
            .then(resp => {
                this.loading = false
                console.log('fetch resp: ', resp.data)
                console.log(moment().format('MM DD, YYYY'))
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
