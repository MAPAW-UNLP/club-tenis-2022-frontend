import React from 'react'

import '../styles/alquilerDetail.css'

const AlquilerDetails = ({reserva, setReservaDetail}) => {
  
  const dias = [
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
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
      <h2 >Detalles</h2>
      <h4 id='alquiler-detail-fecha'>{formateoFecha(reserva.fecha)}</h4>
      <div className='alquiler-detail-div' id='alquiler-detail1div'>
        <h3>General</h3>
        
        <p className='alquiler-detail-nombre'>{reserva.canchaNombre}</p>
        <p className='alquiler-detail-numeros'>{reserva.horaIni} - {reserva.horaFin}</p>
      </div>

      <div className='alquiler-detail-div' id='alquiler-detail2div'>
        <h3>Cliente info</h3>
        <p className='alquiler-detail-nombre'>nombre: {reserva.titular.nombre}</p>
        <p className='alquiler-detail-numeros'> telefono: {reserva.titular.telefono}</p>
      </div>
    </div>
    :
    <div></div>
    }
    </>
  )
}

export default AlquilerDetails