import Vue from 'vue';
import Router, { Route } from 'vue-router';
import Home from './views/Home.vue';
import store from '@/store/store';
import NotFoundComponent from '@/views/NotFound.vue';

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
      component: () => import('@/views/Resources.vue')
    },
    {
      path: '/environment',
      name: 'environment',
      component: () => import('@/views/Environment.vue')
    },
    {
      path: '/effects',
      name: 'effects',
      component: () => import('@/views/EffectsLibrary.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('@/views/Courses.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('@/views/Courses/Course.vue')
    },
    {
      path: '/code',
      name: 'code',
      component: () => import('@/views/CodeEditor.vue'),
      props: (route) => ({ snippetId: route.query.snippetId })
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/Registration.vue')
    },
    {
      path: '/verify',
      name: 'verify',
      component: () => import('@/views/Verify.vue'),
      props: (route) => ({ userId: route.query.userId, code: route.query.code })
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/AdminPanel.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'effects',
          name: 'admin',
          component: () => import('@/views/AdminPanel/Effects.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'snippets',
          name: 'snippets',
          component: () => import('@/views/AdminPanel/Snippets.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'tests',
          name: 'tests',
          component: () => import('@/views/AdminPanel/Tests.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'sections',
          name: 'sections',
          component: () => import('@/views/AdminPanel/CourseSections.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'courses',
          name: 'courses',
          component: () => import('@/views/AdminPanel/Courses.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    { path: '*', component: NotFoundComponent }
  ]
});

router.beforeEach((to: Route, from: any, next: any) => {
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
