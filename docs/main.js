import Vue from 'vue';
import { ScrollShadow } from '../src';
import App from './App.vue';

Vue.component('scroll-shadow', ScrollShadow);

new Vue({
  el: '#app',
  render: h => h(App)
});
