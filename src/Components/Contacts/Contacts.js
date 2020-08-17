import React from "react";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contacts() {
  return (
    <div className="contact justify-content-center">
      <h3 className="text-center">My Contact</h3>

      <ul class="row contact-item">
       
        <li class="mr-2">
          <a href="https://www.linkedin.com/in/corneliuseze" class="">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />{" "}
          </a>
          <small>Linkedin</small>

        </li>
        <li class="">
          <a href="https://github.com/Daniel9756" class="">
            <FontAwesomeIcon icon={["fab", "github-square"]} />{" "}
          </a>
          <small>Github</small>

        </li>
        <li className="mr-2">
          <a href="mailto:ezecornelius90@yahoo.com? subject=text" class="">
            <FontAwesomeIcon icon={"envelope"} />{" "}
          </a>
          <small>E-mail</small>
        </li>
      </ul>
      
    </div>
  );
}

export default Contacts;
