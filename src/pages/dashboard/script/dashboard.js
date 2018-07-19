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
            }, true)
            .then(resp => {
                this.loading = false
                console.log('local fetch resp: ', resp.data)
            })
            .catch(err => {
                console.log(err)
            })
        },

        upload() {
            console.log('uploading...')
            this.loading = true
            
            let formData = new FormData(),
                formEl = document.getElementById('uploader')

            if (formEl && formEl.files && formEl.files.length) {
                for (let i = 0; i < formEl.files.length; i++) {
                    formData.append('userPhoto', formEl.files[i])
                }
            }

            this.$request({
                method: 'POST',
                url: 'file',
                contentType: 'multipart/form-data',
                data: formData,
                cache: false
            })
            .then(resp => {
                this.loading = false
                console.log('error uploading')
            })
            .catch(err => {
                this.loading = false
                console.log(err)
            })
        }

    }
}