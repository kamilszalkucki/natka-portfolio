// router.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeView.vue';
import PortfolioView from './views/PortfolioView.vue';
// import About from './views/About.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'HomeView',
    },
    {
        path: '/portfolio',
        component: PortfolioView,
        name: 'PortfolioView',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
