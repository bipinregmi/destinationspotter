import React from "react";
// import "font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";

export default () => {
  return (
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
              Share the places you visited so that others know about the hidden
              gem.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-location-arrow fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Visit</h4>
            <p className="text-muted">
              You can visit new places around you after poeple posts pictures of
              that place.
            </p>
          </div>

          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-globe  fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Discover </h4>
            <p className="text-muted">
              Discover many other places from place of the day, week and month
              and many more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
