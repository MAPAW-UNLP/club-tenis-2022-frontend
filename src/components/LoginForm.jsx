import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

   


    const handleUserNameChange = (e) =>{
        setUser(e.target.value);
        const passInput = document.getElementById('input-pass');
        if(e.target.value === ""){
            passInput.disabled = true ;
            setPass("");
            const loginBtn = document.getElementById('login-btn');
            e.target.value === "" ? loginBtn.disabled = true: loginBtn.disabled = false;
            const link= document.getElementById('linkLogin');
            link.className = 'disabledLink';
            
        }
        else passInput.disabled = false;  
    }

    const handlePassChange = (e) =>{
        setPass(e.target.value);
        const loginBtn = document.getElementById('login-btn');
        e.target.value === "" ? loginBtn.disabled = true: loginBtn.disabled = false;

        const link= document.getElementById('linkLogin');
        link.className = 'linkLogin-active';

    }

    const habldeSubmit = (e) =>{
        e.preventDefault();
        navigate('../inicio')
        /* Aca en el onClick del submit hacer el post a la API para chequear que sea el admin. Sino devolver un msje de error*/
        
    }


    return (
        <div id='login-form-div'>
            <h2 > Tennis app</h2>
            <form action="" id='login-form' onSubmit={habldeSubmit}>
                <input type="text" name="" id="input-name"  className='login-form-input' value={user} placeholder='Nombre de usuario' onChange={handleUserNameChange}/>
                <input type="password" name="" id="input-pass" className='login-form-input' value={pass} placeholder='Contraseña' onChange={handlePassChange}disabled/>
                {/* <button type="submit" id='login-btn' className='login-form-btn' disabled onClick={habldeSubmit}><Link to="/inicio" id='linkLogin' className='disabledLink'> Iniciar Sesion </Link></button>
                 */}
                 <button type="submit" id='login-btn' className='login-form-btn' disabled >Iniciar Sesion </button>
            </form>
        </div>
  )
}

export default LoginForm