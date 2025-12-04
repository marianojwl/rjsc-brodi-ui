import React from 'react'


function DropDown({button_child=null, show_arrow_down=true, items=[], borderColor=null}) {
  // const appBackgroundColor = "#" + (process.env?.REACT_APP_APP_BG_COLOR ?? "0d6efd");
  // const appTextColor = "#" + (process.env?.REACT_APP_APP_TEXT_COLOR ?? "212529");
  return (
    <div className="dropdown">
      <a className={"btn px-1" + (show_arrow_down?" dropdown-toggle":"") } href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        { button_child
          ? button_child
          : 'Open'
        }
      </a>

      <ul className="dropdown-menu" style={{borderColor:'#cccccc ' + (borderColor??'#dbdbdb'), borderWidth: '0 0.35rem'}}>
        {
          items?.map((item, i)=> <li key={i}><a className="dropdown-item text-end" {...item}>{item?.label}</a></li>)
        }
      </ul>
    </div>
  )
}

export default DropDown