import React from "react";

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <h5 className="logoName">Destination Spotter</h5>
          {/* <img src="navbar-logo.svg" alt="" /> */}
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fa fa-bars ml-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#features">
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#features">
                features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#signIn">
                Sign-in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
