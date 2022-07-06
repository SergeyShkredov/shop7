import axios from 'axios';
import configSystem from './configSystem'

class ProductService {
    // singup() {
    //     return axios.post(configSystem.API_URL_PRODUCT + 'user/singup', {user})
    // }

    singin() {
        return axios.post(configSystem.API_URL_PRODUCT + 'user/singin')
    }



}

export default new ProductService()
