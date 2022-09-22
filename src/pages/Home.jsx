import React from 'react'
import NavBar from './NavBar'
import Reserva from '../components/Reserva'
import '../styles/home.css'



//reactTable
//documento de prueba



const Home = ({canchas, reservas}) => {
//pruba react table

const horas = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"]
  
  
  return (

    /* Hacer un useEffect que setee en un estado los proximos eventos de las canchas y hacer un map sobre estis */
    <div id="home-component">
        <NavBar title={"Tennis app"} />
        
        <div id='table-grid' style={{display:'grid', gridTemplateColumns: `repeat(${canchas.length+1}, 1fr)`, gridTemplateRows: `repeat(${horas.length+1}, 1fr)` }}>
          <div id='hora' style={{gridArea: "1/1/2/2"}}>Hora</div>
          {horas.map((el, i) => <div className='horas' style={{gridArea:`${i+2}/1/${i+3}/2`}}> {el} </div>)}  
          {canchas.map((el, i) => <div className='canchas' style={{gridArea: `1/${i+2} / 2/${i+3}`}} > {el.nombre} </div>)}
        
          {reservas.map((reserva) => <Reserva key={reserva.id} datos={reserva} canchas={canchas}/>)}
        </div>

    </div>
  )
}

export default Home