import { createApp } from 'vue';
import App from './App.vue';
import './scss/app.scss';
import BaseButton from './components/Base/Button.vue';

const app = createApp(App);

app.component('BaseButton', BaseButton);

app.mount('#app');
