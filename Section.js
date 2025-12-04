import React from 'react'

function Section({children}) {
  const backgroundColor = "#" + (process.env?.REACT_APP_APP_BG_COLOR ?? "0d6efd");
  const color = "#" + (process.env?.REACT_APP_APP_TEXT_COLOR ?? "212529");
  return (
      <div className='Section rounded m-3 p-3 shadow-sm' style={{borderTop:(backgroundColor + ' solid 0.35rem')}}>{children}</div>
  )
}

export default Section