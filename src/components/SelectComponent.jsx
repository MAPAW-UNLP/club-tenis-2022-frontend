import React from 'react'

const SelectComponent = ({className,id, onChange, options, deshabilitado}) => {
  return (
    <select name="" id={id} className={className} onChange={onChange} disabled={deshabilitado}>
        <option value=''> Nada </option>
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
    </select>
  )
}

export default SelectComponent