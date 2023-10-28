import React, { Component } from "react";
import "./style.css";
import Empimage from "./images/emp.gif";
import LogixImg from "./images/logix-logo.png";
import CapImg from "./images/Capco.jpg";
import { FaArrowDown } from "react-icons/fa";
import guide from "../projects/images/Dev Guide.gif";
import sfs from "./images/sfs.gif";
import recom from "./images/recom.gif";
import comp from "./images/comp.gif";
import blank from "./images/blank.png";
import SNHU from "./images/snhuicon.png";
import "../../utilities.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import $ from "jquery";
import { BsLamp } from "react-icons/bs";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDiv: "snhu", // Set the initial active div
      // ... your other state properties
      originalState: {
        workProject1: "Nuture Dev Guide",
        workProject1Des:
          "Developed a Dev Guide for the nuture marketing team. Serves as a basic guide for the university's Brand, design standards, and component library",
        workprojImg: guide,
        techStack: "JavaScript, React, CSS, HTML",
        workProject2: "Student Financial Services Page",
        workProject2Des:
          "To ensure students feel supported during there enrollment and feel comfortable with the process in this case anything related to finacial services for the students. This page serves as a hub for students that have any finicial questions and need support.",
        workprojImg2: sfs,
        tooltip:
          "Gather, document, and analyze client functional products and underwriting business requirements. Client-facing and consultative role offering solutions to enhance client implementations and transform client workflow and business processes. Facilitates internal communications by serving as the liaison between the services organization and product development, product management, and technical teams",
        description1:
          "Creates and maintain responsive and user-friendly websites that adhere to the university's branding and design guidelines",
        description2:
          "Develop web pages and applications that function seamlessly across various web browsers and devices, including desktops, tablets, and mobile phones",
        description3:
          "Design intuitive and engaging user interfaces that enhance the overall user experience for prospective students, faculty, and other site visitors. Conduct user research and usability testing to gather feedback and insights for continuous improvement. Ensure accessibility and inclusivity compliance to reach a diverse audience",
        vsite: "https://cloud.dream.snhu.edu/sfs-resources",
        vcode: "",
      },
    };
  }

  // Add a function to set the active div
  setActiveDiv = (divId) => {
    this.setState({ activeDiv: divId });
  };

  componentDidMount() {
    // Set the state to the original state when the component loads
    this.setState(this.state.originalState);
  }

  snhuWork = () => {
    // Reset the state to the original state
    this.setState(this.state.originalState);
  };

  empDevWork = () => {
    this.setState({
      workProject1: "Interactive Color Theming Tool",
      workProject1Des:
        "Developed an interactive tools for clients and internal admin. This tool made it easier to change themes on the benefit election page using our internal admin applications. And offer options that would be most compliant to the WGAC Accesibilty recommendations (Site and code is not available)",
      workprojImg: comp,
      techStack: "JavaScript, C#, LESS,CSS , HTML",
      workProject2: "Admin Analytics Dashboard",
      workProject2Des:
        "Designed and Developed an analytics page for the clients to easily view important statistics about their employees election details. Previously Clients had to rely on manual reports from the BSA's this tool eliminated the need for that process. (Site and code is not available) ",
      workprojImg2: recom,
      tooltip: "",
      description1:
        "Worked as a member of an agile team, and helped push new features from design to production in less than four weeks, by completing the development and testing of a new feature that provided a key benefit to the end user.",
      description2:
        "Collaborated with back-end developers to implement new pages for the company platform using MVC, which improved the user experience and increased conversion.",
      description3:
        "Improved codebase readability by refactoring components using functional programming principles, which improved code performance.",
      vsite: "",
      vcode: "",
    });
  };

  empBSAWork = () => {
    this.setState({
      workProject1: "",
      workProject1Des: "",
      workprojImg: blank,
      techStack: "",
      workProject2: "",
      workProject2Des: "",
      workprojImg2: blank,
      tooltip: "",
      description1:
        "Oversaw the premium reporting process after noticing the start-to-finish process identified inefficiencies by creating automated queries and increasing time savings by 40% 122 hours a month)",
      description2:
        "Utilizes front-end frameworks such as HTML and CSS for unique user interface customizations and ensures that each site is responsive across platforms. Created frameworks for system upgrades designing user acceptance testing processes, creating quality assurance guidelines, and managing framework from migration to production.",
      description3:
        "Work with end-users to define test cases and perform CAT (Client Acceptance Testing) to ensure that new systems or system changes meet business requirements.",
      vsite: "https://snhu-nuture-project.github.io/official_nuture_guide/",
      vcode: "https://github.com/snhu-nuture-project/official_nuture_guide",
    });
  };

  render() {
    return (
      <section className="workSec" id="workSec">
        <div class="container theme-border p-5">
          <h1 class="text-center  wrkName">
            Work <span className="blue-hl">Experience</span>
          </h1>
          <hr />

          <div className="row">
            <div
              className={`col-md-4 align-center p-4 hover-work d-flex flex-column justify-content-between ${
                this.state.activeDiv === "snhu" ? "active-border" : ""
              }`}
              onClick={() => {
                this.setActiveDiv("snhu");
                this.snhuWork();
              }}
            >
              <img src={SNHU} />
              <p className="text-center">
                Front-End Developer <br />
                2021-2023
              </p>
            </div>

            <div
              className={`col-md-4 align-center p-4 hover-work ${
                this.state.activeDiv === "empDev" ? "active-border" : ""
              }`}
              onClick={() => {
                this.setActiveDiv("empDev");
                this.empDevWork();
              }}
            >
              <img src={Empimage} className="w100" />
              <p className="text-center">
                Front-End Developer <br />
                2023-Present
              </p>
            </div>

            <div
              className={`col-md-4 align-center p-4 hover-work ${
                this.state.activeDiv === "empBSA" ? "active-border" : ""
              }`}
              onClick={() => {
                this.setActiveDiv("empBSA");
                this.empBSAWork();
              }}
            >
              <img src={Empimage} className="w100" />
              <p className="text-center">
                Business Systems Analyst <br />
                2017-2021
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <h2 className="text-white">Responsibilities</h2>
              <p>{this.state.description1}</p>
              <p>{this.state.description2}</p>
              <p>{this.state.description3}</p>
            </div>
          </div>

          <div class="row mb-5">
            <h2 className="text-white mb-3 mt-5">
              {" "}
              <span className="blue-hl">Key Work </span> Projects
            </h2>
            <div class="col-md-6">
              <div className="text-white">
                <div class="timeline-content">
                  <h3>{this.state.workProject1}</h3>
                  <span class="year">Tech Stack: {this.state.techStack}</span>
                  <p>{this.state.workProject1Des}</p>
                  <div className="d-flex justify-content-between">
                    <a
                      className="theme-btn text-center"
                      href={this.state.vsite}
                      target="_blank"
                    >
                      Visit Site
                    </a>
                    <a
                      className="theme-btn text-center"
                      href={this.state.vcode}
                      target="_blank"
                    >
                      View Code{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={this.state.workprojImg} className="w100 border" />
            </div>
          </div>

          <hr className="divider"></hr>

          <div class="row mt-5">
            <div className="col-md-6">
              <img src={this.state.workprojImg2} className="w100 border " />
            </div>
            <div class="col-md-6">
              <div className="text-white">
                <div class="timeline-content">
                  <h3>{this.state.workProject2}</h3>
                  <span class="year">Tech Stack: {this.state.techStack}</span>
                  <p>{this.state.workProject2Des}</p>
                  <div className="d-flex justify-content-between">
                    <a className="theme-btn text-center" href="">
                      Visit Site
                    </a>
                    <a className="theme-btn text-center">View Code </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
