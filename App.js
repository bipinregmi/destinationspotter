import React from "react";
import "./App.css";
import MainNav from "./components/MainNav";
import SearchBar from "./components/SearchBar";
import PopularPlaces from "./components/PopularPlaces";
import Features from "./components/features";
import Team from "./components/Team";

function App() {
  return (
    <div classNameName="App">
      <MainNav></MainNav>

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
              href="#features"
            >
              Tell me more
            </a>
          </div>
        </div>
      </header>

      <Features> </Features>

      <Team> </Team>

      <footer className="footer py-4">
        <div className="row">
          <div className="col-lg-6 "> Copyright © Destination Spotter 2020</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
