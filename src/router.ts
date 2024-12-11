// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import BoxSection from './components/BoxSection.vue';
import HomeGridSection from './components/HomeGridSection.vue';
import SignupPop from './components/SignupPop.vue';
import LoginButton from './components/HomeVue/LoginButton.vue';
import FileMatcher from './components/HomeVue/FileMatcher.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/collection',
        name: 'Collection',
        component: BoxSection,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: HomeGridSection,
    },
    {
        path: '/register',
        name: 'register',
        component: SignupPop,
    },
    {
        path: '/unrecognized-files/:videoID',
        name: 'UnrecognizedFile',
        component: FileMatcher,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory('/webui'),
    routes,
});

export default router;