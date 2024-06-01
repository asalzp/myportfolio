import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import Entertainment from "./pages/Entertainment";
import Contact from "./pages/Contact";

function App() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navRef = useRef(null);

  const handleNavLinkClick = () => {
    setIsNavCollapsed(true); // Collapse the navbar
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse navbar-items ${
            isNavCollapsed ? "collapse" : "show"
          }`}
          id="navbarNav"
          ref={navRef}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleNavLinkClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleNavLinkClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={handleNavLinkClick}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#entertainment" onClick={handleNavLinkClick}>
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleNavLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/myportfolio/" element={<Home />} />
        <Route path="/myportfolio/about" element={<About />} />
        <Route path="/myportfolio/entertainment" element={<Entertainment />} />
        <Route path="/myportfolio/projects" element={<Project />} />
        <Route path="/myportfolio/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
