import { GET_LOGIN_ERROR, GET_LOGIN_LOADING, GET_LOGIN_SUCCESS, GET_REGISTER_ERROR, GET_REGISTER_LOADING, GET_REGISTER_SUCCESS } from "./actionTypes";

const initState = {
    isAuth:false,
    isLoading:false,
    isError:false,
    token:""
}

export const reducer = (state=initState,{type,payload}) => {
    switch (type) {
        case GET_REGISTER_LOADING:{
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case GET_REGISTER_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
            }
        }

        case GET_REGISTER_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        }

        case GET_LOGIN_LOADING:{
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        }

        case GET_LOGIN_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                isAuth:true,
                token:payload
            }
        }

        case GET_LOGIN_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError:true,
                token:"",
                isAuth:false
            }
        }    
        default:{
            return state
        }
    }
}