import React from 'react'
//react tools


/* Components */
import Home from './Home';
import Canchas from './Canchas';
import Login from './Login';

import '../styles/navbar.css'


const NavBar = ({title}) => {
  return (
      
      <div id='navBar-component'>
          <div id='navBar-transparent'></div>
          <nav id='navBar'>
              <ul id='navBar-list'>
                  <li>  Inicio   </li>
                  <li> Canchas  </li>
                  <li> Reservas</li>
                  <li> Cerrar Sesión</li>
              </ul>
          </nav>
          <h1>{title}</h1>        
      </div>
  )
}

export default NavBar