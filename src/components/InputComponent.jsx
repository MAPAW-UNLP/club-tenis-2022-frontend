import React from 'react'

const InputComponent = ({type, id, className, placeholder, onChangeFuncion, deshabilitado}) => {
  return (
    <input type={type} name="" id={id} className={className}  placeholder={placeholder}  onChange={onChangeFuncion}  disabled={deshabilitado}/>
  )
}

export default InputComponent