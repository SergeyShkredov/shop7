import axios from 'axios';
import configSystem from './configSystem'

class ProductService {
    getAllProducts() {
        return axios.get(configSystem.API_URL_PRODUCT + 'product/')
    }

    getProduct(productId) {
        return axios.get(configSystem.API_URL_PRODUCT + `product/${productId}`)
    }

    getCategories() {
        return axios.get(configSystem.API_URL_PRODUCT + 'category/')
    }

}

export default new ProductService()
