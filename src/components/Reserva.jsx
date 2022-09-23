import React from 'react'

const Reserva = ({datos, canchas, today}) => {

    const horas = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"]
    const adivinarFila = (hora) =>{
        return horas.indexOf(hora)+1;
        
    }
    

    const adivinarColumna = (canchaName) =>{
        return (canchas.map((cancha) => cancha.nombre).indexOf(canchaName)+1);     
    }

    const setearColor = (tipoDeReserva) =>{
        if (tipoDeReserva === 'Alquiler') {
            return '#336699'
        }
        else {
            return '#339967'
        }
    }
  return (
    <>
        { (datos.dia === today)? 
    <div className='reservas' style={{gridArea: `${adivinarFila(datos.horaInicio)+1}/${adivinarColumna(datos.cancha)+1}/${adivinarFila(datos.horaFin)+2}/${adivinarColumna(datos.cancha)+1}`, backgroundColor: setearColor(datos.tipo)}}>
        <div id='reserva-info'>
            <h2 id='reserva-nombre'>{datos.nombre}</h2>
            {datos.tipo ==='Alquiler'? <h2 id='reserva-rol'>Cliente</h2> : <h2 id='reserva-rol'>Profesor</h2>}        
            <p id='reserva-horario'>{datos.horaInicio} - {datos.horaFin}</p>
        </div>
    </div>
        : ""}
    </>
  )
}

export default Reserva