import React from 'react'
import { useState } from 'react'

const LoginForm = () => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");


    const handleUserNameChange = (e) =>{
        setUser(e.target.value);
        const passInput = document.getElementById('input-pass');
        e.target.value === "" ? passInput.disabled = true: passInput.disabled = false;  
    }

    const handlePassChange = (e) =>{
        setPass(e.target.value);
        const loginBtn = document.getElementById('login-btn');
        e.target.value === "" ? loginBtn.disabled = true: loginBtn.disabled = false;
    }

    /* Aca en el onClick del submit hacer el post a la API para chequear que sea el admin. Sino devolver un msje de error*/

    return (
        <div id='login-form-div'>
            <h2 > Tennis app</h2>
            <form action="" id='login-form'>
                <input type="text" name="" id="input-name"  className='login-form-input' value={user} placeholder='Nombre de usuario' onChange={handleUserNameChange}/>
                <input type="password" name="" id="input-pass" className='login-form-input' value={pass} placeholder='Contraseña' onChange={handlePassChange}disabled/>
                <button type="submit" id='login-btn' className='login-form-btn' disabled>Iniciar Sesion</button>
            </form>
        </div>
  )
}

export default LoginForm