import React from 'react'

function Button({label="Ok"}) {
  return (
    <button className='Button btn btn-primary'>{label}</button>
  )
}

export default Button