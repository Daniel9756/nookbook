import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Sidebar.css'
import { Link } from "react-router-dom";


const Sidebar = (props) => {

  const [sidebarClass, ] = useState(props.sidebar)

  
    return(
        <div className={sidebarClass}>
            
           
            <div >
             <ul className="sidebar-item">
             <li class="nav-item" onClick={props.onClose}>
                <Link class="nav-link" to="/">
                  <FontAwesomeIcon icon="home"/> HOME
                </Link>
              </li>
              <li className="nav-item" onClick={props.onClose} >
                <Link className="nav-link" to="/Resume" >
                  <FontAwesomeIcon icon="folder" /> RESUME
               </Link>
              </li>
              <li className="nav-item" onClick={props.onClose}>
              <Link className="nav-link" to="/MyWork">
                  <FontAwesomeIcon icon="file-code" /> MY WORK
                  </Link>
              </li>
              <li className="nav-item" onClick={props.onClose}>
              <Link className="nav-link" to="/Contacts">
                  <FontAwesomeIcon icon="address-book" /> CONTACTS
                  </Link>
              </li>
            </ul>
            </div>
        </div>
    )
}

export default Sidebar