import React from 'react'

import '../styles/alquilerDetail.css'

const AlquilerDetails = ({reserva, setReservaDetail}) => {
  
  const dias = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];
  

  const formateoFecha = (fecha)=>{
    const numeroDia = new Date(fecha).getDay();
    const nombreDia = dias[numeroDia];

    const destructFecha = fecha.split('-');
    return `${nombreDia} ${destructFecha[2]}/${destructFecha[1]}`
  }
  
  return (
    <>
    {reserva.canchaNombre !== undefined ?
    <div id='alquiler-detail-component'>
      <button id='close-detail-btn' onClick={()=> setReservaDetail({})} >x</button>
      <div id='alquiler-detail-general' class='clase-caja-alq'>
        <h2 >{reserva.canchaNombre}</h2>
        <p id='alquiler-detail-fecha'>{formateoFecha(reserva.fecha)}</p>
        <p>{reserva.horaIni} - {reserva.horaFin}</p>
      </div>

      <div id='alquiler-detail-detail' className='clase-caja-alq' >
        <h3>Cliente info</h3>
        <p className='alquiler-detail-nombre'>Cliente: {reserva.titular.nombre}</p>
        <p className='alquiler-detail-numeros'> Teléfono: {reserva.titular.telefono}</p>
      </div>
    </div>
    :
    <div></div>
    }
    </>
  )
}

export default AlquilerDetails