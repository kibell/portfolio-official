import React, { Component } from "react";
import KBimg from "../../images/klogo.png";
import { FaEnvelope } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="container">
          <div class="back-to-top">
            <a href="#top">
              <FaArrowUp className="fas fa-chevron-up"></FaArrowUp>
            </a>
          </div>
          <div class="footer-content  animate-up">
            <img className="kblogo" src={KBimg} alt="kblogo"/>

            <p></p>
          </div>
          <div class="footer-content-divider animate-bottom">
            <div class="social-media">
              <h4 class="contact">
                {" "}
                <a href="mailto:kitrickd.bell@gmail.com? subject= subject text">
                  {" "}
                  <FaEnvelope/>
                </a>
              </h4>
              
             
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
