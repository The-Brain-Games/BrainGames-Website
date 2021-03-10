import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import Home from './components/Home.vue';
import BrainNG from './components/BrainNG.vue';
import BrainCraft from './components/BrainCraft.vue';
import AboutUs from './components/AboutUs.vue';
import ModSubmit from './components/ModSubmit.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: Home
  },
  {
    name: 'brainng',
    path: '/brainng',
    component: BrainNG
  },
  {
    name: 'braincraft',
    path: '/braincraft',
    component: BrainCraft
  },
  {
    name: 'about-us',
    path: '/about-us',
    component: AboutUs
  },
  {
    name: 'mod-submit',
    path: '/mod-submit',
    component: ModSubmit
  },

];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');