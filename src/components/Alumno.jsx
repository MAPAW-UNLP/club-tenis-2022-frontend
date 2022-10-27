import React from 'react'

const Alumnos = ({info}) => {
  return (
    <div className='alumno-info'> 
      <p>{info.nombre}</p>
      <p>{info.telefono}</p>
    </div>
  )
}

export default Alumnos