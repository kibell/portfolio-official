import React, { Component } from "react";
import "./style.css";
import Empimage from "./images/emp.gif";
import LogixImg from "./images/logix-logo.png";
import CapImg from "./images/Capco.jpg";
import { FaArrowDown } from "react-icons/fa";
import "../../utilities.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
class Work extends Component {
  render() {
    return (
      <section className="workSec" id="workSec">
        <AnimationOnScroll
          animateIn="animate__swing"
          duration={5}
          initiallyVisible={true}
          offset={250}
        >
          <div class="container theme-border p-5">
            <h1 class="text-center  wrkName">
              Work <span className="blue-hl">Experience</span>
            </h1>
            <hr />
            <div class="row m-0">
              <div class="col-md-6">
                <div className="text-white">
                  <div class="timeline-content">
                    <span class="year">2021 - Present</span>
                    <h3>Front-End Developer</h3>
                    <h4 class="title">Empyrean Benefits Solutions</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <ul>
                  <li>
                    Designs and develops a new responsive, mobile-first website
                    using CSS, HTML, and JavaScript to increase user experience.
                  </li>
                  <li>
                    Collaborates with back-end developers to implement new pages
                    for the company platform using Model, View, and Controller,
                    which improved the user experience and increased conversion.
                  </li>
                  <li>
                    Develops user interface components and implements the UI
                    with robust React components, resulting in faster loading
                    time and improved user experience.
                  </li>
                </ul>
              </div>

              <div className="row mt-5 m-0">
                <div class="col-md-6">
                  <div className="text-white">
                    <div class="timeline-content">
                      <span class="year">2017 - 2021</span>
                      <h3>Business Systems Analyst</h3>
                      <h4 class="title">Empyrean Benefits Solutions</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <ul>
                    <li>
                      Responsible for the system configuration and setup for
                      clients which includes setup, test plan execution, import
                      configuration, and client acceptance testing
                    </li>
                    <li>
                      Client-facing and consultative role offering solutions to
                      enhance client implementations and transform client
                      workflow and business processes. Facilitates internal
                      communications by serving as the liaison between the
                      services organization and product development, product
                      management, and technical team.
                    </li>
                    <li>
                      Wrote over 300 SQL queries to analyze and report on
                      database data for client deliverables, Identified
                      discrepancies that would have an impact on client cost by
                      using SQL.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </section>
    );
  }
}

export default Work;
