import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./styles.css";
import "../../utilities.css";
import { FaArrowDown } from "react-icons/fa";

class Landing extends Component {
  render() {
    return (
      <section className="beginning" id="beginning">
        <div className="row">
          <div className="col-md-12 gt">
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
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 intro-section">
            <p>
              Currently working as a Software Developer. I am certified in
              Full-Stack Web development. I am eager to learn and ready to
              expand my knowledge in technology systems. Check out my Library of
              Projects and Applications I have been working on.
            </p>
            <button className="theme-btn">
              {" "}
              <a href="https://kibell.github.io/My-Portfolio/project.html">
                View Projects{" "}
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
