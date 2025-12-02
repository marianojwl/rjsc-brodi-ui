import React from 'react'

function Button(props) {
  return (
    props?.href
    ? <a className='Button btn btn-primary' {...props}>{props?.label}</a>
    : <button className='Button btn btn-primary' {...props}>{props?.label}</button>
  )
}

export default Button