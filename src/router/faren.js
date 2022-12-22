import Layout from '@/layout'
const companyRouter= {
  path:'/company',
  component:Layout,
  name:'Company',
  meta:{title:'法人服务',icon: 'el-icon-s-home',roles:['admin','legaler']},
  children: [
    {
      path: 'shuishou',
      name: 'Shuishou',
      component:()=>import('@/views/company/shuishou'),
      meta: {
        title: '缴费纳税',
        roles:['admin','legaler']
      }
    },
    {
      path: 'touzi',
      name: 'Touzi',
      component:()=>import('@/views/company/touzil'),
      meta: {
        title: '投资立项',
        roles:['admin','legaler']
      }
    },
    {
      path: 'zhaopin',
      name: 'Zhaopin',
      component:()=>import('@/views/company/zhaopin'),
      meta: {
        title: '用工招聘',
        roles:['admin','legaler']
      }
    },
    {
      path: 'zizhi',
      name: 'Zizhi',
      component:()=>import('@/views/company/zizhi'),
      meta: {
        title: '资质申请',
        roles:['admin','legaler']
      }
    },
  ]
}
export default companyRouter

