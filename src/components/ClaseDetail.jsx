import React from 'react'

import '../styles/claseDetail.css'

const ClaseDetail = ({reserva, setReservaDetail}) => {
    
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
    {reserva.canchaNombre !== undefined} ?
    <div id='clase-detail-component'>
        <button id='clase-closeBTN' onClick={() => setReservaDetail({})}>x</button>
        <h2>Detalles</h2>
        <h4 id='clase-detail-fecha'>{formateoFecha(reserva.fecha)}</h4>
        <div>
            <h3>General</h3>
            <p className='alquiler-detail-nombre'>{reserva.canchaNombre}</p>
            <p className='alquiler-detail-numeros'>{reserva.horaIni} - {reserva.horaFin}</p>
        </div>

        <div>
            <h3>Profesor</h3>
            <p className='alquiler-detail-nomnbre'>{reserva.profesor}</p>
            <button>Editar</button>
        </div>

        <div>
            <h3>Alumnos</h3>
            <div>alumnos list</div>
        </div>
        <div>
            <button>Guardar</button>
            <button>Cancelar</button>
        </div>
    </div>
    </>
    
  )
}

export default ClaseDetail