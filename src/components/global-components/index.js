import LoadingIndicator from '@/components/loading-indicator'

export default {
    data() {
        return {
            loading: false,
            remoteUrl: 'http://139.59.255.28/static/'
        }
    },

    components: {
        LoadingIndicator
    }
}