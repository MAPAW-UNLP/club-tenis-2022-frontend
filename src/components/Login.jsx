import React from 'react'
import tennisImg from '../Img/tennisImg.jpg'
import LoginForm from './LoginForm'

import '../styles/login.css'

const Login = () => {
  return (
    <div id='login-frame'>
        <div id='nav-div'> 
            <img src={tennisImg} id='nav-img'/> 
        
        </div>
        
        <div id='login-form-component'>
            <div id='login-header'>
                <div id='login-header-fist'></div>
                <div id='login-header-medium'></div>
                <div id='login-header-last'></div>
            </div>
            <div id='logo'></div>
            
            <LoginForm/>

        </div>
    </div>
  )
}

export default Login