export default {
    verify(to, from, next) {
        console.log('auth verified')
        next()
    },

    testFunc() {

    }
}