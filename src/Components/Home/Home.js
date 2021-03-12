import React, { Component } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiJquery,
  SiGraphql,
  SiTypescript,
  SiDjango,
  SiJavascript,
  SiReact,
  SiMaterialUi,
  SiStyledComponents,
  SiReactos,SiBasecamp,SiMysql,SiMongodb,SiFirebase,SiPostgresql
} from "react-icons/si";

// import { Jumbotron, Container, Button,  } from 'react-bootstrap';

class Home extends Component {
  state = {};
  render() {
    return (
      <>
      <div className="container">
        <div className="Profile">
          <div className="jumbotron">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="images/myself-1.jpg"
                  class="img-fluid"
                  alt="Responsive header me"
                  width="400"
                  height="500"
                />
              </div>
              <div className="col-md-6">
                <h3 class="text-center">Cornelius Eze</h3>
                <p>
                  I’m a full stack software developer with extensive knowledge
                  in the field. A software architect and a designer with an eye
                  on aesthetics. A true team player as well as independent
                  personnel offering 5 years of experience in the software
                  industry. Committed to meeting project milestones in a timely
                  fashion. Desires an opportunity to develop all kinds of
                  applications for a winning enterprise.
                </p>
                <a class="btn btn-primary btn-lg" href="/Resume" role="button">
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <h5 className="my-4">LANGUAGES AND FRAMEWORKS</h5>
          <div className="row  my-5 framework p-0">
            <div className="col-md-4">
              <h5>FULL-STACK</h5>
              <div className="d-flex align-items-center">
                <p className="m-2"> JavaScript</p> <SiJavascript />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-2"> React & React-Native</p> <SiReact />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-2"> Jquery</p> <SiJquery />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-2">Node.js</p> <FaNodeJs />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-2">GraphQl/Apollo</p> <SiGraphql />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-2">TypeScript</p> <SiTypescript />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-2">Django</p> <SiDjango />
              </div>
            </div>
            <div className="col-md-4">
              <h5>UI FRAMEWORK</h5>
              <div className="d-flex align-items-center">
                <p className="m-2"> Bootstrap</p> <FaBootstrap />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-2">Material-UI</p> <SiMaterialUi />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-2">Styled-Components</p> <SiStyledComponents />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-2">Base-Web</p> <SiBasecamp />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-2">React-Reveal</p> <SiReactos />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-2">React-Spring</p> <SiReactos />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-2">React-Storybook</p> <SiReactos />
              </div>
            </div>
            <div className="col-md-4">
              <h5>DATABASES</h5>
              <div className="d-flex align-items-center">
                <p className="m-2">MOngoDB</p> <SiMongodb />
              </div><div className="d-flex align-items-center">
                <p className="m-2">MySQL</p> <SiMysql />
              </div><div className="d-flex align-items-center">
                <p className="m-2">FireBase</p> <SiFirebase />
              </div><div className="d-flex align-items-center">
                <p className="m-2">postgresql</p> <SiPostgresql />
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row justify-content-between my-5">
            <div class="col-sm-3 pics">
              <div className="text-center">
                <img
                  src="images/plat-1.PNG"
                  class="img-fluid rounded my-5"
                  alt="Platform UI"
                />
                <h5 class="title">Social Platform</h5>
              </div>
            </div>
            <div class="col-sm-3 pics">
              <div className="text-center">
                <img
                  src="images/realEstate.PNG"
                  class="img-fluid rounded my-5"
                  alt="realEstate"
                />
                <h5 class="title">RealEstate Website</h5>
              </div>
            </div>
            <div class="col-sm-3 pics">
              <div className="text-center">
                <img
                  src="images/cms.PNG"
                  class="img-fluid rounded my-5"
                  alt="CMS"
                />
                <h5 class="title">CMS WEBSITE</h5>
              </div>
            </div>
            <div class="col-sm-3 pics">
              <div className="text-center">
                <img
                  src="images/todo-1.PNG"
                  class="img-fluid rounded my-5"
                  alt="todo"
                />
                <h5 class="title">Productivity App</h5>
              </div>
            </div>
          </div>
         
        </div>
          <footer className="col-sm-12 text-center justify-content-center align-items-center">copyright@Cornelius2020</footer>
      </div>
        
        </>
    );
  }
}

export default Home;
