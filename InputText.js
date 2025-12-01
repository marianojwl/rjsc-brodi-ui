import React from 'react'

function InputText({label='', placeholder=''}) {
  return (
    <div className='InputText input-group'>
      { label === '' ? null : <label className='input-group-text'>{label}</label> }
      <input type='text' className='form-control' placeholder={placeholder} />
    </div>
  )
}

export default InputText