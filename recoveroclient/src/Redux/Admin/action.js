import * as types from "./actionTypes"
import axios from "axios"

export const getAdminData = () => (dispatch) =>{
        dispatch({type : types.GET_ADMIN_DATA_REQUEST});
       return axios.get("https://recoverobackend.herokuapp.com/Admin").then((res)=>{
           console.log( "getdata",res.data)
           dispatch({type : types.GET_ADMIN_DATA_SUCCESS, payload : res.data});
       }).catch((err)=>{
           console.log(err);
           dispatch({type :  types.GET_ADMIN_DATA_FAILURE});
       });  
}

export const deleteAdminData = (Id) => (dispatch) =>{
    dispatch({type : types.DELETE_ADMIN_DATA_REQUEST});
   return axios.delete(`https://recoverobackend.herokuapp.com/Admin/${Id}`).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.DELETE_ADMIN_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.DELETE_ADMIN_DATA_FAILURE});
   });  
}

export const postAdminData = (payload) => (dispatch) =>{
    dispatch({type : types.POST_ADMIN_DATA_REQUEST});
   return axios.post(`https://recoverobackend.herokuapp.com/Admin`, payload).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.POST_ADMIN_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.POST_ADMIN_DATA_FAILURE});
   });  
}

export const editAdminData = (Id, payload) => (dispatch) =>{
    dispatch({type : types.EDIT_ADMIN_DATA_REQUEST});
   return axios.patch(`https://recoverobackend.herokuapp.com/Admin/${Id}`, payload).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.EDIT_ADMIN_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.EDIT_ADMIN_DATA_FAILURE});
   });  
}