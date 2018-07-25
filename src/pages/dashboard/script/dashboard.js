export default {
    data() {
        return {
            images: [],
            uploadProgress: 0,
            fatherPhoto: ''
        }
    },

    mounted() {
        this.fatherPhoto = this.remoteUrl + 'files/father.png'
        this.fetchImages()
        // this.fetchLocal()
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

        fetchImages() {
            this.loading = true
            this.$request({
                method: 'GET',
                url: 'test-images',
                cache: false
            })
            .then(resp => {
                this.loading = false
                console.log('local fetch resp: ', resp.data)
                this.setImages(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
        },

        setImages(data) {
            // check images data
            if (
                data &&
                data.doc &&
                data.doc.rows &&
                data.doc.rows.length
            ) {
                this.images = []
                // loop through images of data
                var imagesRows = data.doc.rows

                for (var i = 0; i < imagesRows.length; i++) {
                    var images = imagesRows[i].value

                    // loop throu image urls 
                    for (var j = 0; j < images.length; j++) {
                        this.images.push(this.remoteUrl + images[j].url)
                    }
                }
            }
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

            this.uploadProgress = 0

            this.$request({
                method: 'POST',
                url: 'http://localhost:3000/file/',
                contentType: 'multipart/form-data',
                data: formData,
                cache: false,
                // config: {
                //     progress: data => {
                //         this.uploadProgress = data.loaded
                //     }
                // }
            })
            .then(resp => {
                this.fetchImages()
                console.log('success uploading file')
            })
            .catch(err => {
                this.loading = false
                console.log(err)
            })
        }

    }
}