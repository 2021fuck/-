import { login, getInfo} from '@/api/user'
// import { elem } from 'svgo/lib/svgo/jsAPI'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    Uid: '',
    Info: [],
    token:getToken()
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
      // console.log(result)
      if (result.code === 200) {
        setToken(result.token)
        commit('SET_TOKEN', result.token)
        commit('SET_UID', result.uid)
      }else{
        return Promise.reject(new Error('faile'))
    }
  },

  // get user info
  async getInfo({ commit, state }) {
      let result =await getInfo(state.Uid, state.token)
    if (result.code==200){
      commit('SET_INFO',result.list)
    }else {
      return Promise.reject(new Error('falie'))
    }
  },

  // user logout
  // logout({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     logout(state.token).then(() => {
  //       removeToken() // must remove  token  first
  //       resetRouter()
  //       commit('RESET_STATE')
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },
logout({commit}){
  removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
},
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}
const getters = {
  getjwt: (state) => {
    return state.token
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

