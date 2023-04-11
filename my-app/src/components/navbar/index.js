import React, { Component } from "react";
import Logo from "../../images/logogif.gif";
import "./styles.css";
import "../../utilities.css";
import $ from "jquery";

class NavBar extends Component {
  Active() {
    $(".nav-link").removeClass("active");
    // $(".nav-link").addClass("active");
    console.log($(this));
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar">
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <div className="b-hr-green"></div>
              <li className="nav-item d1">
                <a className="nav-link" href="#about" onClick={this.Active}>
                  <span className="highlight mr">01</span>About{" "}
                </a>
              </li>

              <li className="nav-item d3">
                <a className="nav-link " href="#workSec">
                  <span className="highlight mr">02</span>Experience
                </a>
              </li>

              <li className="nav-item d2">
                <a className="nav-link" href="#eduSec">
                  <span className="highlight mr ">03</span>Education
                </a>
              </li>
              <li className="nav-item d4">
                <a className="nav-link" href="#skillSec">
                  <span className="highlight mr d4">04</span>Skills
                </a>
              </li>
              <li className="nav-item d4">
                <a className="nav-link" href="#projSec">
                  <span className="highlight mr d4">05</span>Projects
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

              <li className="nav-item d4">
                <a className="nav-link" href="./contact.html">
                  <span className="highlight mr d4">07</span>Contact
                </a>
              </li>

              <div className="b-hr-green"></div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
