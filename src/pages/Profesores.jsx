import React, {useState, useEffect} from 'react'

//font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
//components
import NavBar from './NavBar'
import AgregarProfesor from '../components/AgregarProfesor'
import ProfesoresList from '../components/ProfesoresList'
//profesorese provisorio
import ProfesoresDoc from '../DevelopmentData/Profesores'
//styles
import '../styles/profesores.css'
const Profesores = () => {

    const [profesores, setProfesores] = useState([]);
    const [actProfesores, setActProfesores] = useState(false);
    const [active, setActive] = useState(false);
    const URL_BASE = `http://localhost/api/`;

    useEffect(() =>{
        const requestOptions={
          method: 'GET'
          } ;
       fetch(`${URL_BASE}profesores`, requestOptions)
          .then(response => response.json())
          .then(data =>  setProfesores(data))
      
          /* Desactivar spinner */
        }, [actProfesores]);

    return (
        <div id='profesores-component'>
            <NavBar title={'Profesores'}></NavBar>
            <div id='profesores-component-mainContent'>
                <button id='canchas-add-btn' onClick={() => {setActive((active)=> true)}}> <FontAwesomeIcon icon={faPlusCircle}/> </button>
                <AgregarProfesor active={active} setActive={setActive} setProfesores={setProfesores} profesores={profesores} setActProfesores={setActProfesores} />
                {profesores.length === 0 ?  
                <div>...cargando</div>   
                :
                <ProfesoresList profesores={profesores} />
            }
            </div>
        </div>
  )
}

export default Profesores