import validator from 'validator'
import strings from './strings/en.js'

// language used
const LANG = ['en-US']

export default {
    install(Vue) {
        Vue.prototype.$check = {
            // check for email pattern
            isEmail: (str) => {
                let result = {
                        prompt: '',
                        value: validator.isEmail(str, LANG)
                    }

                // check validation result
                result.prompt = (result.value)? strings.email.yes: strings.email.not

                return result
            },

            // check password
            isPassword: (str) => {
                // maxima size of valid password
                const MAXIMA = {
                        min: 8,
                        max: 15
                    }

                let result = {
                        prompt: '',
                        value: false
                    },
                    isValid = false

                // check if the password is valid
                isValid = validator.isAlphanumeric(str, LANG)
                // check the size of the password
                if (isValid) {
                    isValid = validator.isLength(str, MAXIMA)
                }

                // set result values
                result.prompt = isValid? strings.password.yes: strings.password.not
                result.value = isValid

                return result
            }
        }
    }
}