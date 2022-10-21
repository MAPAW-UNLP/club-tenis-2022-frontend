import React from 'react'

const Alumnos = ({info}) => {
  return (
    <div className='alumno-info'> 
      <p>{info.nombre}</p>
      <p>{info.telefono}</p>
      <p>{info.fechanac}</p>
      {/* <p>{info.saldo}</p> */}
    </div>
  )
}

export default Alumnos