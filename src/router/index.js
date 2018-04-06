import Vue from 'vue';
import Router from 'vue-router';
import TableViewPage from '@/pages/TableViewPage';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TableViewPage',
      component: TableViewPage
    }
  ]
});
