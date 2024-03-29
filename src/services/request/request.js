import axios from 'axios/dist/axios'

export default {
    install(Vue) {
        Vue.prototype.$request = (reqData, isCustom) => {
            // get local storage data
            let AUTH_ADDRESS = 'origin',
                API_IP = 'http://www.mastergebe.com:3000/'


            // function to access local stored cridential
            function getLocalAuth(address) {
                let data = localStorage.getItem(address)

                // check if data is present
                return data? data: null
            }

            // set authentication data if auth not existed
            if (!reqData.authentication) {
                    // set auhentication data
                    let authData = getLocalAuth(AUTH_ADDRESS)
                    reqData.authentication = authData
            }

            // set default base api address if the request is not custom
            if (!isCustom) {
                // set base api address data
                reqData.url = API_IP + (reqData.url? reqData.url: '')
            }

            // request pre setted with request data
            // console.log('handled reqData: ', reqData)
            return axios(reqData)
        }
    }
}
