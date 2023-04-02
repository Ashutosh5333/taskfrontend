import * as types from "./actionTypes"
import axios from "axios"


const getsignReq = () =>{
   return {
      type: types.GET_SIGNUP_REQUEST
   }
}

const getsignSucess = (payload) => {
   return {
      type :types.GET_SIGNUP_SUCCESS,
      payload,
   }
}

const getsignFail = () => {
  return {
      type :types.GET_SIGNUP_FAILURE
  }
}

const getLoginReq = () =>{
   return {
      type: types.GET_LOGIN_REQUEST
   }
} 
const getloginSucess = (payload) => {
   return {
      type :types.GET_LOGIN_SUCCESS,
      payload,
   }
}

const getLoginFail = () => {
  return {
      type :types.GET_LOGIN_FAILURE
  }
}


export const  Signupdata = (payload) => (dispatch) => {
  dispatch(getsignReq())
  return axios.post(`https://super-pear-viper.cyclic.app/signup`,payload)
     .then((res)=>{
       return dispatch(getsignSucess(res))
     })
       .catch((err)=> {
           dispatch(getsignFail())
       })
}


export const  Logindata = (payload) => (dispatch) => {
   dispatch(getLoginReq())
   return axios.post(`https://super-pear-viper.cyclic.app/login`,payload)
      .then((res)=>{
        return dispatch(getloginSucess(res))
      })
        .catch((err)=>{
           console.log(err)
            dispatch(getLoginFail())
        })
}