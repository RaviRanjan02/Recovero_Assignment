import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
  
  const token = localStorage.getItem("token");
  // console.log(isAuth);

  const location = useLocation();
  // console.log(location);

  if(token){
    return children
  }
  else{
    return <Navigate to={"/login"} state={{pathname:location.pathname}} replace={true}/>
  }
}

export default ProtectedRoutes