import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'
import './assets/globalStyle.css';
import './assets/custom-style.css';
import router from "./router";

createApp(App)
    .use(router)
    .mount('#app')
