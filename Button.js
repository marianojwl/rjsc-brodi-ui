import React from 'react'

function Button(props) {
  const backgroundColor = "#" + (process.env?.REACT_APP_APP_BG_COLOR ?? "0d6efd");
  const color = "#" + (process.env?.REACT_APP_APP_TEXT_COLOR ?? "212529");
  return (
    props?.href
    ? <a className='Button btn' {...props} style={{color, backgroundColor, ...props?.style}}>{props?.label}</a>
    : <button className='Button btn' {...props} style={{color, backgroundColor, ...props?.style}}>{props?.label}</button>
  )
}

export default Button