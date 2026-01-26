import React from 'react'

function Section({children}) {
  const backgroundColor = "#" + (process.env?.REACT_APP_APP_BG_COLOR ?? "0d6efd");
  const color2 = "#535353";
  const color = "#" + (process.env?.REACT_APP_APP_TEXT_COLOR ?? "212529");
  return (
      <div className='Section rounded m-3 mb-4 p-3 shadow-sm' 
        style={{
          borderLeft:color2 +' solid 1px', 
          borderRight:color2 +' solid 1px', 
          borderBottom:color2 +'  solid 1px', 
          borderTop:(backgroundColor + ' solid 0.35rem')
        }}>{children}</div>
  )
}

export default Section