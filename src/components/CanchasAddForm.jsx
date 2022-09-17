import React from 'react'
import { useState } from 'react'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const CanchasAddForm = ({actived, setActived, setCanchas}) => {

  

  const [nombreCancha, setNombreCancha] = useState("");
  const [option, setOption] = useState("");


  const handleCanchaNameChange = (e) =>{
    setNombreCancha(e.target.value);
    const selectTipo = document.getElementById('cancha-add-form-select');
    e.target.value === "" ? selectTipo.disabled = true: selectTipo.disabled = false;  
  }

  const handleSelect = (e) =>{
    setOption(e.target.value);
    const addBtn = document.getElementById('cancha-add-form-addBtn');
    e.target.value === "" ? addBtn.disabled = true: addBtn.disabled = false;
  }

  const handleClickaddCourt = (e) =>{
    e.preventDefault(); 
    const nuevaCancha = {id:Math.random(99999) , nombre: nombreCancha, tipo: option}
    console.log(nuevaCancha)
    setCanchas((canchas) => [...canchas, nuevaCancha]);
    setOption("");
    setNombreCancha("");
    setActived((actived) => false );
  }

  /* Faltaria que el submit agregue la nueva cancha al sistema con un post (ahora provisorio) y que chequee que no exista otra chequear bien el formulario */
  return (
    <>
      {actived &&
        <div id='cancha-add-component'>
          <h2>Nueva cancha</h2>
          <form action="" id='cancha-add-form' onSubmit={handleClickaddCourt}>
            <input type="text" name="" id="" placeholder='Nombre' className='cancha-add-form-input' onChange={handleCanchaNameChange} value={nombreCancha}/>
            <select name="" id='cancha-add-form-select' disabled onChange={handleSelect} value={option} >
              
              <option value="" >Nada</option>
              <option value="roja" >Tierra batida</option>
              <option value="verde">Hierba</option>
              <option value="azul">Asfalto</option>
            </select>
            <button id='cancha-add-form-addBtn' type='sumbit' disabled ><FontAwesomeIcon id='canchas-add-form-btn' icon={faPlusCircle}/></button>
          </form>
        </div>
      }
    </>

    
  )
}

export default CanchasAddForm