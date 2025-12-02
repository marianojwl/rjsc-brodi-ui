import React from 'react'

function DropDown({button_child=null, show_arrow_down=true, items=[]}) {
  return (
    <div className="dropdown">
      <a className={"btn" + (show_arrow_down?" dropdown-toggle":"") } href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        { button_child
          ? button_child
          : 'Open'
        }
      </a>

      <ul className="dropdown-menu">
        {
          items?.map((item, i)=> <li key={i}><a className="dropdown-item text-end" {...item}>{item?.label}</a></li>)
        }
      </ul>
    </div>
  )
}

export default DropDown