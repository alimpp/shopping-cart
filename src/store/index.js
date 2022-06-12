import { createStore } from 'vuex'
import Products from './modules/product'
import { LOGIN , ONSTART,  LOGOUT} from './constans/constans'
export default createStore({
  state: {
    isAuth : false , 
    token : "" , 
  },
  mutations: {
    [ONSTART](state){
      let token = localStorage.getItem("token")
      if(token){
          state.isAuth = true
          state.token = token
          axios.defaults.headers.common['Authorization'] = "Token " + token
      }else{
          state.isAuth = false
          state.token = ""
          axios.defaults.headers.common['Authorization'] = ""
      }
    } , 
    [LOGIN](state , token){
      if(token){
          state.isAuth = true
          state.token = token 
          localStorage.setItem("token" , token)
         axios.defaults.headers.common['Authorization'] = "Token " + token
      }else{
          state.isAuth = false 
          state.token = ""
          localStorage.removeItem('token')
          axios.defaults.headers.common['Authorization'] = ""
      }
    } , 
    [LOGOUT](state){
        state.isAuth = false 
        state.token = ""
        axios.defaults.headers.common['Authorization'] = ""
        localStorage.removeItem('token')
      }
  },
  modules: {
    Products : Products
  }
})
