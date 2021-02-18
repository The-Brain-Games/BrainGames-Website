import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);


Vue.config.productionTip = false;

import Home from './components/Home.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: Home
  },
  {
    name: 'hello',
    path: '/hello',
    component: HelloWorld
}
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');