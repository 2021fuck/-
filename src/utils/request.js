import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import store from '@/store'
const service = axios.create({
  baseURL: 'https://api.edulx.xyz/backstage',
  timeout: 5000 // request timeout
})

service.interceptors.request.use(
  config => {
    const jwt=getToken()
    if (jwt) {
      config.headers['Authorization'] = jwt
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status!==200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('user/resetToken').then(() => {
      //       location.reload()
      //     })
      //   })
      // }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      if(res.err!=null||res.error){
        Message({
          message: res.err,
          type: 'error',
          duration: 5 * 1000
        })
      }
       else return response
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
