import React from 'react'

function Button(props) {
  return (
    <button className='Button btn btn-primary' {...props}>{props?.label}</button>
  )
}

export default Button