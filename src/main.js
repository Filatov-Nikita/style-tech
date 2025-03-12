import { createApp } from 'vue';
import App from './App.vue';
import './scss/app.scss';
import 'v-calendar/style.css';
import BaseButton from './components/Base/Button.vue';
import VCalendar from 'v-calendar';

const app = createApp(App);

app.use(VCalendar, {});

app.component('BaseButton', BaseButton);

app.mount('#app');
