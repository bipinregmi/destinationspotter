import React, { useEffect, useState } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import PopularPlaces from "./PopularPlaces";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { GoogleLogin } from "react-google-login";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { auth } from "../service/firebase";
import '../assets/css/styles1.css';
import Feed from './Feed';


function Home() {
    //Used  GoogleAPIs to get the clientId
    const clientId = "578904471981-5iroqee5vr23v97odtfo5ueuta2p4na3.apps.googleusercontent.com";
    const [openLogin, setOpenLogin] = useState(false);
    const [open, setOpen] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [user, setUser] =useState(null);



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user has logged in
        // console.log(authUser);
        setUser(authUser);
      }
      else{
        //user has logged out
        setUser(null);
      }
    })
    return () =>{
      //Perform some cleanup actions
      unsubscribe();
    }
  }, [user, username]);

    const signUp = (event) => {
      event.preventDefault();

      auth
      .createUserWithEmailAndPassword(email,password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName : username
        })
      })
      .catch((error) => alert(error.message))
     setOpen(false);
    }

    const login = (event) => {
      event.preventDefault();

      auth.signInWithEmailAndPassword(email,password)
      .catch((error) => alert(error.message))

      setOpenLogin(false);
    }

   


 
    
      if (user ){
        // return <Redirect exact from="/home" to="/locationfeed" />;
       return  <Feed user={user} />        
      }
     
    
    const onSuccess = (res) => {
      console.log("[Login Success] currentUser:", res.profileObj);

      return <Redirect 
       to={{pathname: "/locationfeed",
      }}  />;

    };
    const onFailure = (res) => {
      console.log("[Login Failed] res:", res);
    };

   

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
                  onClick={()=>setOpen(true)}
                >
                  SignUp
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-login js-scroll-trigger"
                  id="login"
                  type="button"
                  onClick={()=>setOpenLogin(true)}
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
      <Modal open={open} onClose={()=> setOpen(false)} center>
        <div className="modal-body">
          <center>
          <h5 className="logoName" style ={{fontSize :"30px", padding :"15px" }}>Destination Spotter</h5>
          </center>
          <h2>
            Let's Get Started <span> To Explore!</span>
          </h2>
          
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
                placeholder="Username"
                required=""
                autoComplete="off"
                aria-required="true"
                value = {username}
                onChange = {(e) => setUsername(e.target.value)}
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
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="pass"
                className="form-control"
                placeholder="Password"
                required=""
                autoComplete="off"
                aria-required="true"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              className="btn btn-md btn-primary btn-center"
              id="sign_up"
              type="submit"
              value="Sign Up"
              onClick = {signUp}
            />
          </form>
        </div>
      </Modal>
      <Modal open={openLogin} onClose={()=> setOpenLogin(false)} center>
        <div className="modal-body">
        <center>
          <h5 className="logoName" style ={{fontSize :"30px", padding :"15px" }}>Destination Spotter</h5>
          </center>
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
                autoComplete="off"
                aria-required="true"
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="pass"
                className="form-control"
                placeholder="Password"
                required=""
                autoComplete="off"
                aria-required="true"
                value={password}
                onChange = {(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                className="btn btn-md btn-primary btn-center"
                id="login_btn"
                type="button"
                value="Login"
                onClick={login}
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

const logout= () => {
  
  auth.signOut();
  console.log(auth.currentUser)
  return <Redirect to="/home" push={true}/>;
}

export {Home, logout};
