import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import store from './store/index.js';
import { createRouter, createWebHistory } from 'vue-router';
import router from './router/router';




let a = createApp(App)
a.use(store);
a.use(router)
a.mount('#app')
