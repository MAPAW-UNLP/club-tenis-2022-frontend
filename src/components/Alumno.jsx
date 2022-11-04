import React from 'react'

const Alumnos = ({info}) => {

  const mostrarNacimientoApropiadamente = () =>{
    if(info.fechanac !== ''){
      const date = (info.fechanac).split('-');
      return `${date[2]}/${date[1]}/${date[0]}`
    }
    else{
      return " - "
    }
    
    

  }
  return (

    
    <>
      <div className='alumno-info'> 
        <p>{info.nombre}</p>
        <p>{info.telefono}</p>
        <p>{mostrarNacimientoApropiadamente()}</p>
      </div>
    </>
  )
}

export default Alumnos