import React from 'react'
import LoginComponent from '../../components/LoginComponent/LoginComponent'
import { Navigate } from 'react-router-dom'

export const LoginPage = ({loginUser,user}) => {
  return (
    <div>

   {user? <Navigate to='/private' replace></Navigate>:  <LoginComponent loginUser={loginUser}/>}
  

  </div>

  )
}
