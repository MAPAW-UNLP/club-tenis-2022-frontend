import React from 'react'

const Pago = ({info}) => {

    const returnTipoClase = (tipoClase) =>{
        if(tipoClase== 0){

            return 'Alquiler'
        }
        else if(tipoClase == 1){

            return 'Clase Indv.'
        }
        return 'Clase Grupal'
    }

  return (
    

    <div className='pago-info'>
        <p>{info.fecha}</p>
        <p>{returnTipoClase(info.idTipoClase)}</p>
        <p>{info.cantidad}</p>
    </div>
  )
}

export default Pago