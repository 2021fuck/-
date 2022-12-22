import { login, getInfo} from '@/api/user'
// import { elem } from 'svgo/lib/svgo/jsAPI'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { path_search ,role_search} from '@/api/permisson'
const getDefaultState = () => {
  return {
    Uid: '',
    Info: [],
    token:null
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_UID: (state, Uid) => {
    state.Uid = Uid
  },
  SET_INFO: (state, Info) => {
    state.Info = Info
  }
}

const actions = {
  // user login
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    let result = await login({ email: username.trim(), passwd: password })
    const res=result.data
      if (result.status === 200) {
        setToken(res.token)
        commit('SET_TOKEN', res.token)
        commit('SET_UID', res.uid)
      }else{
        return Promise.reject(new Error('faile'))
    }
  },

  // 获取用户信息
  async getInfo({ commit, state }) {
      let result =await getInfo(state.token)
    const res=result.data

    if (result.status==200){
      commit('SET_INFO',res.list)
    }else {
      return Promise.reject(new Error('falie'))
    }
  },
  //退出登录
logout({commit}){
  removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
},
  // 删除token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

