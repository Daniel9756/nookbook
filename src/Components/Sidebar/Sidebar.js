import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Sidebar.css'
import { Link } from "react-router-dom";


const Sidebar = (props) => {

  const [sidebarClass, setSidebarClass] = useState(props.sidebar)

  const closeHandler = (e) => {
    e.preventDefault()
    setSidebarClass("sidebar close")
  }
    return(
        <div className={sidebarClass}>
            
            <button id="close" className="btn btn-info" onClick={closeHandler}>&times; close</button>
            <div>
             <ul className="sidebar-item">
             <li class="nav-item">
                <Link class="nav-link" to="/">
                  <FontAwesomeIcon icon="home" /> HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Resume">
                  <FontAwesomeIcon icon="folder" /> RESUME
               </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/MyWork">
                  <FontAwesomeIcon icon="file-code" /> MY WORK
                  </Link>
              </li>
              <li className="nav-item">
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