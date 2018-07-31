export default {
    name: 'global-header',

    data() {
        return {
            title: 'money monitor',
            menuSpin: true
        }
    },

    mounted() {
        // stopping menu spin
        // after some time after mounted
        setTimeout(() => {
            this.menuSpin = false
        }, 900)
    }
}