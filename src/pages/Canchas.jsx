import React, { useState } from 'react'
import NavBar from './NavBar'
import '../styles/canchas.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

//Components
import CanchasAddForm from '../components/CanchasAddForm'
import CanchasList from '../components/CanchasList'

const Canchas = ({canchas, setCanchas}) => {

  //>Ahora provisorio. Despues llamar a la api y cargar
  
  const [actived, setActived] = useState(false);

  const handleactivateForm = () =>{
    setActived((actived) => true);
  }

  
  return (
    <div id='canchas-component'>
      <NavBar title={'Canchas'} />


      <div id='canchas-info'>
        <button id='canchas-add-btn' onClick={handleactivateForm}> <FontAwesomeIcon icon={faPlusCircle}/></button>
        <CanchasAddForm actived={actived}   setActived={setActived} setCanchas={setCanchas} canchas={canchas}/>
        <CanchasList canchas={canchas}/>
      </div>
    </div>
  )
}

export default Canchas