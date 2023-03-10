import React, { Component } from "react";
import "./styles.css";
import { FaFileAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Resume from '../sidebar/KBell.pdf'

class Sidebar extends Component {

 

  render() {
    return (
      <div className="sideBar">
        <ul>
          <li>
           <a  href={Resume} target="_blank" rel="noreferrer"><FaFileAlt className="iconP"/></a> 
            <p className="resumeP" >Download Resume</p>
          </li>
          <li>
          <a href="https://github.com/kibell" target="_blank" rel="noreferrer" className="noDec"><FaGithubAlt className="icons"/></a>

          </li>
          <li>
          <a href="https://www.linkedin.com/in/kitrick-bell-83221494/" target="_blank" rel="noreferrer" className="noDec"> <FaLinkedin className="icons" /></a>
          </li>
          <li>
          <a href="mailto:kitrickd.bell@gmail.com? subject= subject text" target="_blank" rel="noreferrer" className="noDec"> <FaEnvelope className="icons" /></a>
          </li>
          <li>
          <a href="https://twitter.com/sprout_bell" target="_blank" rel="noreferrer" className="noDec"><FaTwitter className="icons" /></a>
          </li>


        </ul>
      </div>
    );
  }
}

export default Sidebar;
