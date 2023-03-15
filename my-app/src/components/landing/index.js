import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./styles.css";
import "../../utilities.css";
import { FaArrowDown } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import "animate.css";
import animate from "../../images/anim.json";

import Lottie from "lottie-react";
class Landing extends Component {
  render() {
    return (
      <section className="beginning" id="beginning">
        <div className="row">
          <div className="col-md-12 gt">
            <div>
            <h1 className="name">Kitrick Bell</h1>
                
              <h2>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString(
                        '<span style="color:#50ccb4">Business Systems Analyst.</span>'
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        '<span style="color:#50ccb4"> Full-Stack Developer.</span>'
                      )
                      .start();
                  }}
                ></Typewriter>
              </h2>
            </div>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 intro-section ">
            <Fade>
              <p className="animate__animated animate__lightSpeedInRight animate__slower">
                Currently working as a Software Developer. I am certified in
                Full-Stack Web development. I am eager to learn and ready to
                expand my knowledge in technology systems. Check out my Library
                of Projects and Applications I have been working on.
              </p>
            </Fade>
            <button className="theme-btn animate__animated animate__flipInX animate__slow">
              {" "}
              <a href="https://kibell.github.io/My-Portfolio/project.html">
                View Projects{" "}
              </a>{" "}
            </button>

            <button className="theme-btn animate__animated animate__flipInX animate__slower ml-3 ">
              {" "}
              <a
                href="mailto:kitrickd.bell@gmail.com? subject= subject text"
                target="_blank"
              >
                Email Me{" "}
              </a>{" "}
            </button>
          </div>
        </div>

        <a href="#aboutSec">
          <FaArrowDown className="ArrowDown" />
        </a>
      </section>
    );
  }
}

export default Landing;
