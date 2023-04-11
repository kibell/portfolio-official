import React, { Component, Fragment } from "react";

import bellsprout from "./images/Bell.gif";
import netflix from "./images/nc.gif";
import orgSpace from "./images/organized spaces.gif";
import corona from "./images/ctrack.gif";
import letsme from "./images/letsme.gif";
import giphy from "./images/giphy API.gif";
import trivia from "./images/Trivia.gif";
import reactApp from "./images/React App.gif";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { SiAdobexd } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaPython } from "react-icons/fa";
import { BsWordpress } from "react-icons/bs";

import $ from "jquery";

import "./style.css";
import "../../utilities.css";

class Projects extends Component {
  state = {
    title: "Project Library",
    description:
      "Hover the cards for more details and to view the code or the site.",
    viewCode:
      "Spearheads system issues by utilizing agile methodology to complete projects and meeting specific deadlines. I was able to improve our Premium Reporting Process and saved the company over 16 hours of time allocated to this task by developing complex queries using SQL Server that reduced processing time to 4 hours.",
    viewSite:
      "Gather, document, and analyze client functional products and underwriting business requirements.Client-facing and consultative role offering solutions to enhance client implementations and transform client workflow and business processes. Facilitates internal communications by serving as the liaison between the services organization and product development, product management, and technical teams.",
    techStack: "",
  };

  changeBellSprout = () => {
    this.setState({
      title: "BellSprout Designs",
      description:
        "Freelancing site that allows me to help small business create and design their website. This site allows users to book a free consultation to discuss a direction for their dream website.  ",
      viewCode: "",
      viewSite: "https://bellsproutdesigns.com/",
      techStack: (
        <Fragment>
          {" "}
          <BsWordpress />
          <DiJavascript />
          <FaCss3Alt />{" "}
        </Fragment>
      ),
    });
  };

  changeNetflix = () => {
    this.setState({
      title: "Netflix Clone",
      description:
        "Practicing my React skills by creating a Netflix clone, This site mimicks the style and design of the most popular streaming service, Sorry you can not stream movies here, You still will need to pay Netflix.",
      viewCode: "https://github.com/kibell/Netflix-Clone",
      viewSite:
        "Gather, document, and analyze client functional products and underwriting business requirements.Client-facing and consultative role offering solutions to enhance client implementations and transform client workflow and business processes. Facilitates internal communications by serving as the liaison between the services organization and product development, product management, and technical teams.",
      techStack: (
        <Fragment>
          {" "}
          <FaReact />
          <DiJavascript />
          <FaCss3Alt />{" "}
        </Fragment>
      ),
    });
  };

  changeOrg = () => {
    this.setState({
      title: "Org Spaces",
      description:
        "It is the year for clarity. We will help jump start your life by helping you get organized! With My Spaces we will allow the user to enter and store items in a database so that the user will always know where their items are located.",
      viewCode: "https://github.com/kibell/My-Spaces",
      viewSite: "",
      techStack: (
        <Fragment>
          {" "}
          <FaReact />
          <BsFiletypeSql/>
          <DiJavascript />
          <FaCss3Alt />
          <FaHtml5 />{" "}
        </Fragment>
      ),
    });
  };

  changeCorona = () => {
    this.setState({
      title: "Corona Tracker",
      description:
        "Keep up with the latest information on how the Corona Virus is impacting the world!",
      viewCode: "https://github.com/kibell/CoronaTracker",
      viewSite: "https://warm-lowlands-22039.herokuapp.com/",
      techStack: (
        <Fragment>
          {" "}
          <FaReact />
          <DiJavascript />
          <FaCss3Alt />
          <FaHtml5 />{" "}
        </Fragment>
      ),
    });
  };

  changeMeetme = () => {
    this.setState({
      title: "Meet me",
      description:
        "Have you ever wanted to meet a coworker for lunch and had trouble finding a place to meet? With Let's Meet you can link with your friends and coworkers on this app. Each user will enter in their Zip code and Let's meet will find the closest resturants near you and will give each user the option to vote on which place to go..",
      viewCode: "https://github.com/kibell/Meetme",
      viewSite: "https://kibell.github.io/Meetme/",
      techStack: (
        <Fragment>
          {" "}
          <DiJavascript />
          <FaCss3Alt />
          <FaHtml5 />{" "}
        </Fragment>
      ),
    });
  };

