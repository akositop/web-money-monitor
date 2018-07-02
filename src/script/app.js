import globalHeader from './../components/global-header'

export default {
    name: 'App',

    data() {
        return {
            test: 'shit',
            name: 'money monitor',
            showApp: false
        }
    },

    components: {
        globalHeader
    },

    mounted() {
        this.showApp = true
        console.log('just been mounted the global header')
    }
}