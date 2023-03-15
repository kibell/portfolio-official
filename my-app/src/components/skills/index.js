import React, { Component } from "react";
import "./style.css";
import "../../utilities.css";

class Skills extends Component {
  render() {
    return (
      <section class="skillSec" id="skillSec">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="mtc">
              <span class="highlight">03</span> Skills
            </h1>
            <hr class="hrt mb-2" />
        
            <div className="row">
              <div className="col-md-6">
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-html"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span class="progress-type">HTML / HTML5</span>
                  <span class=" progress-completed">9.5/10</span>
                </div>

                <div class="progress mt-3">
                  <div
                    class="progress-bar progress-bar-css"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span class="progress-type">CSS</span>
                  <span class=" progress-completed">9/10</span>
                </div>

                <div class="progress mt-3">
                  <div
                    class="progress-bar progress-bar-js"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span class="progress-type">JavaScript</span>
                  <span class=" progress-completed">8.5/10</span>
                </div>

                <div class="progress mt-3">
                  <div
                    class="progress-bar progress-bar-react"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span class="progress-type">React</span>
                  <span class=" progress-completed">6.5/10</span>
                </div>

                <div class="progress mt-3">
                  <div
                    class="progress-bar progress-bar-python"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span class="progress-type">Python</span>
                  <span class=" progress-completed">5/10</span>
                </div>
               
              </div>

              <div class="col-md-6">
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-git"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span class="progress-type">Git Bash</span>
                  <span class=" progress-completed">8/10</span>
                </div>

                
                
                <div class="progress mt-3">
                  <div
                    class="progress-bar progress-bar-asp"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span class="progress-type">ASP.net</span>
                  <span class=" progress-completed">4/10</span>
                </div>

                <div class="progress mt-3">
                  <div
                    class="progress-bar progress-bar-sql"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span class="progress-type">Microsoft SQL</span>
                  <span class=" progress-completed">7.5/10</span>
                </div>


                <div class="progress mt-3">
                  <div
                    class="progress-bar progress-bar-adobe"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span class="progress-type">Adobe XD</span>
                  <span class=" progress-completed">5/10</span>
                </div>

                <div class="progress mt-3">
                  <div
                    class="progress-bar progress-bar-wp"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span class="progress-type">WordPress</span>
                  <span class=" progress-completed">8/10</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
