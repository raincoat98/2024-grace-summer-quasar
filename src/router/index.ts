import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Test from '@/views/Test.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: MainLayout,
    children: [
      {
        path: '',
        component: About,
      },
    ],
  },
  {
    path: '/test',
    name: 'Test',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Test,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
