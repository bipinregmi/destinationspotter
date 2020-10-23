// This is Navigation that will after the user logged in
import React from "react";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
// import SearchBar from "./SearchBar";

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
      <div className="d-flex flex-grow-1">
        <a className="navbar-brand" href="home">
          <h5 className="logoName">Destination Spotter</h5>
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
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

        <div
          className="collapse navbar-collapse flex-grow-1 text-left"
          id="navbarResponsive"
        >
          <ul className="navbar-nav  text-uppercase mr-auto ">
            <li className="nav-item">
              <a
                className=" nav-link m-2 menu-item nav-active js-scroll-trigger"
                href="home"
              >
                home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link m-2 menu-item nav-active js-scroll-trigger"
                href="#explore"
              >
                explore
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link m-2 menu-item nav-active js-scroll-trigger"
                href="#share"
              >
                share
              </a>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse flex-grow-1 text-right"
          id="navbarResponsive"
        >
          <div>
            <InputGroup size="md" style={{ width: "720px" }}>
              <FormControl
                placeholder="Search for a Place/Zip Code/ City"
                aria-label="SearchPlace"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <a
                  className="btn btn-info btn-md text-uppercase js-scroll-trigger"
                  href="#search"
                >
                  Search
                </a>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a className="nav-link js-scroll-trigger" href="profile">
                <img
                  className="rounded-circle"
                  src={require("../assets/img/bg-header.jpg")}
                  alt=""
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 150 / 2,
                  }}
                />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
  );
};
