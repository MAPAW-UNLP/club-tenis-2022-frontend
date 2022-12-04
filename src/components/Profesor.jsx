import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

const Profesor = ({info, setActProfe}) => {

  return (
    <div className='profesor-info'>
        <p>{info.nombre}</p>
        <p>{info.telefono}</p>
        <button id='edit-profesor-btn' onClick={()=>setActProfe({id:info.id, nombre:info.nombre})}><FontAwesomeIcon icon={faFileInvoiceDollar}></FontAwesomeIcon></button>
    </div>
  )
}

export default Profesor