import React from "react";
import "./MyWork.css";

function MyWork() {
  return (
    <div className="body">
      <div className="row">
        <div className="card-deck">
          <div className="card">
            <img
              src="images/plat-1.PNG"
              className="card-img-top"
              alt="Social platform app"
            />
            <div className="card-body">
              <h5 className="card-title text-center">DESCRIPTION</h5>
              <p className="card-text">
                A social network platform for employees of an organisation. The
                aim is to facilitate interraction between colleagues and enhance
                workflow.
              </p>
              <h5 className="card-title text-center">Technology</h5>
              <p className="card-text tech">
                react, html, css, bootstrap, formik, yup, fontawesome,
                react-router, axios.
              </p>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">Social Platform </small>{" "}
              <a href="https://github.com/Daniel9756/platform" className="github">
                Source code
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="images/book.PNG"
              className="card-img-top"
              alt="book app UI"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Description</h5>
              <p className="card-text">
                A book rating application . The goal of this application is to
                help student rate their books in accordance to their course
                work.
              </p>
              <h5 className="card-title text-center">technology</h5>
              <p className="card-text tech">
                javaScript, react, react-bootstrap, html, css, axios
              </p>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted ">Book rater </small>{" "}
              <a href="https://github.com/Daniel9756/civillib-app" className="github">
                Source code
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="images/todo-1.PNG"
              className="card-img-top"
              alt="calculator"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Description</h5>
              <p className="card-text">
                A device that allow you to make a list of tasks to perform on a
                specific day and also cancel it when it's being completed
              </p>
              <h5 className="card-title text-center">Technology</h5>
              <p className="card-text tech">javaScript, html, css, bootstrap, fontawesome, localStorage</p>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">calculator</small>{" "}
              <a href="https://github.com/Daniel9756/toDo-App" className="github">
                Source code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card-deck">
          <div className="card">
            <img
              src="images/node-0.PNG"
              className="card-img-top"
              alt="Social platform app"
            />
            <div className="card-body">
              <h5 className="card-title text-center">DeSCRIPTION</h5>
              <p className="card-text">
                A server-side application that adds utility to client-side logic
                of a social platform app and also directly interract with the
                database to pull, save and change data.
              </p>
              <h5 className="card-title text-center">technology</h5>
              <p className="card-text tech">
                Node.js, Express, postgresql, cloudinery.
              </p>
            </div>
            <div className="card-footer  text-center">
              <small className="text-muted">Node.js</small>{" "}
              <a href="https://github.com/Daniel9756/apiproject" className="github">
                Source code
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="images/calc-3.PNG"
              className="card-img-top"
              alt="Arithmetic calculator"
            />
            <div className="card-body">
              <h5 className="card-title text-center">DEscription</h5>
              <p className="card-text">
                A device that perform arithemetic operations on numbers. It can
                do addition, division, multiplication and subtraction.
              </p>
              <h5 className="card-title text-center">technology</h5>
              <p className="card-text tech">javaScript, html, css.</p>
            </div>
            <div className="card-footer  text-center">
              <small className="text-muted">Quote machine</small>{" "}
              <a href="https://github.com/Daniel9756/Calculator" className="github">
                Source code
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="images/digitalClock-1.PNG"
              className="card-img-top"
              alt="digital clock"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Description</h5>
              <p className="card-text">
                A digital clock. The objective here is to code a digital clock
                which will dispay time in hours, minutes and seconds as well as
                being able to split day into AM and PM.
              </p>
              <h5 className="card-title text-center">technology</h5>
              <p className="card-text tech">
                javaScript, html, css, google font.
              </p>
            </div>
            <div className="card-footer  text-center">
              <small className="text-muted">digital clock</small>{" "}
              <a href="https://github.com/Daniel9756/digital-Clock" className="github">
                Source code
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center">Thanks for Visiting</footer>
    </div>
  );
}

export default MyWork;
