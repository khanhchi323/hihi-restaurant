// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router configuration
import store from './store';   // Import Vuex store configuration

// Create and mount the Vue app
createApp(App)
  .use(router) // Use Vue Router
  .use(store)  // Use Vuex store
  .mount('#app');
