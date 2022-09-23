import React from 'react'
//react tools
import {Link} from 'react-router-dom'
import { useEffect } from 'react';


/* Components */
import Home from './Home';
import Canchas from './Canchas';
import Reservas from './Reservas';
import Login from './Login';

import '../styles/navbar.css'


const NavBar = ({title}) => {

    
    
    
    const linkSetActive = (e) =>{
           console.log() 
    }
  return (
      
      <div id='navBar-component'>
          <div id='navBar-transparent'></div>
          <nav id='navBar'>
              <ul id='navBar-list' onClick={linkSetActive} >
                  <li> <Link to="/inicio"  className='link' onClick={linkSetActive}>Inicio </Link> </li>
                  <li> <Link to="/canchas" className='link' onClick={linkSetActive}> Canchas </Link> </li>
                  <li> <Link to="/reservas" className='link' onClick={linkSetActive}> Reservas </Link></li>
                  <li> <Link to="/" className='linkCerrarSesion'>Cerrar Sesión </Link></li>
              </ul>
          </nav>
          <h1>{title}</h1>        
      </div>
  )
}

export default NavBar