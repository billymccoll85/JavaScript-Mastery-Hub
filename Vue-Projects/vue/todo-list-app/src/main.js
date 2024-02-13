import { createApp } from 'vue'
import App from './App.vue'
import store from './store/modules/todoList'
import './assets/styles.css';

createApp(App).use(store).mount('#app')
