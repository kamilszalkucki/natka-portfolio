import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'
import './assets/globalStyle.css';
import './assets/custom-style.css';
import router from "./router";
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)
    .use(router)
    .mount('#app')
