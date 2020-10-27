import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import PopularPlaces from "./PopularPlaces";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { GoogleLogin } from "react-google-login";
// import { PostData } from "../service/PostData";
import {} from "react-router-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false,
    };
    // this.signup = this.signup.bind(this);
  }
  state = {
    sign: false,
    login: false,
  };

  onOpenModal = () => {
    console.log("The link was clicked.");
    this.setState({ sign: true });
  };

  onOpenModalLogin = () => {
    this.setState({ login: true });
  };

  onCloseModal = () => {
    this.setState({ sign: false });
  };

  onCloseModalclose = () => {
    console.log("Time to close the modal");
    this.setState({ login: false });
  };

  render() {
    //Used  GoogleAPIs to get the clientId
    const clientId =
      "578904471981-5iroqee5vr23v97odtfo5ueuta2p4na3.apps.googleusercontent.com";

    if (this.state.redirect) {
      return <Redirect exact from="/home" to="/locationfeed" />;
    }
    const onSuccess = (res) => {
      console.log("[Login Success] currentUser:", res.profileObj);
      // this.signup(res, "google");
      console.log("Time to close the modal");
      this.onCloseModalclose();

      this.setState({ redirect: true });

    };

    const onFailure = (res) => {
      console.log("[Login Failed] res:", res);
    };
    const { login, sign } = this.state;

    return (
      <Router>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          id="mainNav"
        >
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
                    href="share"
                  >
                    share
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=" nav-link m-2 menu-item nav-active js-scroll-trigger"
                    href="about"
                  >
                    about
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="collapse navbar-collapse flex-grow-1 text-right"
              id="navbarResponsive"
            >
              <ul className="navbar-nav  text-uppercase ml-auto flex-nowrap ">
                <li className="nav-item">
                  <button
                    className="btn btn-signup js-scroll-trigger
                    "
                    id="signup"
                    onClick={this.onOpenModal}
                  >
                    SignUp
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-login js-scroll-trigger"
                    id="login"
                    type="button"
                    onClick={this.onOpenModalLogin}
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead">
          <div className="container">
            <div className="masthead-heading text-uppercase">
              Destination Spotter
            </div>

            <SearchBar></SearchBar>

            <div className="masthead-subheading text-bold ">
              Share, Visit, Discover!
            </div>

            <PopularPlaces> </PopularPlaces>
            <br></br>
            <div>
              <a
                className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href="about"
              >
                Tell me more
              </a>
            </div>
          </div>
        </header>
        <Modal open={sign} onClose={this.onCloseModal} center>
          <div className="modal-body">
            <h2>
              Let's Get Started <span> To Explore!</span>
            </h2>
            <span className="subtitle">Sign up to create new account.</span>
            <form
              className="contact-form form-validate3"
              noValidate="novalidate"
            >
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First Name"
                  required=""
                  autoComplete="off"
                  aria-required="true"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required=""
                  autoComplete="off"
                  aria-required="true"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="pass"
                  className="form-control"
                  placeholder="Password"
                  required=""
                  autocomplete="off"
                  aria-required="true"
                />
              </div>
              <input
                className="btn btn-md btn-primary btn-center"
                id="sign_up"
                type="button"
                value="Sign Up"
              />
            </form>
          </div>
        </Modal>
        <Modal open={login} onClose={this.onCloseModalclose} center>
          <div className="modal-body">
            <div className="modal-header">
              <h2>
                Login and Get <span>Started</span>
              </h2>
            </div>
            <form
              className="contact-form form-validate4"
              noValidate="novalidate"
            >
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required=""
                  autocomplete="off"
                  aria-required="true"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="pass"
                  className="form-control"
                  placeholder="Password"
                  required=""
                  autocomplete="off"
                  aria-required="true"
                />
              </div>
              <div>
                <input
                  className="btn btn-md btn-primary btn-center"
                  id="login_btn"
                  type="button"
                  value="Login"
                />
              </div>
            </form>
            <br></br>

            {/* GoogleLogin */}
            <div>
              <GoogleLogin
                clientId={clientId}
                buttonText="Login With Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                style={{ marginTop: "100px" }}
                isSignedIn={false}
              />
            </div>
          </div>
        </Modal>
      </Router>
    );
  }
}

export default Home;
