import React, { Component } from "react";
import KBimg from "../../images/champ.png";
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
            <p className="cursive">
              "I can do all things through Christ who strenghtens me"
              -Philippians 4:13
            </p>
          </div>
          <img className="kblogo" src={KBimg} alt="kblogo" /> <br />
          <a
            className="theme-btn"
            href="mailto:kitrickd.bell@gmail.com? subject= subject text"
            title="Email"
            target="_blank"
            rel="noreferrer"
          >
            Email Me
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
