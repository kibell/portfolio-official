import React, { Component, Fragment } from "react";
import recom from "../work/images/recom.gif";
import comp from "../work/images/comp.gif";
import bellsprout from "./images/Bell.gif";
import netflix from "./images/nc.gif";
import orgSpace from "./images/organized spaces.gif";
import corona from "./images/ctrack.gif";
import letsme from "./images/letsme.gif";
import giphy from "./images/giphy API.gif";
import guide from "./images/Dev Guide.gif";
import trivia from "./images/Trivia.gif";
import pre from "./images/pre.gif";
import { FaLess } from "react-icons/fa";
import AI from "./images/AI Coursework.gif";
import reactApp from "./images/React App.gif";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { SiAdobexd } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { FaPython } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa";
import { BsWordpress } from "react-icons/bs";
import { GiAbstract020 } from "react-icons/gi";
import { SiNetflix } from "react-icons/si";
import { RiGuideFill } from "react-icons/ri";
import { MdWorkspaces } from "react-icons/md";
import { MdCoronavirus } from "react-icons/md";
import { GiExplosiveMeeting } from "react-icons/gi";
import { GiClick } from "react-icons/gi";
import { MdOutlineQuiz } from "react-icons/md";
import { GiFallingBlob } from "react-icons/gi";
import { FaArtstation } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";

import $ from "jquery";

import "./style.css";
import "../../utilities.css";

