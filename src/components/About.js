import React, { Component } from "react";
import "../assets/css/styles1.css";

class About extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="d-flex flex-grow-1">
            <span class="w-100 d-lg-none d-block"></span>
            <a className="navbar-brand" href="home">
              <h5 className="logoName">Destination Spotter</h5>
            </a>
            <div class="w-100 text-right">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div
            class="collapse navbar-collapse flex-grow-1 text-right"
            id="myNavbar"
          >
            <ul class="navbar-nav ml-auto flex-nowrap">
              <li class="nav-item">
                <a href="home" class="nav-link m-2 menu-item nav-active">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#features" class="nav-link  m-2 menu-item">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a href="#team" class="nav-link  m-2 menu-item">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link  m-2 menu-item">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="page-section" id="features">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Features</h2>
              <h3 className="section-subheading text-muted">
                Our goal is to give our users the ability to share, visit, and
                discover little gems in their immediate vicinity and increase
                accessibility to the hidden outdoor spots.
              </h3>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-share-square fa-stack-1x fa-inverse"></i>
                  {/* <i className="fa fa-laptop fa-stack-1x fa-inverse"></i> */}
                </span>
                <h4 className="my-3"> Share </h4>
                <p className="text-muted">
                  Share the places you visited so that others know about the
                  hidden gem.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i class="fa fa-location-arrow fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Visit</h4>
                <p className="text-muted">
                  You can visit new places around you after poeple posts
                  pictures of that place.
                </p>
              </div>

              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-globe  fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Discover </h4>
                <p className="text-muted">
                  Discover many other places from place of the day, week and
                  month and many more.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Our Amazing Team
              </h2>
              <h3 className="section-subheading text-muted">
                Our team combines creative, technical, and strategic talents.
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={require("../assets/img/bg-header.jpg")}
                    alt=""
                  />
                  <h4>James Gammon</h4>
                  <p className="text-muted">UI/UX Designer, Developer</p>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-facebook-f fa-lg"></i>
                  </a>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-linkedin-square fa-lg"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={require("../assets/img/bg-header.jpg")}
                    alt=""
                  />
                  <h4>Herbert Gutierrez</h4>
                  <p className="text-muted">UI/UX Designer, Developer</p>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-facebook-f fa-lg"></i>
                  </a>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-linkedin-square fa-lg"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={require("../assets/img/bg-header.jpg")}
                    alt=""
                  />
                  <h4>Shahar Kadoch</h4>
                  <p className="text-muted">Lead Designer</p>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-facebook-f fa-lg"></i>
                  </a>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-linkedin-square fa-lg"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={require("../assets/img/bipin.jpg")}
                    alt=""
                  />
                  <h4>Bipin Regmi</h4>
                  <p className="text-muted">Lead Developer</p>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-facebook-f fa-lg"></i>
                  </a>
                  <a className="btn btn-dark btn-social mx-2" href="#!">
                    <i className="fa fa-linkedin-square fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        <section className="page-section bg-light" id="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Here is the way to contact us.{" "}
              </h3>
            </div>
            <form id="myform">
              <input
                name="name"
                type="text"
                class="feedback-input"
                placeholder="Name"
                style={{ width: "420px" }}
              />
              <input
                name="email"
                type="text"
                class="feedback-input"
                placeholder="Email"
                style={{ width: "420px" }}
              />
              <textarea
                name="text"
                class="feedback-input"
                placeholder="Comment"
                style={{ width: "420px" }}
              ></textarea>
              <input type="submit" value="SUBMIT" />
            </form>
          </div>
        </section>
        <footer className="footer py-4">
          <div className="row">
            <div className="col-lg-6 ">
              {" "}
              Copyright © Destination Spotter 2020
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default About;
