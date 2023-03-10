import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./styles.css";
import { FaArrowDown } from "react-icons/fa"

class Landing extends Component {
  render() {
    return (
    <section className="beginning" id="beginning">
        <div className="row">
          <div className="col-md-12 gt">
            <p className="highlight como" >
              ¿Como Estas? My Name is
            </p>
            <h1 className="name">Kitrick Bell</h1>
            <h3>
              I am a
              <Typewriter
              onInit={(typewriter)=> {
                typewriter

                .typeString('<span style="color:#50ccb4"> Systems Analyst.</span>')
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span style="color:#50ccb4"> Full-Stack Developer.</span>' )
                .start()

              }}
               
              ></Typewriter>
            </h3>
            <br />
          </div>
        </div>

    <div className="row">   
    <div className="col-md-8">
    <h5>Currently working as a Systems Analyst. I am certified in Full-Stack Web development. I am eager to learn and ready to expand
    my knowledge in technology systems. Check out my Library of Projects and Applications I have been working on.
     </h5> 
      <button className="theme-btn" > <a href="https://kibell.github.io/My-Portfolio/project.html">View Project Library </a> </button>
    
  </div>
  </div>

  <a href="#aboutSec"><FaArrowDown className="ArrowDown"  /></a>
      </section>
    );
  }
}

export default Landing;
