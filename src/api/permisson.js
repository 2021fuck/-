import request from '@/utils/request'
//用户查询
export function role_search() {
  return request({
    url: '/role',
    method: 'get',
  })
}
//添加用户
export  function role_add(data){
  return request({
    url:'/role',
    method:'post',
    data
  })
}
//修改用户
export function role_update(data){
  return request({
    url:'/role',
    method:'put',
    data
  })
}
//删除用户
export function role_del(data){
  return request({
    url:'/role',
    method:'del',
    data
  })
}
//路由查询
export function path_search(){
  return request({
    url:'/path',
    method:'get'
  })
}
//权限查询
export function permission_search(token){
  return request({
    url:'/permission',
    method:'get'
  })
}
