import {Promise} from 'es6-promise'
import i18n from '../i18n'
import toastr from 'toastr'

import axios from 'axios'

export default class AppFactory {
    init = () => {
        // Add a response interceptor
        axios.interceptors.response.use(undefined, (error) => {
            toastr.error(i18n.t('trans.toast_error'))
            return Promise.reject(error)
        })
        //this.start()
        return Promise.resolve()
    }
}
