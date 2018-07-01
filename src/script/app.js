import globalHeader from './../components/global-header'

export default {
    name: 'App',

    data() {
        return {
            test: 'shit',
            name: 'money monitor',
            showNav: false
        }
    },

    components: {
        globalHeader
    },

    mounted() {
        setTimeout(() => {
            this.showNav = true
        }, 400)
        console.log('just been mounted the global header')
    }
}