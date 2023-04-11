import React, { Component } from "react";
import "./style.css";
import Empimage from "./images/emp.gif";
import LogixImg from "./images/logix-logo.png";
import CapImg from "./images/Capco.jpg";
import { FaArrowDown } from "react-icons/fa";
import "../../utilities.css";
class Work extends Component {
  render() {
    return (
      <section className="workSec" id="workSec">
        <div class="container theme-border p-5">
          <h1 class="text-center  wrkName">
            Work <span className="blue-hl">Experience</span>
          </h1>
         <hr />
          <div class="row m-0">
            <div class="col-md-6">
              <div>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer malesuada tellus lorem, et condimentum neque commodo
                  quis.
                </li>
              </ul>
            </div>

            <div className="row mt-5">
              <div class="col-md-6">
                <div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row mt-5">
              <div class="col-md-6">
                <div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer malesuada tellus lorem, et condimentum neque commodo
                    quis.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