class Projects extends Component {
  state = {
    title: "Project Library",
    description: "Click the project in the side bar to learn more.",
    viewCode:
      "Spearheads system issues by utilizing agile methodology to complete projects and meeting specific deadlines. I was able to improve our Premium Reporting Process and saved the company over 16 hours of time allocated to this task by developing complex queries using SQL Server that reduced processing time to 4 hours.",
    viewSite:
      "Gather, document, and analyze client functional products and underwriting business requirements.Client-facing and consultative role offering solutions to enhance client implementations and transform client workflow and business processes. Facilitates internal communications by serving as the liaison between the services organization and product development, product management, and technical teams.",
    techStack: "",
    imgSrc: bellsprout,
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
      imgSrc: bellsprout,
    });
  };

  changeAI = () => {
    this.setState({
      title: "AI Course work Page",
      description:
        "We needed to design and Develop an AI course work page to inform prospect student of the upcoming courses that are being offered at SNHU. We met all deliverables and launch the page and notified students on time ",
      viewCode: "https://github.com/snhu-nuture-project/ai-course-page",
      viewSite: "https://cloud.dream.snhu.edu/AICoursework",
      techStack: (
        <Fragment>
          {" "}
          <FaHtml5 />
          <DiJavascript />
          <FaCss3Alt /> <FaSass />
          <FaSalesforce />
        </Fragment>
      ),
      imgSrc: AI,
    });
  };

  changePre = () => {
    this.setState({
      title: "Pre-Orientation Page",
      description:
        "This online platform is your personal guide to a seamless transition into campus life. Crafted with precision and user-friendly design, this pre-orientation page ensures that you step into university life with confidence and excitement. ",
      viewCode: "https://github.com/snhu-nuture-project/pre-orientation",
      viewSite: "https://cloud.dream.snhu.edu/pre-orientation",
      techStack: (
        <Fragment>
          {" "}
          <FaHtml5 />
          <DiJavascript />
          <FaCss3Alt /> <FaSass />
          <FaSalesforce />
        </Fragment>
      ),
      imgSrc: pre,
    });
  };

  changeDash = () => {
    this.setState({
      title: "Analytics Dashboard",
      description:
        "Designed and Developed an analytics page for the clients to easily view important statistics about their employees election details. Previously Clients had to rely on manual reports from the BSA's this tool eliminated the need for that process. (Site and code is not available) ",
      viewCode: "",
      viewSite: "",
      techStack: (
        <Fragment>
          {" "}
          <FaHtml5 />
          <DiJavascript />
          <FaCss3Alt /> <FaLess />
          <SiDotnet />
        </Fragment>
      ),
      imgSrc: recom,
    });
  };

  changeTheme = () => {
    this.setState({
      title: "Interactive Color theme Tool",
      description:
        "Developed an interactive tools for clients and internal admin. This tool made it easier to change themes on the benefit election page using our internal admin applications. And offer options that would be most compliant to the WGAC Accesibilty recommendations (Site and code is not available) ",
      viewCode: "",
      viewSite: "",
      techStack: (
        <Fragment>
          {" "}
          <FaHtml5 />
          <DiJavascript />
          <FaCss3Alt /> <FaLess />
          <SiDotnet />
        </Fragment>
      ),
      imgSrc: comp,
    });
  };

  changeVid = () => {
    this.setState({
      title: "Student Video Library",
      description:
        "University wanted a more in house approach verses using Youtube to provide students with helpful resouces. Developed Video library to host and stream videos for students.  ",
      viewCode: "",
      viewSite: "https://welcometosnhu.hubs.vidyard.com/",
      techStack: (
        <Fragment>
          {" "}
          <FaHtml5 />
          <DiJavascript />
          <FaCss3Alt /> <FaLess />
          <SiDotnet />
        </Fragment>
      ),
      imgSrc: comp,
    });
  };

  changeGuide = () => {
    this.setState({
      title: "Nuture Marketing Development Guide",
      description:
        "Created a comprehensive Development Guide for the Dev team to utlize to help assist the team on the university branding standards and common code practices.",
      viewCode: "https://github.com/snhu-nuture-project/official_nuture_guide",
      viewSite: "https://snhu-nuture-project.github.io/official_nuture_guide/",
      techStack: (
        <Fragment>
          {" "}
          <FaReact />
          <DiJavascript />
          <FaCss3Alt />{" "}
        </Fragment>
      ),
      imgSrc: guide,
    });
  };

  changeNetflix = () => {
    this.setState({
      title: "Netflix Clone",
      description:
        "Practicing my React skills by creating a Netflix clone, This site mimicks the style and design of the most popular streaming service, Sorry you can not stream movies here, You still will need to pay Netflix.",
      viewCode: "https://github.com/kibell/Netflix-Clone",
      viewSite: "https://warm-lowlands-22039.herokuapp.com/",
      techStack: (
        <Fragment>
          {" "}
          <FaReact />
          <DiJavascript />
          <FaCss3Alt />{" "}
        </Fragment>
      ),
      imgSrc: netflix,
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
          <BsFiletypeSql />
          <DiJavascript />
          <FaCss3Alt />
          <FaHtml5 />{" "}
        </Fragment>
      ),
      imgSrc: orgSpace,
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
      imgSrc: corona,
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
      imgSrc: letsme,
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
      imgSrc: reactApp,
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
      imgSrc: trivia,
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
      imgSrc: giphy,
    });
  };
  render() {
    return (
      <section class="projSec p-5" id="projSec">
        <div className="row">
          {/* <div className="col-md-12">
            <h1 class="proj-header pt-5 text-center">Projects</h1>
          </div> */}

          <div className="col-md-2">
            <h3>Projects</h3>
            <ul className="list-item">
              <li onClick={this.changeBellSprout}>
                {" "}
                <GiAbstract020 className="mr-2" />
                BellSprout Designs{" "}
              </li>
              <li onClick={this.changeNetflix}>
                {" "}
                <SiNetflix className="mr-2" />
                Netflix Clone{" "}
              </li>
              <li onClick={this.changeGuide}>
                {" "}
                <RiGuideFill className="mr-2" />
                Developer Guide{" "}
              </li>
              <li onClick={this.changeTheme}>
                {" "}
                <MdAppRegistration className="mr-2" />
                Interactive Color Theme Tool{" "}
              </li>
              <li onClick={this.changeVid}>
                {" "}
                <CiVideoOn className="mr-2" />
                Student Video Library{" "}
              </li>
              <li onClick={this.changeDash}>
                {" "}
                <MdAppRegistration className="mr-2" />
                Analytics Dashboard{" "}
              </li>
              <li onClick={this.changeOrg}>
                {" "}
                <MdWorkspaces className="mr-2" />
                Org Spaces{" "}
              </li>
              <li onClick={this.changeMeetme}>
                {" "}
                <GiExplosiveMeeting className="mr-2" />
                Meet Me{" "}
              </li>
              <li onClick={this.changeClicky}>
                {" "}
                <GiClick className="mr-2" />
                Clicky Game{" "}
              </li>
              <li onClick={this.changeCorona}>
                {" "}
                <MdCoronavirus className="mr-2" />
                Corona Tracker{" "}
              </li>
              <li onClick={this.changeTrivia}>
                {" "}
                <MdOutlineQuiz className="mr-2" />
                Comic Trivia{" "}
              </li>
              <li onClick={this.changeGiphy}>
                {" "}
                <GiFallingBlob className="mr-2" />
                Giphy API{" "}
              </li>
              <li onClick={this.changeAI}>
                {" "}
                <FaArtstation className="mr-2" />
                AI Course Work{" "}
              </li>
              <li onClick={this.changePre}>
                {" "}
                <MdAppRegistration className="mr-2" />
                Pre Orientation Page{" "}
              </li>

              <li>
                {" "}
                <FaFilePdf className="mr-2" />
                Communication Training Plan{" "}
              </li>
              <li>
                {" "}
                <FaFilePdf className="mr-2" />
                Tech Evaluation of an OS{" "}
              </li>
            </ul>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-7 text-center">
            <hr></hr>
            <h2 className="project-title text-black">{this.state.title}</h2>
            <p className="project-description text-black ">
              {this.state.description}
            </p>
            <img src={this.state.imgSrc} alt="" className="mb-2 imagery" />
            <br></br>
            <p className="text-black">
              {" "}
              <strong>Tech Stack: </strong>
              <span className="fs-45">{this.state.techStack}</span>
            </p>
            <a
              className="theme-btn text-black text-center "
              href={this.state.viewCode}
              target="_blank"
            >
              View Code
            </a>
            <a
              className="theme-btn ml-3 text-center"
              href={this.state.viewSite}
              target="_blank"
            >
              View Site
            </a>
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
