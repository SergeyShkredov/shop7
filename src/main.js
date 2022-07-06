import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

window.axios = require('axios')

createApp(App).use(router).mount('#app');
