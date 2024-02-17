import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Import the store

createApp(App)
  .use(store) // Use the store
  .mount('#app');
