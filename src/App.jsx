import React from "react";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Topbar from "./components/Topbar/Topbar";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimonals/Testimonials";
import Contact from "./components/Contact/Contact";
import "./app.scss"


function App() {
  return (
    <div className="app">
      <Topbar />

      <div className="sections">
      <Intro/>
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
      </div>
    </div>
  );
}

export default App;
