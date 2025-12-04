import React from 'react'

function Button(props) {
  const backgroundColor = "#" + (process.env?.REACT_APP_APP_BG_COLOR ?? "0d6efd");
  const color = "#" + (process.env?.REACT_APP_APP_TEXT_COLOR ?? "212529");
  const fontWeight = 600;
  return (
    props?.href
    ? <a className='Button btn' {...props} style={{fontWeight, color, backgroundColor, ...props?.style}}>{props?.label??props?.children}</a>
    : <button className='Button btn' {...props} style={{fontWeight, color, backgroundColor, ...props?.style}}>{props?.label??props?.children}</button>
  )
}

export default Button