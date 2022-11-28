import React from 'react'
import InputComponent from './InputComponent'
import Pago from './Pago'
//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const PagosList = ({pagos}) => {
  return (
    <div id='pagos-list-component'>
      <div id='pagos-list-options'>
        <p>Fecha</p>
        <p>Tipo de reserva</p>
        <p>Clases Pagadas</p>
      </div>
      <div id='pagos-list'>
        {pagos.map((pago, index) => <Pago key={index} info={pago} />)}
      </div>
    </div>
  )
}

export default PagosList