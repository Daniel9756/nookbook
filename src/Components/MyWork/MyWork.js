import React from "react";
import "./MyWork.css";

function MyWork() {
  return (
    <div className="body">
      <div className="row">
        <div className="card-deck">
        <div className="card">
            <img
              src="images/cms.PNG"
              className="card-img-top"
              alt="Social platform app"
            />
            <div className="card-body">
              <h5 className="card-title text-center">DESCRIPTION</h5>
              <p className="card-text ">
                A customer management system(cms) application used by companies to manage their staff, product and customer data.
              </p>
              <h5 className="card-title text-center">technology</h5>
              <p className="card-text tech text-capitalize">
               React, TypeScript, TypegraphQL, Node.js, Typeorm, base-Web.
              </p>
            </div>
            <div className="card-footer  text-center">
              <small className="text-muted">C.M.S</small>{" "}
              <a href="https://github.com/chitezh/pro" className="github">
                Source code
              </a>
            </div>
          </div>
          
          <div className="card">
            <img
              src="images/sim.PNG"
              className="card-img-top"
              alt="sim website"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Description</h5>
              <p className="card-text text-capitalize">
               A real Esate based application which makes it easy for property owners to rent their property. 
              </p>
              <h5 className="card-title text-center">technology</h5>
              <p className="card-text tech text-capitalize">
                javaScript, react-hooks, Material-UI, GraphQL, Node.js, TypeScript
              </p>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted ">RealEstate Website </small>{" "}
              <a href="https://simplifyy.com/" className="github">
                Open Website
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="images/ncl.PNG"
              className="card-img-top"
              alt="ncl website"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Description</h5>
              <p className="card-text ">
               A realEsate company based in asia which specilize in building and selling realestate properties
              </p>
              <h5 className="card-title text-center">Technology</h5>
              <p className="card-text tech text-capitalize">javaScript, html, css, bootstrap, fontawesome</p>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">RealEstate Website</small>{" "}
              <a href="https://nclhomes.in/" className="github">
              Open Website
              </a>
            </div>
          </div>
        </div>
      </div>
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
              <p className="card-text tech text-capitalize">
                react, html, css, bootstrap, formik, yup, fontawesome,
                react-router, axios.
              </p>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">Social Platform </small>{" "}
              <a href="https://github.com/Daniel9756/platform.git" className="github">
                Source code
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="images/node-0.PNG"
              className="card-img-top"
              alt="Social platform app"
            />
            <div className="card-body">
              <h5 className="card-title text-center">DeSCRIPTION</h5>
              <p className="card-text ">
                A server-side application that adds utility to client-side logic
                of a social platform app and also directly interract with the
                database to pull, save and change data.
              </p>
              <h5 className="card-title text-center">technology</h5>
              <p className="card-text  text-capitalize">
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
                A casual video streaming application used for video communication.
              </p>
              <h5 className="card-title text-center">technology</h5>
              <p className="card-text text-capitalize">Next.js, GraphQl, Opentok-react, </p>
            </div>
            <div className="card-footer  text-center">
              <small className="text-muted">Video Streaming</small>{" "}
              <a href="https://github.com/Daniel9756/Video-Stream" className="github">
                Source code
              </a>
            </div>
          </div>
        
        </div>
      </div>
      <footer className="m-0 text-center">Thanks for Visiting</footer>
    </div>
  );
}

export default MyWork;
