import './assets/main.css'

import llibreriaVUE from './llibreriaVUE/llibreriaVUE.es'

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

app.use(llibreriaVUE)

app.mount('#app')