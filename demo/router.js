import Vue from 'vue';
import Router from 'vue-router';
import Designer from './designer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'designer',
      component: Designer,
    },
  ],
});
