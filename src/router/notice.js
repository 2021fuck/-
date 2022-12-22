import Layout from '@/layout'
const noticeRouter=  {
  path: '/edit',
  name: 'Editer',
  component:Layout,
  meta: {title: '公告发布',icon: 'el-icon-s-order',roles:['admin','editor']},
  children: [
    {
      path: 'write',
      name: 'Notice',
      component:()=>import('@/views/edit/write'),
      meta: {title:'管理通告',roles: ['admin','editor']}
    }
  ]
}

export default noticeRouter
