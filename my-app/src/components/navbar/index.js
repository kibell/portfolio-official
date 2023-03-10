import React, { Component } from "react";
import Logo from "../../images/logogif.gif";
import "./styles.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg" id="top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active d1">
              <a className="nav-link " href="#aboutSec">
                <span className="highlight mr">01</span>About Me{" "}
              </a>
            </li>

            <li className="nav-item d3">
              <a className="nav-link " href="#workExp">
                <span className="highlight mr">02</span>Work Experience
              </a>
            </li>

            <li className="nav-item d2">
              <a className="nav-link" href="#education">
                <span className="highlight mr ">03</span>Education
              </a>
            </li>
            <li className="nav-item d4">
              <a
                className="nav-link"
                href="https://kibell.github.io/My-Portfolio/project.html"
              >
                <span className="highlight mr d4">04</span>Project Library
              </a>
            </li>

            <li className="nav-item d4">
              <a className="nav-link" href="./contact.html">
                <span className="highlight mr d4">05</span>Contact Me
              </a>
            </li>

            <li className="nav-item d4">
              <a
                className="nav-link"
                href="https://bellsproutdesigns.com/blog/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="highlight mr d4">06</span>Blogs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
