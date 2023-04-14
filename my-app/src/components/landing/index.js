import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./styles.css";
import "../../utilities.css";
import { FaArrowDown } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll'
import animate from "../../images/landy.json";
import Lottie from "lottie-react";
class Landing extends Component {
  render() {
    return (
      <section className="beginning" id="beginning">
        <div className="container">
          <div className="row center-row">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-6">
              <div>
              <AnimationOnScroll animateIn="animate__bounceInRight" animateOut="animate__bounceOutLeft"  duration={2}>
                <h1 className="name">
                  Kitrick <span className="blue-hl">Bell</span>
                </h1>
          </AnimationOnScroll>
                <h2 className="mt-3 ml-1">
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter

                        .typeString(
                          '<span style="color:#F2C84B">Business Systems Analyst.</span>'
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(
                          '<span style="color:#F2C84B">UX/UI Designer </span>'
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(
                          '<span style="color:#F2C84B"> Software Developer.</span>'
                        )
                        .start();
                    }}
                  ></Typewriter>
                </h2>
              </div>
              <br />

              <div className="intro-section ">
              <AnimationOnScroll animateIn="animate__bounceInLeft" animateOut="animate__bounceOutRight">
                  <p className=" p-max-40-rem text-white mb-5 ">
                    Currently working as a Software Developer. I am certified in
                    Full-Stack Web development. I am eager to learn and ready to
                    expand my knowledge in technology systems.
                  </p>
                
                <a
                  href="#projSec"
                  className="theme-btn project-btn"
                >
                 <strong>View Projects</strong> {" "}
                </a>{" "}
                <a
                  href="mailto:kitrickd.bell@gmail.com? subject= subject text"
                  className="theme-btn ml-2"
                  target="_blank"
                >
                  <strong>Email me</strong>{" "}
                </a>{" "}
            </AnimationOnScroll>{" "}
              </div>
            </div>
           

              <div className="col-md-5 cube">
              
            <Lottie animationData={animate} loop={true} className="lottie" />
            
            </div>
           
            
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
