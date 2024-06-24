// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/Components/Home.vue'
import Order from '@/Components/Order.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/order', name: 'order', component: Order }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
