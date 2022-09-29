import React from 'react'
import { useState } from 'react'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
//Components
import FeedbackText from './FeedbackText'

const CanchasAddForm = ({actived, setActived, setCanchas, canchas}) => {

  

  const [nombreCancha, setNombreCancha] = useState("");
  const [option, setOption] = useState("");

  //para el feedback
  const [feedBack, setFeedBack] = useState({'text': '', 'color': ''});


  const handleCanchaNameChange = (e) =>{
    setNombreCancha(e.target.value);
    if (canchas.map((each) => each.nombre.toUpperCase()).indexOf(e.target.value.toUpperCase()) === -1){
      //pregunta se no existe una cancha con el mismo nombre
      const selectTipo = document.getElementById('cancha-add-form-select');
      if (e.target.value === ""){
        setFeedBack({...feedBack, 'text': '','color': ''})
        selectTipo.disabled = true; 
      }
      else{
        setFeedBack({...feedBack, 'text': 'El nombre de la cancha es correcto','color': '#7CBD1E'})        
        selectTipo.disabled = false;
      }
    }
    else{
      //avisar mediante feedback que no puede haber una cancha repetida
      setFeedBack({...feedBack, 'text': 'El nombre de la cancha es igual a una existente','color': '#CC3636'})
      const selectTipo = document.getElementById('cancha-add-form-select');
      setOption("");
      selectTipo.disabled = true;
      const addBtn = document.getElementById('cancha-add-form-addBtn');
      addBtn.disabled = true;
    } 
  }

  const handleSelect = (e) =>{
    setOption(e.target.value);
    const addBtn = document.getElementById('cancha-add-form-addBtn');
    e.target.value === "" ? addBtn.disabled = true: addBtn.disabled = false;
  }

  const handleClickaddCourt = (e) =>{
    //Aca meter un feedback de que la cancha se agrego correctamente
    e.preventDefault(); 
    const nuevaCancha = {id:Math.random(99999) , nombre: nombreCancha, tipo: option}
    console.log(nuevaCancha)
    setCanchas((canchas) => [...canchas, nuevaCancha]);
    setOption("");
    setNombreCancha("");
    setFeedBack({...feedBack, 'text': '','color': ''})
    setActived((actived) => false );
    
    
  }

  const handleCloseForm = () =>{
    setOption("");
    setNombreCancha("");
    setActived(false);
    setFeedBack({...feedBack, 'text': '','color': ''})
    
  }

  /* Faltaria que el submit agregue la nueva cancha al sistema con un post (ahora provisorio) y que chequee que no exista otra chequear bien el formulario */
  return (
    <>
      {actived &&
        <div id='cancha-add-component'>
          <div id='close-cancha-add-form' onClick={ handleCloseForm}>x</div>
          <h2>Nueva cancha</h2>     
          <form action="" id='cancha-add-form' onSubmit={handleClickaddCourt}>
            <input type="text" name="" id="" placeholder='Nombre' className='cancha-add-form-input' onChange={handleCanchaNameChange} value={nombreCancha}/>
            <select name="" id='cancha-add-form-select' disabled onChange={handleSelect} value={option} >
              
              <option value="" >Nada</option>
              <option value="roja" >Tierra batida</option>
              <option value="verde">Hierba</option>
              <option value="azul">Asfalto</option>
            </select>

            <FeedbackText text={feedBack.text} color={feedBack.color}/>

            <button id='cancha-add-form-addBtn' type='sumbit' disabled ><FontAwesomeIcon id='canchas-add-form-btn' icon={faPlusCircle}/></button>
          </form>
        </div>
      }
    </>

    
  )
}

export default CanchasAddForm