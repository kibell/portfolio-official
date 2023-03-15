import React, { Component } from "react";
import umhbImg from "./images/umhb.jpg";
import UOT from "./images/bootcamp.png";
import "./style.css";
import "../../utilities.css";

class Education extends Component {
  

  render() {
    return (
      <section class="eduSec" id="eduSec">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="mtc text-right">
              <span class="highlight">03</span> Education & Certifications
            </h1>
            <hr class="hrt mb-5 float-right w-50" />

            <ul class="timeline">
              <li>
                <div class="timeline-image">
                  <img
                    class="img-circle img-responsive img-switch"
                    src={umhbImg}
                    alt=""
                  />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>University of Mary-Hardin Baylor</h4>
                    <h5>Computer Information Systems</h5>
                    <h6>August 2015</h6>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    </p>
                  </div>
                </div>
                <div class="line"></div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img
                    class="img-circle img-responsive img-switch"
                    src={UOT}
                    alt=""
                  />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>University of Texas</h4>
                    <h5>Web Development BootCamp</h5>
                    <h6>March 2020</h6>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </div>
                </div>
                </li>
                </ul>
                </div>
                </div>
      </section>
    );
  }
}

export default Education;
