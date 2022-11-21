import React from 'react'

//font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

//components
import NavBar from './NavBar'
import AgregarPago from '../components/AgregarPago'
import PagosList from '../components/PagosList'
//styles

import '../styles/pagos.css'
const Pagos = ({setSesion, pagos}) => {
  return (
    <div id='pagos-Component'>
        <NavBar title={'Pagos'} setSesion={setSesion}></NavBar>

        <div id='pagos-component-mainContent'>
            <button id='canchas-add-btn' >  <FontAwesomeIcon icon={faPlusCircle}/></button>
            <AgregarPago />
            { pagos.length === 0 ?
                <div> cargando componente</div>
            :
             <PagosList pagos={pagos} />
            }
        </div>

    </div>
  )
}

export default Pagos