import React from 'react'
import LoginComponent from '../../components/LoginComponent/LoginComponent'

export const LoginPage = ({loginUser}) => {
  return (
    <div><LoginComponent loginUser={loginUser}/></div>
  )
}
