import Vue from 'vue';
import Router from 'vue-router';

/* Layout */
import Layout from '../views/layout/Layout';

Vue.use(Router);

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 * */
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('../views/login/index'),
    hidden: true,
  },
  { path: '/404', component: () => import('../views/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/home/index'),
        meta: { title: '首页', icon: 'home' },
      },
    ],
  },
];

export const asyncRouterMap = [
  {
    path: '/ums',
    component: Layout,
    redirect: '/ums/admin',
    name: 'ums',
    meta: { title: '权限', icon: 'ums' },
    children: [
      {
        path: 'admin',
        name: 'umsAdmin',
        component: () => import('../views/ums/admin/index'),
        meta: { title: '用户列表', icon: 'ums-admin' },
      },
      {
        path: 'role',
        name: 'umsRole',
        component: () => import('../views/ums/role/index'),
        meta: { title: '角色列表', icon: 'ums-role' },
      },
      {
        path: 'allocMenu',
        name: 'umsAllocMenu',
        component: () => import('../views/ums/role/allocMenu'),
        meta: { title: '分配菜单' },
        hidden: true,
      },
      {
        path: 'allocResource',
        name: 'umsAllocResource',
        component: () => import('../views/ums/role/allocResource'),
        meta: { title: '分配资源' },
        hidden: true,
      },
      {
        path: 'menu',
        name: 'umsMenu',
        component: () => import('../views/ums/menu/index'),
        meta: { title: '菜单列表', icon: 'ums-menu' },
      },
      {
        path: 'addMenu',
        name: 'umsAddMenu',
        component: () => import('../views/ums/menu/add'),
        meta: { title: '添加菜单' },
        hidden: true,
      },
      {
        path: 'updateMenu',
        name: 'umsUpdateMenu',
        component: () => import('../views/ums/menu/update'),
        meta: { title: '修改菜单' },
        hidden: true,
      },
      {
        path: 'resource',
        name: 'umsResource',
        component: () => import('../views/ums/resource/index'),
        meta: { title: '资源列表', icon: 'ums-resource' },
      },
      {
        path: 'resourceCategory',
        name: 'umsResourceCategory',
        component: () => import('../views/ums/resource/categoryList'),
        meta: { title: '资源分类' },
        hidden: true,
      },
    ],
  },
  {
    path: '/frontUser',
    component: Layout,
    redirect: '/frontUser/list',
    name: 'frontUser',
    meta: { title: '前端用户', icon: 'angle-right' },
    children: [
      {
        path: 'list',
        name: 'frontUserList',
        component: () => import('../views/frontUser/list/index.vue'),
        meta: { title: '前端用户列表', icon: 'angle-double-right' },
      },
    ],
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/list',
    name: 'article',
    meta: { title: '文章', icon: 'angle-right' },
    children: [
      {
        path: 'list',
        name: 'articleList',
        component: () => import('../views/article/list/index.vue'),
        meta: { title: '文章列表', icon: 'angle-double-right' },
      },
    ],
  },

  // keep this at the last
  { path: '*', redirect: '/404', hidden: true },
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});
