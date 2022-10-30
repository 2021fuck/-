import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/editor/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path:'/personal',
    component:Layout,
    name:'Personal',
    meta:{title:'个人服务',icon: 'el-icon-user-solid'},
    children: [
      {
        path: 'children',
        name: 'Children',
        component:()=>import('@/views/personal/children'),
        meta: {title: '出生收养'}
      },
      {
        path: 'hospital',
        name: 'Hospital',
        component:()=>import('@/views/personal/hospital'),
        meta: {title: '社保就医'}
      },
      {
        path: 'school',
        name: 'School',
        component:()=>import('@/views/personal/school'),
        meta: {title: '学习教育'}
      },
      {
        path: 'work',
        name: 'Work',
        component:()=>import('@/views/personal/work'),
        meta: {title: '就业创业'}
      },
      {
        path: 'zhiye',
        name: 'Zhiye',
        component:()=>import('@/views/personal/zhiye'),
        meta: {title: '职业资格'}
      }
    ]
  },
  {
    path:'/company',
    component:Layout,
    name:'Company',
    meta:{title:'法人服务',icon: 'el-icon-s-home'},
    children: [
      {
        path: 'shuishou',
        name: 'Shuishou',
        component:()=>import('@/views/company/shuishou'),
        meta: {title: '缴费纳税'}
      },
      {
        path: 'touzi',
        name: 'Touzi',
        component:()=>import('@/views/company/touzil'),
        meta: {title: '投资立项'}
      },
      {
        path: 'zhaopin',
        name: 'Zhaopin',
        component:()=>import('@/views/company/zhaopin'),
        meta: {title: '用工招聘'}
      },
      {
        path: 'zizhi',
        name: 'Zizhi',
        component:()=>import('@/views/company/zizhi'),
        meta: {title: '资质申请'}
      },
    ]
  },
  {
    path:'/schedule',
    component:Layout,
    name:'Schedule',
    meta:{title:'办理记录',icon: 'el-icon-s-order'},
    children: [
      {
        path: 'record',
        name: 'Record',
        component:()=>import('@/views/schedule/ record'),
        meta: {title: '记录'}
      },
      {
        path: 'sum',
        name: 'Sum',
        component:()=>import('@/views/schedule/sum'),
        meta: {title: '概览'}
      }
    ]
  },
  {
    path:'/permission',
    component:Layout,
    name: "Permission",
    meta:{title:'权限管理',icon: 'el-icon-user'},
    children: [
      {
        path: 'roles',
        name: 'Roles',
        component: () => import('@/views/ permission/roles'),
        meta: { title: '角色管理' }
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/ permission/user'),
        meta: { title: '用户管理' }
      },
    ]
  },
  {
    path: '/edit',
    name: 'Editer',
    component:Layout,
    meta: {title: '公告发布',icon: 'el-icon-s-order'},
    children: [
      {
        path: 'write',
        name: 'Notice',
        component:()=>import('@/views/edit/write'),
        meta: {title:'管理通告'}
      }

    ]

  },
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/editor/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'Example',
  //     icon: 'el-icon-s-help'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/editor/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'Create Article', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/editor/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/editor/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'Article List', icon: 'list' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  //  控制路由切换时，滚轮的位置变化。浏览器的前进后退按钮是默认是重新加载页面，先要求点击浏览器前进后退时，页面要回到上一次的位置。
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
  mode:'history'
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
//重置路由的方法，切换用户或者退出时清除动态加载的路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
