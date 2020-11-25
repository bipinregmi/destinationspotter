// This is Navigation that will after the user logged in
import React from "react";
import SearchBar from "./SearchBar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {logout } from './Home';
import index from '../index';
function MainNavAfterLogin (user) {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
        <div className="d-flex flex-grow-1">
          <a className="navbar-brand" href="home">
            <h5 className="logoName">Destination Spotter</h5>
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

          <div
            className="collapse navbar-collapse flex-grow-1 text-left"
            id="navbarResponsive"
          >
            <ul className="navbar-nav  text-uppercase mr-auto ">
              <li className="nav-item">
                <a
                  className=" nav-link m-2 menu-item nav-active js-scroll-trigger"
                  href="home" disabled="true"
                >
                  home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link m-2 menu-item nav-active js-scroll-trigger"
                  href="explore"
                >
                  explore
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link m-2 menu-item nav-active js-scroll-trigger"
                  href="share"
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

            <SearchBar></SearchBar>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">

                <a className="nav-link js-scroll-trigger" href="profile" >
                  <img
                    className="rounded-circle"
                    src={require("../assets/img/bg-header.jpg")}
                    alt=""
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 150 / 2,
                    }}
                    
                  />
                  <index></index>
                </a>
                {/* <select className="drop-down">
                  <option selected></option>
                  <option value="1">My Profile</option>
                  <option value="2">Logout</option>
                </select> */}
              
              
              </li>
              <li className ="nav-item">
              <button
                      className="btn btn-login js-scroll-trigger"
                      id="login"
                      type="button"
                      onClick={logout}
                      >
                      Logout
                    </button>
              </li>
            </ul>
          </div>
        </div>

      </nav>


   
  );
};

export default MainNavAfterLogin;