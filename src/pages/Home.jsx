import React from 'react'

//components
import NavBar from './NavBar'
import HomeCard from '../components/HomeCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableTennis, faUser, faCalendar,faUserTie } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  
  return (
    <>
      <NavBar title={'Inicio'} />
      <div id='home-content'>
        <HomeCard title={'Canchas'} descr={'Manejo de las cannchas del sistema'} Logo={<FontAwesomeIcon icon={faTableTennis}/>} color={'#F1F864'} link="../canchas"></HomeCard>
        <HomeCard title={'Alumnos'} descr={'Gestion de alumnos'} Logo={<FontAwesomeIcon icon={faUser}/>} color={'#ADD8E6'} link="../alumnos"></HomeCard>
        <HomeCard title={'Reservas'} descr={'Reservación de alquiléres y clases'} Logo={<FontAwesomeIcon icon={faCalendar}/>} color={'#FFA500'} link="../reservas"></HomeCard>
        <HomeCard title={'Profesores'} descr={'Gestión de profesores'} Logo={<FontAwesomeIcon icon={faUserTie}/>} color={'#BCEB3C'} link="../alumnos"></HomeCard>
      </div>
    </>
  )
}

export default Home