import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import VCalendar from 'v-calendar';

import 'v-calendar/style.css';
import { tooltip } from './components/js/tooltip'
const app = createApp(App);

import 'bootstrap';

app.use(VCalendar, {});
app.directive('tooltip', tooltip)
app.mount('#app');
