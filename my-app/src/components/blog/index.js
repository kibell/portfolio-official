import React, { Component } from "react";
import KBimg from "../../images/blog.json";
import { FaArrowDown } from "react-icons/fa";
import Lottie from "lottie-react";
import "./styles.css";
import "../../utilities.css";

class Blog extends Component {
  render() {
    return (
      <section className="blog" id="blog">
        <div className="row" id="blogSec"></div>

        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 animate__animated animate__bounceInLeft animate__slower">
            <h1 className="mtc">
              <span className="highlight mr">06</span>Blogs
            </h1>

            <hr className="hrt mb-5" />

            <p>
              Check out my recent blogs{" "}
              <span className="highlight"> Lorem </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <button className="theme-btn">
              {" "}
              <a
                href="https://bellsproutdesigns.com/blog/"
                rel="noreferrer"
                target="_blank"
              >
                Read Blogs{" "}
              </a>{" "}
            </button>
          </div>

          {/* <img className="mypic col-lg-5 col-md-12 col-sm-4 animate__animated animate__bounceInRight animate__slower" src={KBimg}  alt=""/> */}
          <Lottie animationData={KBimg} loop={true} />
        </div>
      </section>
    );
  }
}

export default Blog;
