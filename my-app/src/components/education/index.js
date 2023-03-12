import React, { Component } from "react";
import umhbImg from "./images/umhb.jpg";
import UOT from "./images/bootcamp.png";
import "./style.css";

class Education extends Component {
  state = {
    Title: "University Ambassador",
    Title2: "NCAA Mens BasketBall",
    Description:
      "Recognized by campus leaders and peers and was elected in a prestigious role to represent the college campus. I was responsible for welcoming prospective students and their families to campus and assisting staff at events for new students. Lead tour groups throughout the school year. I coordinated with students and parents and accurately conveyed information about the University and aided if help was needed.",
    Description1:
      "Selected on the All American Team, Lead Team to the NCAA championship. Still hold the record for most rebounds recorded in a single game in all of ASC.",
    imgSrc: umhbImg,
    degree: "Major: Computer Information Systems",
  };

  changeUmhb = () => {
    this.setState({
      Title: "University Ambassador",
      Title2: "NCAA Mens BasketBall",
      Description:
        "Recognized by campus leaders and peers and was elected in a prestigious role to represent the college campus. I was responsible for welcoming prospective students and their families to campus and assisting staff at events for new students. Lead tour groups throughout the school year. I coordinated with students and parents and accurately conveyed information about the University and aided if help was needed.",
      Description1:
        "Selected on the All American Team, Lead Team to the NCAA championship. Still hold the record for most rebounds recorded in a single game in all of ASC.",
      imgSrc: umhbImg,
      degree: "Major: Computer Information Systems",
    });
  };

  changeUOTCert = () => {
    this.setState({
      Title: "",
      Title2: "",
      Description:
        "Completed 6 month program and earned a full stack certification for web development. Built Front end projects that enhance my knowledge of frameworks such as bootstrap, React and Materialize. Developed applications that showcased my knowledge and utilization of the grid layout and ensuring that all applications are mobile responsive. I also gained an extensive understanding of the DOM and how a document is accessed and manipulated (DOM).",
      Description1:
        "Learned how to utilize the Git command line and the Git workflow to push and pull projects from GitHub. Collaborated with developers to merge code and established coding ethics by inserting pseudo codes and Git commits that details the behavior and purpose of any added updates to joint projects",
      imgSrc: UOT,
      degree: "Full-Stack Certification",
    });
  };

  render() {
    return (
      <section class="eduSec" id="eduSec">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="mtc">
              <span class="highlight">03</span> Education & Certifications
            </h1>
            <hr class="hrt" />

            <ul class="timeline">
              <li>
                <div class="timeline-image">
                  <img
                    class="img-circle img-responsive img-switch"
                    src={umhbImg}
                    alt=""
                  />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>University of Mary-Hardin Baylor</h4>
                    <h5>Computer Information Systems</h5>
                    <h6>August 2015</h6>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div class="line"></div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img
                    class="img-circle img-responsive img-switch"
                    src={UOT}
                    alt=""
                  />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>University of Texas</h4>
                    <h5>Web Development BootCamp</h5>
                    <h6>March 2020</h6>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                </li>
                </ul>
                </div>
                </div>
      </section>
    );
  }
}

export default Education;
