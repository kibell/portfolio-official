import React, { Component } from "react";
import KBimg from "../../images/kb.png"
import { FaArrowDown } from "react-icons/fa"
import "./styles.css";
import "../../utilities.css";

class About extends Component {
  render() {
    return (
        <section className="about" id='about'>
        <div className="row" id="aboutSec"></div>

          <div className="row" >
            <div className="col-lg-7 col-md-12 col-sm-12 animate__animated animate__bounceInLeft animate__slower">
             <h1 className="mtc"><span className="highlight mr">01</span>About Me</h1>
      
             <hr className="hrt mb-5"/>
      
             <p>Hello My name is <span className="highlight"> Kitrick Bell </span> 
             and I am a Web developer out of Houston TX.
              I enjoy learning about Web development. I enjoy taking projects from the start and working on them ultimately 
            seeing the final project come to life. My goal is to help others jump start their business with beautiful designs 
          and responsive sites. </p>
          <p>I earned my certification through <span className="highlight">University of Texas Coding BootCamp</span> where I learned about Front end and back end development.</p>
          <p><a href="#skillSec">Click Here</a> to view my Skills </p>
      
            
      
          </div>
      
          
            <img className="mypic col-lg-5 col-md-12 col-sm-4 animate__animated animate__bounceInRight animate__slower" src={KBimg}  alt=""/>
         
      
          </div>
       
      
          {/* <a href="#workSec"><FaArrowDown className="ArrowDown"  /></a> */}
      </section>
    );
  }
}

export default About;