import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/css/styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";
import Feed from "./components/Feed";
import SavedGallery from "./components/savedGallery"
import SharedGallery from "./components/sharedGallery"
import Profile from "./components/Profile";
import MainNavAfterLogin from "./components/MainNavAfterLogin";

ReactDOM.render(
  <BrowserRouter>
    <Route
      exact
      path="/locationfeed"
      strict
      render={() => {
        return <div><Feed></Feed></div>;
      }}
    />

    <Route
    exact
      path="/home" 
      strict
      render={() => {
        return <App />;
      }}
    />

    <Route
      exact
      path="/About"
      strict
      render={() => {
        return <About />;
        
      }}
    />

<Route
      exact
      path="/share"
      strict
      render={() => {
        return <div>
          <h1> This is Share pg.</h1>
        </div>;
        
      }}
    />
    <Route
      exact
      path="/explore"
      strict
      render={() => {
        return <div>



          <h1> This is explore pg.</h1>
        </div>;
        
      }}
    />
    <Route
      exact
      path="/profile"
      strict
      render={() => {
        return(
        <div>
        
          <MainNavAfterLogin></MainNavAfterLogin>
          <Profile></Profile>
          <br></br>

          <section className="float-left" style={{width:"50%",padding:"3px"}}>
            <div>
            <SavedGallery> </SavedGallery>

          </div>
          </section>

          <section className="float-right" style={{width:"50%", padding:"3px"}}>
            <div>
            <SharedGallery> </SharedGallery>

          </div>
          </section>
         


        </div>);
        
      }}
    />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
