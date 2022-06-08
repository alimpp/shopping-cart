import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/css/main.css'
import './assets/css/anim.css'
import './assets/css/size.css'
import './assets/css/text-color.css'

createApp(App).use(store).use(router).mount('#app')
