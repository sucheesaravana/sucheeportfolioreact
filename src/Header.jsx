import React, { useState } from "react";
import "./Headernew.css";
import logo from "./assets/sucheeimage2.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaDownload,
  FaArrowDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="header">
          <h1 className="name">Suchee Devi</h1>

          {/* Mobile Menu Icon */}
          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navigation */}
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="section">
        <div className="section-container">

          {/* Left */}
          <div className="content">

            <p className="subtitle1">
              Hello, Welcome to My Portfolio
            </p>

            <h1 className="title">
              I'm <span>Suchee Devi</span>
            </h1>

            <h2 className="typing-text">
              Python Full Stack Developer
            </h2>

            <div className="hero-info">

              <div className="info-card">
                <FaLaptopCode className="info-icon" />
                <span>React • Django • Python</span>
              </div>

              <div className="info-card">
                <FaMapMarkerAlt className="info-icon" />
                <span>Tamil Nadu, India</span>
              </div>

            </div>

            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Python</span>
              <span>Django</span>
              <span>MySQL</span>
              <span>Bootstrap</span>
              <span>Git</span>
            </div>

            <div className="active-buttons">
              <a href="#contact" className="hirebutton">
                Hire Me
              </a>

              <a href="/SujiRESUME.pdf" download>
                <button className="cvbutton">
                  <FaDownload />
                  &nbsp; Download CV
                </button>
              </a>
            </div>

            <div className="social-icons">
              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/suchee-devi/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="scroll-down">
              <a href="#about">
                <FaArrowDown />
                <span> Scroll Down</span>
              </a>
            </div>

          </div>

          {/* Right */}
          <div className="home-img">
            <div className="img-box">
              <div className="Image">
                <img src={logo} alt="Suchee Devi" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Header;