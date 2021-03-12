import React, { Component } from "react";
import "./Resume.css";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <section className="text-center">
          <header className="heading">
            <h1 className="title">CORNELIUS EZE</h1>
            <h6> Lekki Lagos, Nigeria.</h6>
            <address>
              {" "}
              <a href="tel:+2347031019512">+234 703 101 9512</a>
            </address>
          </header>
        </section>
        <h4 className="text-center title">WORK EXPERIENCE</h4>
        <section>
          <article>
            <header className="text-center">
              <h5>Software Engineer</h5>
              <span>
                <address>
                  Volans NG LTD
                  <time> Enugu Oct. 2020 to present (Full-Time) </time>
                </address>
              </span>
            </header>
            <ul className="my-4">
              <li>
                Worked with React, React Hooks, Node.js, Base-UI, Apollo
                graphQL, typegraphQL, typeorm, TypeScript, etc, on continues
                development of company CMS
              </li>
              <li>
                {" "}
                Used GitHub Project Management Board to manage job progress
                while working with clients who hesitated job delivery.
              </li>
              <li>
                {" "}
                Handle day-to-day video call meetings with CEO and Customers to
                ascertain work progress.
              </li>
              <li>
                {" "}
                Created database queries for PostgreSQL and Mongo DB, etc.
              </li>{" "}
              <li>
                {" "}
                Developed software architecture and business logic for the
                company.
              </li>
            </ul>
          </article>
          <article>
            <header className="text-center">
              <h5>Software Engineer</h5>
              <span>
                <address>
                  Cornerstone Techno -
                  <time> India August 2020 (Contract) </time>
                </address>
              </span>
            </header>
            <ul className="my-4">
              <li>Designed dynamic UI using Jquery framework.</li>
              <li> Worked on HTML and CSS to boast efficiency of website.</li>
              <li>
                {" "}
                Created responsive web pages with Bootstrap, Jquery and CSS.
              </li>
            </ul>
          </article>
          <article>
            <header className="text-center">
              <h5>Software Engineer</h5>
              <span>
                <address>
                  JKSOFT INC-<time> Lagos March 2019 to Sep. 2020 </time>
                </address>
              </span>
            </header>
            <ul className="my-4">
              <li>
                Used GitHub Project Management Board to manage job progress
                while working with client which hesitated job delivery .
              </li>
              <li>
                {" "}
                Worked with HTML and CSS to create website which recorded best
                UI in the company history.
              </li>
              <li>
                {" "}
                Developed an effective way to approach styling in projects with
                React components.
              </li>
              <li>
                Created API endpoints for an international trading company which
                help to manage their document submission that enhanced workflow.
              </li>
              <li>
                Build lots of database query languages to store data in Node.js
                application.
              </li>
              <li>
                Made appropriate use of Token-Based authentication to validate
                incoming HTTP requests.
              </li>
            </ul>
          </article>
          <article>
            <header className="text-center">
              <h5>Computer Operator</h5>
              <span>
                <address> Bluemoon cyber cafe - Enugu</address>
                <time>November 2016 to February 2019 </time>
              </span>
            </header>

            <ul>
              <li>
                Communicated with clients to meet fiduciary obligations,
                strengthen relationships and define client objectives.
              </li>
              <li>
                Developed and led successful business culture focused on
                performance.
              </li>
              <li>
                {" "}
                Assisted online users via live chat, web conference and phone to
                resolve issues related to customer software use and access.
              </li>
              <li>
                Advised customers and users regarding required maintenance
                practices of diverse software systems for OEM warranty
                requirements and industry best practices.
              </li>
              <li>
                Adeptly handled 30 of inbound calls per day, generating $20000
                in sales revenue annually.
              </li>
            </ul>
          </article>
          <article>
            <header className="text-center">
              <h5>Production Manager (Part-time)</h5>
              <span>
                <address>
                  {" "}
                  Bluemoon blocks –Enugu,
                  <time>November 2016 to February 2019 </time>
                </address>
              </span>
            </header>
            <ul>
              <li>
                Negotiated several sale deals with potential customer for supply
                of blocks to construction sites which reads to purchase of over
                $100,000 worth of blocks annually.
              </li>
              <li>
                Developed an effective work schedule that enhanced production of
                good quality blocks.
              </li>
              <li>
                Slashed payroll/benefits for wage workers by 20% by negotiating
                pricing and fees, while ensuring the continuation and
                enhancements of products and services.
              </li>
              <li>
                Designed work partition schedule with drivers with read to
                speedy and effective delivery of products to construction sites.
              </li>
              <li>
                Adeptly handled inbound calls per day, generating $100, 000 in
                sales revenue annually
              </li>
            </ul>
          </article>
          <article>
            <header className="text-center">
              <h5>Computer Science Teacher</h5>
              <span>
                <address> Nigeria Youth Service Corp(N.Y.S.C) - Delta</address>
                <time>November 2015 to October 2016 </time>
              </span>
            </header>
            <ul className="m-4">
              <li>
                Created technology coursework for high school students to teach
                latest software and hardware.
              </li>
              <li>
                Instructed students according to skill level, classes and
                principles.
              </li>
              <li>
                Analysed classroom results for accurate documentation and
                filing.
              </li>
            </ul>
          </article>
        </section>

        <section>
          <article>
            <h3 className="text-center">EDUCATION</h3>
            <header className="text-center">
              <h5>Bachelor's Degree in Civil Engineering </h5>
              <span>
                <address> University of Nigeria Nssuka</address>
                <time>November 2009 to October 2014. </time>
              </span>
            </header>
          </article>
          <article>
            <header className="text-center">
              <h5>Senior Secondry School Certificate </h5>
              <span>
                <address> Comprehesnsive High School Udi/Abia</address>
                <time>November 2001 to June 2007 </time>
              </span>
            </header>
          </article>
        </section>
        <section className="text-center my-4">
          <h3>SKILLS</h3>
          <p class="text-uppercase">
          JavaScript, React, React-Native, NODE.JS, TypeScript, GraphQl, Material-UI, base-Web, Typeorm, TypegraphQL. 

          </p>
        </section>
        <section className="text-center m-4">
          <h5>AWARDS</h5>
          <p>Best Science Student Award </p>
          <address> Comprehensive High School Udi/Abia-2007 </address>
        </section>
      </div>
    );
  }
}

export default Resume;
