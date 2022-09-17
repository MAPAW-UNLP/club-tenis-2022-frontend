import React from 'react'
import '../styles/reservas.css'
import NavBar from './NavBar'

const Reservas = () => {
  return (
    <div id='reservas-component'>
        <NavBar title={'Reservas'}/>
        <div>
            <h2>Nueva reserva</h2>
            <form action="">
                <select name="" id="">
                    <option value="">Nada</option>
                    <option value="alquiler">Alquiler</option>    
                </select>  

        
                <input type="date" name="" id="" placeholder="Fecha"/>
                <input type="time" name="" id="" placeholder='Hora inicio'/>
                <input type="time" name="" id="" placeholder='Hora fin'/>
                       
            </form>
        </div>
    </div>
  )
}

export default Reservas