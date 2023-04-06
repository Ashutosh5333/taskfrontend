import * as types from "./actionTypes"
import axios from "axios"



// ------------    GetData blog   ------------ //

const getdataReq = () =>{
    return {
       type: types.GET_DATA_REQUEST
    }
} 
const getdataSucess = (payload) => {
    return {
       type :types.GET_DATA_SUCCESS,
       payload,
    }
}
const getdataFail = () => {
   return {
       type :types.GET_DATA_FAILURE
   }
}

// -----------------

const getsingledataReq = () =>{
   return {
      type: types.GETSINGLE_DATA_REQUEST
   }
} 
const getsingledataSucess = (payload) => {
   return {
      type :types.GETSINGLE_DATA_SUCCESS,
      payload,
   }
}
const getsingledataFail = () => {
  return {
      type :types.GETSINGLE_DATA_FAILURE
  }
}


// -------- ADD  blog  ---------- 

const AdddataReq = () =>{
   return {
      type: types.ADD_DATA_REQUEST,
   }
} 
const AdddataSucess = (payload) => {
   return {
      type :types.ADD_DATA_SUCCESS,
      payload,
   }
}
const AdddataFail = () => {
  return { 
      type :types.ADD_DATA_FAILURE
  }
}

// --------------- Delete ----------------  //

const DeleteDatareq = () =>{
   return {
      type: types.DELETE_DATA_REQUEST
   }
} 
const Deletedatasucess = (payload) => {
   return {
      type :types.DELETE_DATA_SUCCESS,
   }
}
const Deletedatafai = () => {
  return {
      type :types.DELETE_DATA_FAILURE
  }
  }

  
const Taskupdatedreq = () =>{
   return {
      type: types.EDIT_TASK_FAILURE
   }
} 
const Taskupdatedsucess = (payload) => {
   return {
      type :types.EDIT_TASK_SUCCESS,
      payload,
   }
}
const Taskupdatedfailure = () => {
  return {
      type :types.EDIT_TASK_REQUEST
  }
  }


         //  --------- My Post --------  //

         const MydatapostReq = () =>{
            return {
               type: types.MYPOST_DATA_REQUEST,
            }
         } 
         const MyAdddataPostSucess = (payload) => {
            return {
               type :types.MYPOST_DATA_SUCCESS,
               payload,
            }
         }
         const MyAdddataPostFail = () => {
           return { 
               type :types.MYPOST_DATA_FAILURE
           }
         }
         

         let token = JSON.parse(localStorage.getItem("token"))
         //  console.log("tokenaction",token)
      // -------------  Add Blog  ------------- //

const  Addblogs =(newdata) => (dispatch) => {
  dispatch(AdddataReq)
  return axios.post(`https://super-pear-viper.cyclic.app/task/create`,newdata ,{
   headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })
   .then((res) => {
    return   dispatch(AdddataSucess(res.data));
   }).catch((e)=> {
   return    dispatch(AdddataFail())
   })
}

   // ---------------------     Get blog data    -------------------- //

  const getAllblogData = (dispatch) => {
      dispatch(getdataReq())
  return axios.get(`https://super-pear-viper.cyclic.app/allblog`,{
       headers:{
         "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`
       },
  })
    .then((res)=>{
    return    dispatch(getdataSucess(res.data))
    }).catch((e)=>{
     return    dispatch(getdataFail())
    })
  }


   // -------------- Delete data -------------  //

    
 export  const getDeleteData =(_id) => (dispatch) => {
   dispatch(DeleteDatareq())
return axios.delete(`https://super-pear-viper.cyclic.app/task/delete/${_id}`,{
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
})
 .then((res)=>{
 return    dispatch(Deletedatasucess())
 }).catch((e)=>{
  return    dispatch(Deletedatafai())
 })
}


// ---------------- My post -------------- //

export const GetMypost = (dispatch) => {
   dispatch(MydatapostReq)
   return axios.get(`https://super-pear-viper.cyclic.app/task` ,{
      headers:{
         "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`
       },
   })
   .then((res)=>{
   return   dispatch(MyAdddataPostSucess(res.data))
   })
   .catch((e)=>{  
   return    dispatch(MyAdddataPostFail())
   })
}


//  ---------------- GET single data ---------------------- //

 export const getSingleblogData = (_id) => (dispatch) => {
   dispatch(getsingledataReq())
return axios.get(`https://super-pear-viper.cyclic.app/allblog/${_id}`,{
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
})
 .then((res)=>{
 return    dispatch(getsingledataSucess(res.data))
 }).catch((e)=>{
  return    dispatch(getsingledataFail())
 })
}

   
 export const EditblogData = (id,payload) => (dispatch) => {
   dispatch(Taskupdatedreq())
return axios.patch(`https://super-pear-viper.cyclic.app/task/update/${id}`,payload,{
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
})
 .then((res)=>{
 return    dispatch(Taskupdatedsucess(res.data))
 }).catch((e)=>{
  return    dispatch(Taskupdatedfailure())
 })
}




  export {getAllblogData ,Addblogs }
