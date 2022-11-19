import * as types from "./actionTypes";
import axios from "axios";

const registerUser = (data) => (dsipatch) => {
    dsipatch({type:types.GET_REGISTER_LOADING})
    return axios.post("https://notes-api-mock-eval.herokuapp.com/user/register",data)
    .then((res) => {
        console.log(res.data);
        return dsipatch({type:types.GET_REGISTER_SUCCESS})
    })
    .catch((err) => {
        console.log(err);
        dsipatch({type:types.GET_REGISTER_ERROR})
    })
}

const login = (data) => (dsipatch) => {
    dsipatch({type:types.GET_LOGIN_LOADING})
    return axios.post("https://notes-api-mock-eval.herokuapp.com/user/login",data)
    .then((res) => {
        console.log(res.data);
        localStorage.setItem("token",res.data.token)
        return dsipatch({type:types.GET_LOGIN_SUCCESS,payload:res.data.token})
    })
    .catch((err) => {
        console.log(err);
        dsipatch({type:types.GET_LOGIN_ERROR})
    })
}

export {registerUser,login};
