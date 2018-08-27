import LoadingIndicator from '@/components/loading-indicator'

export default {
    data() {
        return {
            loading: false,
            remoteUrl: 'http://www.mastergebe.com/static/'
        }
    },

    components: {
        LoadingIndicator
    }
}