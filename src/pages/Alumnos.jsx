import React from 'react'

//font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
//components
import NavBar from './NavBar'
import AlumnosList from '../components/AlumnosList'
//Styles 
import '../styles/alumnos.css'

const Users = () => {
  return (
    <div id='alumnos-component'>
      <NavBar title={'Alumnos'}></NavBar> 
      <div id='alumnos-component-mainContent'>
        <button id='canchas-add-btn' > <FontAwesomeIcon icon={faPlusCircle}/></button>
        <AlumnosList/>
      </div>
    </div>
  )
}

export default Users