import { createRouter, createWebHistory } from 'vue-router';

import Example from '../components/Example.vue';
import CatsComp from '../components/CatsComp.vue';
import HomeComp from '../components/HomeComp.vue';
import CurrenTCharComp from '../components/CurrenTCharComp.vue';
const routes = [
  { path: '/', component: HomeComp },
  { path: '/rick', component: Example },
  {path:'/cat',component:CatsComp},
  {path:'/currentChar/:id',component:CurrenTCharComp}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;