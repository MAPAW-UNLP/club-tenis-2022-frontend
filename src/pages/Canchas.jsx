import React, { useState } from 'react'
import NavBar from './NavBar'
import '../styles/canchas.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

//Components
import CanchasAddForm from '../components/CanchasAddForm'
import CanchasList from '../components/CanchasList'
import LoaderSpinner from '../components/LoaderSpinner'

const Canchas = ({canchas, setCanchas}) => {

  //>Ahora provisorio. Despues llamar a la api y cargar
  
  const [actived, setActived] = useState(false);
  const [activedLoader, setActivedLoader] = useState(false);

  const handleactivateForm = () =>{
    setActived((actived) => true);
  }

  
  
  return (
    <div id='canchas-component'>
      <NavBar title={'Canchas'} />

      <div id='canchas-info'>
        <button id='canchas-add-btn' onClick={handleactivateForm}> <FontAwesomeIcon icon={faPlusCircle}/></button>
        <CanchasAddForm actived={actived}   setActived={setActived} setCanchas={setCanchas} canchas={canchas} setActivedLoader={setActivedLoader}/>
        <CanchasList canchas={canchas}/>
      </div>
      <LoaderSpinner active={activedLoader} containerClass={'canchasLoader'} loaderClass={'canchasLoaderSpinner'} />
    </div>
  )
}

export default Canchas