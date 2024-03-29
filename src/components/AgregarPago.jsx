import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
//Components
import moment from 'moment';
import InputComponent from './InputComponent';
import Select from 'react-select';

const AgregarPago = ({active, setActive, setPagos, pagos, setActPagos, alumnos}) => {
  
  const URL_BASE = `http://localhost:80/api/`;
  const [user_id, setUser_id] = useState('');
  const [tipoClase, setTipoClase] = useState('');
  const [cant, setCant] = useState('');

  const handleChangeUser_id = (e) =>{
    setUser_id(e.value)
  }


  const handleChangeClassType = (e) =>{
    setTipoClase(e.target.value);
  }

  const handleChangeCantidad = (e) =>{
    setCant(e.target.value);
  }

  const handleCloseForm = () =>{
    setActive(false);
  }


  const submitPagoForm = (e) =>{
    e.preventDefault();
    setActive(false);
    const requestOptions={
      method: 'POST',
      body: JSON.stringify({idPersona:user_id, fecha:moment().format("YYYY/MM/DD"), pagos: `${tipoClase}:${cant}` })
    };

    console.log(requestOptions.body);

    fetch(`${URL_BASE}pagos`, requestOptions)
      .then(response => response.json())
      .then(response => setActPagos(v => !v))
  }
  return (
    <>
      {active &&
        <div id='pago-add-component'>
          <button id='close-pago-add-form' onClick={ handleCloseForm}>x</button>
          <h2>Nuevo pago</h2>
          <form action="" id='pago-add-form' onSubmit={submitPagoForm}>
            <label className='pago-form-label'>Alumno</label>
            <Select className='inputReserva' onChange={handleChangeUser_id} options={alumnos.map((el)=> ({label:el.nombre, value:el.id}))} placeholder="Seleccionar"></Select>
            <label htmlFor="" className='pago-form-label'>Tipo</label>
            <select name="" onChange={handleChangeClassType} id="pago-form-select" placeholder='De reserva' className={'profesor-add-form-input'}>
              <option value="">Seleccionar tipo de clase</option>
              <option value="1">Clase individual</option>
              <option value="2">Clase grupal</option>
            </select>

            <label htmlFor="" className='pago-form-label'>Cantidad Clases</label>
            <input type="number" id='pago-form-input' min={1} pattern="\d*" max={20} onChange={handleChangeCantidad} className={'profesor-add-form-input'} />

            <button id='pago-add-form-addBtn'><FontAwesomeIcon id='pagos-add-form-btn' icon={faPlusCircle}/></button>
          </form>
        </div>
      }
    </>
  )
}

export default AgregarPago