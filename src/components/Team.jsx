import React from "react";

export default () => {
  return (
    <section className="page-section bg-light" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">
            Our team combines creative, technical, and stragic talents.
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
              <p className="text-muted">UI/UX Designer</p>
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
                src={require("../assets/img/shahar.JPG")}
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
    </section>
  );
};
