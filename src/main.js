import { createPinia } from 'pinia';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

const pinia = createPinia();

createApp(App).use(pinia).mount('#app')
