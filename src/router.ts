import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CodeEditor from '@/views/CodeEditor.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Registration.vue';
import store from '@/store/store';
import EffectsLibrary from '@/views/EffectsLibrary.vue';
import Resources from '@/views/Resources.vue';
import Environment from '@/views/Environment.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources
    },
    {
      path: '/environment',
      name: 'environment',
      component: Environment
    },
    {
      path: '/effects',
      name: 'effects',
      component: EffectsLibrary
    },
    {
      path: '/code',
      name: 'code',
      component: CodeEditor
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Register
    }
  ]
});

router.beforeEach((to: any, from: any, next: any) => {
  if (to.matched.some((record: any) => record.meta.requiresAuth)) {
    if (!store.getters['auth/isAuthenticated']) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
