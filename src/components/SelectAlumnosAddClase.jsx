import React from 'react'
import SelectComponent from './SelectComponent'

const SelectAlumnosAddClase = ({alumnos, setAlumnos}) => {
  return (
    <div id='selectorAlumnosDetallesClase'>
        <select name="" className='inputReserva' id="" onChange={setAlumnos} >
            <option value="">Alumno</option>
            {alumnos.map((el) => <option value={el.id} key={el.id}>{el.nombre}</option>)}
        </select>
    </div>
  )
}

export default SelectAlumnosAddClase