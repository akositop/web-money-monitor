import axios from 'axios/dist/axios'

export default {
	install(Vue) {
		Vue.prototype.$request = (reqData, isCustom) => {
			// get local storage data
			let AUTH_ADDRESS = 'origin',
				API_IP = 'http://139.59.255.28:3000/'


			// function to access local stored cridential
			function getLocalAuth(address) {
				let data = localStorage.getItem(address)

				// check if data is present
				return data? data: null
			}

			if (!isCustom) {
				// set authentication data if auth not existed
				if (!reqData.authentication) {
					console.log('not a custom request!')
					// set auhentication data
					let authData = getLocalAuth(AUTH_ADDRESS)
					reqData.authentication = authData

					// set base api address data
					console.log(API_IP + (reqData.url? reqData.url: ''))
					reqData.url = API_IP + (reqData.url? reqData.url: '')
				}
			}

			// request pre setted with request data
			console.log('handled reqData: ', reqData)
			return axios(reqData)
		}
	}
}