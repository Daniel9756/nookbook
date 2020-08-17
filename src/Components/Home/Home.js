import React, { Component } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Jumbotron, Container, Button,  } from 'react-bootstrap';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        
        <div className="Profile">
          <div className="jumbotron">
            <div className="row">
              <div className="col-sm-6">
                <img
                  src="images/myself-1.jpg"
                  class="img-fluid"
                  alt="Responsive header me"
                  width="400"
                  height="500"
                />
              </div>
              <div className="col-sm-6">
                <h1 class="display-4">Cornelius Eze</h1>
                <p>
                  A software developer who is knowledgeable in HTML, CSS,
                  Bootstrap, JavaScript, React, Jquery, Node.js/Express, Python, Django, PHP, Laravel, Webpack,
                  PostgreSQL, MongoDB, MySQl etc. A true team player as well as
                  independent personnel offering 3 years of experience in the
                  software industry. Committed to meeting project milestones in
                  a timely fashion. Desires an opportunity to develop all kinds
                  of applications for a winning enterprise.{" "}
                </p>
                <a class="btn btn-primary btn-lg" href="/Resume" role="button">
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="framework">
          <h5 className="text-center my-4">LANGUAGES AND FRAMEWORKS</h5>
          <div className="row  my-5 framework">
            <div className="col-sm-4">
              <h5>FRONT END</h5>
              <span>
                <p> JavaScript</p> <FontAwesomeIcon icon={["fab", "js"]} />
              </span>
              <span className="col-sm-2">
                <p> React</p> <FontAwesomeIcon icon={["fab", "react"]} />
              </span>
              <span className="col-sm-2">
                <p> Jquery</p> <FontAwesomeIcon icon={["fab", "jquery"]} />
              </span>
              <span className="col-sm-2">
                <p>Bootstrap</p> <FontAwesomeIcon icon={["fab", "bootstrap"]} />
              </span>
            </div>
            <div className="col-sm-4">
              <h5>BACK END</h5>
              <span className="col-sm-2">
                <p>Node/Express </p>
                <FontAwesomeIcon icon={["fab", "node"]} />
              </span>
              <span className="col-sm-2">
                <p>PHP </p>
                <FontAwesomeIcon icon={["fab", "PHP"]} />
              </span>
              <span className="col-sm-2">
                <p>Laravel </p>
                <FontAwesomeIcon icon={["fab", "laravel"]} />
              </span>
              <span className="col-sm-2">
                <p>Python</p> <FontAwesomeIcon icon={["fab", "python"]} />
              </span>
            </div>
            <div className="col-sm-4">
              <h5>DATABASES</h5>

              <span className="col-sm-2">
                <p>MongoDB</p> <FontAwesomeIcon icon={["fab", "mdb"]} />
              </span>
              <span className="col-sm-2">
                <p>PostgreSQL</p>
              </span>
              <span className="col-sm-2">
              <p>MySQl</p> <FontAwesomeIcon icon={["fab", "mysql"]} />

              </span>
            </div>
          </div>
        </div>
        <div className="images">
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
                  src="images/book.PNG"
                  class="img-fluid rounded my-5"
                  alt="civillib"
                />
                <h5 class="title">Book Rater</h5>
              </div>
            </div>
            <div class="col-sm-3 pics">
              <div className="text-center">
                <img
                  src="images/quote-2.PNG"
                  class="img-fluid rounded my-5"
                  alt="quote"
                />
                <h5 class="title">Quote app</h5>
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
          <div className="row my-5">
            <div class="col-sm-3 pics">
              <div className="text-center">
                <img
                  src="images/pix2.PNG"
                  class="img-fluid rounded my-5"
                  alt="animal"
                />
                <h5 class="title">Predators</h5>
              </div>
            </div>
            <div class="col-sm-3 pics">
              <div className="text-center">
                <img
                  src="images/pix1.PNG"
                  class="img-fluid rounded my-5"
                  alt="brother"
                />
                <h5 class="title">Family</h5>
              </div>
            </div>
            <div class="col-sm-3 pics">
              <div className="text-center">
                <img
                  src="images/digitalClock-1.PNG"
                  class="img-fluid rounded my-5"
                  alt="clock"
                />
                <h5 class="title">Digital Clock</h5>
              </div>
            </div>
            <div class="col-sm-3 pics">
              <div className="text-center">
                <img
                  src="images/calc-3.PNG"
                  class="img-fluid rounded my-5"
                  alt="calculator"
                />
                <h5 class="title">Calculator</h5>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center">copyright@Cornelius2020</footer>
      </div>
    );
  }
}

export default Home;
