import React, { Component } from "react";
import "./styles.css";
import { FaFileAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Resume from "../sidebar/KBell.pdf";
import OverlayTrigger from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import $ from "jquery";
import { MDBTooltip } from "mdb-react-ui-kit";
import Fall from "../../images/fall.png"

class Sidebar extends Component {
  render() {
    return (
      <div className="sideBar">
        <ul>
          <li>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              title="Download Resume"
              data-toggle="tooltip"
              data-placement="top"
            >
              <FaFileAlt className="iconP" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kibell"
              target="_blank"
              title="GitHub"
              rel="noreferrer"
              className="noDec"
            >
              <FaGithubAlt className="icons" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kitrick-bell-83221494/"
              title="Linkedin"
              target="_blank"
              rel="noreferrer"
              className="noDec"
            >
              {" "}
              <FaLinkedin className="icons" />
            </a>
          </li>
          <li>
            <a
              href="mailto:kitrickd.bell@gmail.com? subject= subject text"
              title="Email"
              target="_blank"
              rel="noreferrer"
              className="noDec"
            >
              {" "}
              <FaEnvelope className="icons" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/sprout_bell"
              target="_blank"
              rel="noreferrer"
              className="noDec"
            >
              <FaTwitter className="icons" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
