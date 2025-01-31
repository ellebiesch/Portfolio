import './style.css';

import { createApp } from 'vue';
import App from './App.vue';
import VueLazyLoad from 'vue-lazyload-next'
import vuetify from './plugins/vuetify';
import router from './router';
import { MotionPlugin } from '@vueuse/motion';

const app = createApp(App);

app.use(MotionPlugin).use(router).use(vuetify)
.use(VueLazyLoad, {
//     loading: '/src/assets/placeholder.jpg', // Optional loading state
//   error: '/src/assets/error-image.jpg',   // Optional error state
    preLoad: 1.3,
    attempt: 3,                             
    throttleWait: 500
});

app.mount('#app')
