import { createApp } from 'vue';
import App from './App.vue';
import './scss/app.scss';
import 'animate.css';
import 'v-calendar/style.css';
import BaseButton from './components/Base/Button.vue';
import BaseModal from './components/Base/Modal/index.vue';
import BaseModalCard from './components/Base/Modal/Card.vue';
import BaseIcon from './components/Base/Icon.vue';
import BaseInput from './components/Base/Input.vue';
import VCalendar from 'v-calendar';
import VOrder from './plugins/order';
import VScroll from './plugins/scroll';
import 'virtual:svg-icons-register';

const app = createApp(App);

app.use(VCalendar, {});
app.use(VOrder);
app.use(VScroll);

app.component('BaseButton', BaseButton);
app.component('BaseModal', BaseModal);
app.component('BaseModalCard', BaseModalCard);
app.component('BaseIcon', BaseIcon);
app.component('BaseInput', BaseInput);

app.mount('#app');
