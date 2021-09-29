import React, { useState } from "react";
import Intro from "./components/Intro/Intropart";
import Portfolio from "./components/Portfolio/Portfoliopart";
import Topbar from "./components/Topbar/Topbarpart";
import Works from "./components/Works/Workspart";
// import Testimonials from "./components/Testimonals/Testimonials";
import Contact from "./components/Contact/Contactpart";
import Menu from "./components/menu/Menu";
import "./app.scss"


function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="app">
      <Topbar  openMenu={openMenu} setOpenMenu={setOpenMenu}  />
      <Menu  openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="sections">
      <Intro/>
      <Portfolio />
      <Works />
      {/* <Testimonials /> */}
      <Contact />
      </div>
    </div>
  );
}

export default App;
