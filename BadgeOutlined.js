import React from 'react'

function BadgeOutlined(props) {
  const backgroundColor = "#" + (process.env?.REACT_APP_APP_BG_COLOR ?? "0d6efd");
  const color = "#" + (process.env?.REACT_APP_APP_TEXT_COLOR ?? "212529");
  const fontWeight = 600;
  return (
    <div style={{borderColor:backgroundColor, borderWidth:'0.2rem', borderStyle:'solid'}} className='d-inline-block rounded p-2' {...props}>{props?.children}</div>
  )
}

export default BadgeOutlined