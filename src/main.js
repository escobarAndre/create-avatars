import { createApp } from 'vue';
import { createPinia } from 'pinia';

import Multiselect from '@vueform/multiselect/dist/multiselect';

import './assets/base.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.component('Multi-select', Multiselect);
app.use(createPinia());
app.use(router);

app.mount('#app');
