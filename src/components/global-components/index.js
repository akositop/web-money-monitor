import LoadingIndicator from '@/components/loading-indicator'

export default {
    data() {
        return {
            loading: false,
            remoteUrl: 'http://173.82.94.129/static/'
        }
    },

    components: {
        LoadingIndicator
    }
}