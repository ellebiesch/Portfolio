import './style.css';

import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import { MotionPlugin } from '@vueuse/motion';

createApp(App).use(MotionPlugin).use(router).use(vuetify).mount('#app');
