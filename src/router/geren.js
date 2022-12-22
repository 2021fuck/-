import Layout from '@/layout'
const personalRouter={
  path:'/personal',
  component:Layout,
  name:'Personal',
  meta:{title:'个人服务',icon: 'el-icon-user-solid',roles:['admin','personal']},
  children: [
    {
      path: 'children',
      name: 'Children',
      component:()=>import('@/views/personal/children'),
      meta: {
        title: '出生收养',
        roles:['admin','personal']
        }
    },
    {
      path: 'hospital',
      name: 'Hospital',
      component:()=>import('@/views/personal/hospital'),
      meta: {
        title: '社保就医',
        roles:['admin','personal']
      }
    },
    {
      path: 'school',
      name: 'School',
      component:()=>import('@/views/personal/school'),
      meta: {
        title: '学习教育',
        roles:['admin','personal']
      }
    },
    {
      path: 'work',
      name: 'Work',
      component:()=>import('@/views/personal/work'),
      meta: {
        title: '就业创业',
        roles:['admin','personal']
      }
    },
    {
      path: 'zhiye',
      name: 'Zhiye',
      component:()=>import('@/views/personal/zhiye'),
      meta: {
        title: '职业资格',
        roles:['admin','personal']
      }
    }
  ]
}
export default personalRouter
