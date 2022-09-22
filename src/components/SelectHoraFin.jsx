import React from 'react'

const SelectHoraFin = ({id, className, setHoraFin, horaInicio}) => {

    const horas = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"]

    const posInicial = () =>{
        if(horaInicio !== ""){
            return horas.indexOf(horaInicio);
        }
    }

    const handleChangeHoraFin = (e) =>{
      setHoraFin(e.target.value)
    }
    return (
    <>
      <select name="" className={className} id={id} onChange={handleChangeHoraFin} >
        {horas.map((el,i) => {if(i < posInicial()+1) {return ""} else return <option>{el}</option>})}
      </select>
    </>
  )
}

export default SelectHoraFin