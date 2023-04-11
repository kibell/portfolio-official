import React, { Component } from "react";
import umhbImg from "./images/umhb.jpg";
import UOT from "./images/bootcamp.png";
import Grad from "../../images/graduation.png"
import "./style.css";
import "../../utilities.css";


class Education extends Component {
  render() {
    return (
      <section class="eduSec" id="eduSec">
        <div className="container">
          <h1 class=" mtc edu-header mt-5">
            Education & <br /> <span className="blue-hl">Certifications</span>{" "}
          </h1>
          <div class="row mr-0">
            <div class="col-lg-6 mt-5">
              <div class="timeline-image float-right">
                <img
                  class="img-circle img-responsive img-switch"
                  src={umhbImg}
                  alt=""
                />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 className="text-white">
                    University of Mary-Hardin Baylor
                  </h4>
                  <h5 className="text-white">Computer Information Systems</h5>
                  <h6 className="text-white">August 2015</h6>
                </div>
              </div>
            </div>
<div className="col-lg-6"> <img
                  class="grad float-right img-responsive"
                  src={Grad}
                  alt=""
                /></div>
            <div class="col-lg-6 mt-5">
              <div class="timeline-image float-right">
                <img
                  class="img-circle img-responsive img-switch"
                  src={UOT}
                  alt=""
                />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 className="text-white">
                  University of Texas
                  </h4>
                  <h5 className="text-white">Web Development BootCamp</h5>
                  <h6 className="text-white">March 2020</h6>
                </div>
              </div>
            </div>
          </div>
          
          {/* <ul class="timeline">
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
                      <h4 className="text-black">
                        University of Mary-Hardin Baylor
                      </h4>
                      <h5 className="text-black">
                        Computer Information Systems
                      </h5>
                      <h6 className="text-black">August 2015</h6>
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
                  <div class="timeline-panel w20">
                    <div class="timeline-heading">
                      <h4 className="text-black">University of Texas</h4>
                      <h5 className="text-black">Web Development BootCamp</h5>
                      <h6 className="text-black">March 2020</h6>
                    </div>
                  </div>
                </li>
              </ul> */}
        </div>
      </section>
    );
  }
}

export default Education;
