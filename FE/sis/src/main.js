import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'; // 필요한 경우
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'jquery';
import 'popper.js';


const app = createApp(App);

app.use(BootstrapVue3);
app.use(VCalendar, {});

app.mount('#app');
