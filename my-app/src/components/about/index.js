import React, { Component } from "react";
import KBimg from "../../images/hey.png";
import { FaArrowDown } from "react-icons/fa";
import "./styles.css";
import "../../utilities.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

class About extends Component {
  render() {
    return (
      <section className="about mt-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <AnimationOnScroll
                animateIn="animate__bounceInRight"
                animateOut="animate__bounceOutLeft"
                duration={2}
              >
                <h1 class="aboutHeader mt-2">
                  About <span className="blue-hl">Me</span>
                </h1>

                <p>
                  Hello My name is Kitrick Bell and I am a Web developer out of
                  Houston TX. I enjoy learning about Web development. I enjoy
                  taking projects from the start and working on them ultimately
                  seeing the final project come to life. My goal is to help
                  others jump start their business with beautiful designs and
                  responsive sites.{" "}
                </p>
                <p>
                  I earned my certification through University of Texas Coding
                  BootCamp where I learned about Front end and back end
                  development.
                </p>
                <p>
                  <a href="#skillSec">Click Here</a> to view my Skills{" "}
                </p>
              </AnimationOnScroll>
            </div>
            <img
              className="mypic col-lg-6 col-md-12 col-sm-4"
              src={KBimg}
              alt=""
            />
          </div>

          {/* <a href="#workSec"><FaArrowDown className="ArrowDown"  /></a> */}
        </div>
      </section>
    );
  }
}

export default About;
