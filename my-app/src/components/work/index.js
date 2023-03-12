import React, { Component } from "react";
import "./style.css";
import Empimage from  "./images/emp.gif"
import LogixImg from "./images/logix-logo.png"
import CapImg from "./images/Capco.jpg"
import { FaArrowDown } from "react-icons/fa"
import "../../utilities.css";
class Work extends Component {

  
  render() {
    return (
      <div class="container">
       <h1 class="mtc">
              <span class="highlight">02</span> Work Experience
            </h1>
            <hr class="hrt" />
      <div class="row">
          <div class="col-md-12">
              <div class="main-timeline3">
                  <div class="timeline">
                      <div class="timeline-content">
                          <span class="year">2021 - Present</span>
                          <h3 >Front-End Developer</h3>
                          <h4 class="title">Empyrean Benefits Solutions</h4>
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
                          </p>
                      </div>
                  </div>
                  <div class="timeline">
                      <div class="timeline-content">
                          <span class="year">2018-2021</span>
                          <h3>Business Systems Analyst</h3>
                          <h4 class="title">Empyrean Benefits Solutions</h4>
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
                          </p>
                      </div>
                  </div>
                  <div class="timeline">
                      <div class="timeline-content">
                          <span class="year">2017-2018</span>
                          <h3>Logix Diagnostics</h3>
                          <h4 class="title">Lab Technician</h4>
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default Work;
