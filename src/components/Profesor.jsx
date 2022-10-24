import React from 'react'

const Profesor = ({info}) => {
  return (
    <div className='profesor-info'>
        <p>{info.nombre}</p>
        <p>{info.telefono}</p>
    </div>
  )
}

export default Profesor