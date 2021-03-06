import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/store';
import './registerServiceWorker';
import axios from 'axios';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

require('@/assets/main.scss');

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

axios.interceptors.request.use(
  (config: any) => {
    const authToken = store.getters['auth/authToken'];
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);
