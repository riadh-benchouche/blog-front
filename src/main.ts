import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from "axios";
import {router} from "./routes/router";

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? 'Bearer ${}': '';
    return config;
});



createApp(App).use(router).mount('#app')
