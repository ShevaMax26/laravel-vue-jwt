import { createApp } from 'vue'
import Index from './components/Index.vue'
import router from './router'
// import axios from "axios";
import './bootstrap';

const app = createApp(Index)

app.use(router)
// app.config.globalProperties.axios = axios

app.mount('#app')

