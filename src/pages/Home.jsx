import React from 'react'
import NavBar from './NavBar'
import '../styles/home.css'

const Home = () => {
  return (

    /* Hacer un useEffect que setee en un estado los proximos eventos de las canchas y hacer un map sobre estis */
    <div id="home-component">
        <NavBar title={"Tennis app"} />

        <h2>Proximos eventos</h2>



    </div>
  )
}

export default Home