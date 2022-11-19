import * as types from "./actionTypes"
import axios from "axios"

export const getWritterData = () => (dispatch) =>{
        dispatch({type : types.GET_WRITTER_DATA_REQUEST});
       return axios.get("https://recoverobackend.herokuapp.com/Writter").then((res)=>{
           console.log( "getdata",res.data)
           dispatch({type : types.GET_WRITTER_DATA_SUCCESS, payload : res.data});
       }).catch((err)=>{
           console.log(err);
           dispatch({type :  types.GET_WRITTER_DATA_FAILURE});
       });  
}

export const deleteWritterData = (Id) => (dispatch) =>{
    dispatch({type : types.DELETE_WRITTER_DATA_REQUEST});
   return axios.delete(`https://recoverobackend.herokuapp.com/Writter/${Id}`).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.DELETE_WRITTER_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.DELETE_WRITTER_DATA_FAILURE});
   });  
}

export const postWritterData = (payload) => (dispatch) =>{
    dispatch({type : types.POST_WRITTER_DATA_REQUEST});
   return axios.post(`https://recoverobackend.herokuapp.com/Writter`, payload).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.POST_WRITTER_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.POST_WRITTER_DATA_FAILURE});
   });  
}

export const editWritterData = (Id, payload) => (dispatch) =>{
    dispatch({type : types.EDIT_WRITTER_DATA_REQUEST});
   return axios.patch(`https://recoverobackend.herokuapp.com/Writter/${Id}`, payload).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.EDIT_WRITTER_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.EDIT_WRITTER_DATA_FAILURE});
   });  
}