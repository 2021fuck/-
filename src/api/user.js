import request from '@/utils/request'
import request1 from '@/utils/mockrequest'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(uid, token) {
  return request({
    url: `/userinfo?uid=${uid}`,
    method: 'get',
    headers: {
      'Authorization': token
    }
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function login_mock(data){
  return request1({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}