  changeClicky = () => {
    this.setState({
      title: "Clicky Game",
      description:
        "Clicky Game is designed to test your memory. Start by clicking an image and then a different image the next time. Keep going and see if you can click all unique cards before the game is over.",
      viewCode: "https://github.com/kibell/Clicky-Game-React",
      viewSite: "https://naughty-allen-95382a.netlify.app/",
      techStack: (
        <Fragment>
          {" "}
          <FaReact />
          <DiJavascript />
          <FaCss3Alt />
          <FaHtml5 />{" "}
        </Fragment>
      ),
    });
  };

  changeTrivia = () => {
    this.setState({
      title: "Comic Trivia Game",
      description:
        "This site tests your knowledge on the Comic knowledge, You are timed on each question, Answer as many as you can correctly and go for the high score!",
      viewCode: "https://github.com/kibell/Trivia-Game-",
      viewSite: "https://kibell.github.io/Trivia-Game-/",
      techStack: (
        <Fragment>
          {" "}
          <DiJavascript />
          <FaCss3Alt />
          <FaHtml5 />{" "}
        </Fragment>
      ),
    });
  };

  changeGiphy = () => {
    this.setState({
      title: "Giphy API",
      description:
        "Enter the gif you want to see appear and the bottom of the screen. Stickers are animated images that do not have a background. Select the button of the type of image you want to use. The image will be still, click the image to animate it! Save the Gifs or the Stickers you want to use or share with your friends",
      viewCode: "https://github.com/kibell/GiphyAPI",
      viewSite: "https://kibell.github.io/GiphyAPI/",
      techStack: (
        <Fragment>
          {" "}
          <FaReact />
          <DiJavascript />
          <FaCss3Alt />
          <FaHtml5 />{" "}
        </Fragment>
      ),
    });
  };
  render() {
    return (
      <section class="projSec" id="projSec">
        <div className="container">
          <h1 class="proj-header pt-5 text-center">Projects</h1>
          <hr></hr>
          <h2 className="project-title text-black">{this.state.title}</h2>
          <p className="project-description text-black m-0">{this.state.description}</p>
          <p className="text-black">
            {" "}
            <strong>Tech Stack: </strong>
            <span className="fs-45">{this.state.techStack}</span>
          </p>
          <a
            className="btn text-black text-center yb"
            href={this.state.viewCode}
            target="_blank"
          >
            View Code
          </a>
          <a
            className="btn btn-primary ml-3 text-center"
            href={this.state.viewSite}
            target="_blank"
          >
            View Site
          </a>
          <div class="container-card mt-5">
            <div class="card-project" onMouseOver={this.changeBellSprout}>
              <h3 class="title-card">BellSprout Designs</h3>
              <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
              </div>
              <div class="circle-bell">
                <img src={bellsprout} className="width-250px" />
              </div>
            </div>
            <div class="card-project" onMouseOver={this.changeNetflix}>
              <h3 class="title-card">Netflix Clone</h3>
              <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
              </div>
              <div class="circle-bell">
                <img src={netflix} className="width-250px" />
              </div>
            </div>
            <div class="card-project" onMouseOver={this.changeOrg}>
              <h3 class="title-card">Org Spaces</h3>
              <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
              </div>
              <div class="circle-bell">
                <img src={orgSpace} className="width-250px" />
              </div>
            </div>
            <div class="card-project" onMouseOver={this.changeCorona}>
              <h3 class="title-card">Corona Tracker</h3>
              <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
              </div>
              <div class="circle-bell">
                <img src={corona} className="width-250px" />
              </div>
            </div>
          </div>

          <div class="container-card mt-5">
            <div class="card-project" onMouseOver={this.changeMeetme}>
              <h3 class="title-card">Meet ME</h3>
              <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
              </div>
              <div class="circle-bell">
                <img src={letsme} className="width-250px" />
              </div>
            </div>
            <div class="card-project" onMouseOver={this.changeClicky}>
              <h3 class="title-card">Clicky Game</h3>
              <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
              </div>
              <div class="circle-bell">
                <img src={reactApp} className="width-250px" />
              </div>
            </div>
            <div class="card-project" onMouseOver={this.changeTrivia}>
              <h3 class="title-card">Trivia Game</h3>
              <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
              </div>
              <div class="circle-bell">
                <img src={trivia} className="width-250px" />
              </div>
            </div>
            <div class="card-project" onMouseOver={this.changeGiphy}>
              <h3 class="title-card">Giphy API</h3>
              <div class="bar">
                <div class="emptybar"></div>
                <div class="filledbar"></div>
              </div>
              <div class="circle-bell">
                <img src={giphy} className="width-250px" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

$(function () {
  // $('[data-toggle="tooltip"]').tooltip()
  console.log("hellp");
});

export default Projects;
