import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css'
import { Link } from "react-router-dom";


function Header(props) {

    return(
        <div>
<nav class="navbar navbar-expand-sm navbar-light bg-success">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            // data-target="#navbarNav"
            // aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={props.open}

          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  <FontAwesomeIcon icon="home" /> HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Resume">
                  <FontAwesomeIcon icon="folder" /> RESUME
               </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/MyWork">
                  <FontAwesomeIcon icon="file-code" /> MY WORK
                  </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/Contacts">
                  <FontAwesomeIcon icon="address-book" /> CONTACTS
                  </Link>
              </li>
            </ul>
          </div>
        </nav>        </div>
    )
    
}

export default Header