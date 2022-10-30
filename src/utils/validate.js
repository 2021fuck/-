/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {boolean}
 */
import { login_mock } from '@/api/user'
export function validUsername(str) {
login_mock({
    username: 'admin',
    password: '111111'
  })

  // return valid_map.indexOf(str.trim()) >= 0
  //这里只是用于初步判定，判断是否满足某种格式，格式正确，将发送给服务器判断，然后根据返回结果做出下一步操作
  return 1>=0
}
