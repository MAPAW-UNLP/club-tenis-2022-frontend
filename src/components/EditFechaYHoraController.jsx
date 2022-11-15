import React, {useState} from 'react'
import DatePicker, {registerLocale} from 'react-datepicker'
import moment from 'moment';
import es from 'date-fns/locale/es'
import SelectHoraInicio from './SelectHoraInicio';
import SelectHoraFin from './SelectHoraFin';
const EditFechaYHoraController = ({reserva}) => {
    const horas = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"]

    const [startDate, setStartDate] = useState(moment(reserva.fecha, 'YYYY-MM-DD').toDate());


    return (
    <div id='edit-calendar-alquiler'>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
        locale="es"
      />

      <div id='selectorhora'>
        <select name="" id="">
            {horas.map((hora, i) =>{if(hora === reserva.horaIni){return  <option  selected key={hora}  value={hora}>{hora}</option> } else{ return <option key={hora}  value={hora}>{hora}</option>}})   }
        </select>

        <select name="" id="">
            {horas.map((hora, i) =>{if(hora === reserva.horaFin){return  <option  selected key={hora}  value={hora}>{hora}</option> } else{ return <option key={hora}  value={hora}>{hora}</option>}})   }
        </select>

      </div>
      </div>
    );
}

export default EditFechaYHoraController