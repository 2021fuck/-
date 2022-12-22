import Layout from '@/layout'
const permissionRouter=  {
  path:'/permission',
  component:Layout,
  name: "Permission",
  meta:{title:'权限管理',icon: 'el-icon-user',roles:['admin']},
  children: [
    {
      path: 'roles',
      name: 'Roles',
      component: () => import('@/views/ permission/roles'),
      meta: { title: '角色管理',roles:['admin']}
    },
    {
      path: 'user',
      name: 'User',
      component: () => import('@/views/ permission/user'),
      meta: { title: '用户管理',roles: ['admin'] }
    },
  ]
}
export default permissionRouter
