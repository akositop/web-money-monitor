export default {
    data() {
        return {

        }
    },

    props: [],

    components: {},

    mixins: [],

    created() {

    },

    mounted() {
        this.fetchLocal()
    },

    destroyed() {

    },

    watch: {

    },

    computed : {

    },

    methods: {
        fetchLocal() {
            this.loading = true
            this.$request({
                method: 'GET',
                url: 'static/tempdocs/userDoc.json',
                cache: false
             // }, true)
            }, true)
            .then(resp => {
                this.loading = false
                console.log('local fetch resp: ', resp.data)
            })
        }
    }
}