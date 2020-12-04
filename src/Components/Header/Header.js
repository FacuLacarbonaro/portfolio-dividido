import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__description">
        <h2>Hello. I'm a Frontend Developer</h2>

        <p>
          My name’s Facundo. I craft user interfaces using
          <br />
          modern frontend web technologies.
        </p>
      </div>
      <div className="header__button">
        <a href="mailto:faculacarbonaro@gmail.com">
          <button>Let's work toghether! Contact me</button>
        </a>
      </div>
      <div className="header__links">
        <p>
          Find me at
          <a
            style={{
              marginLeft: "3px",
              marginRight: "5px",
              textDecoration: "none",
              color: "white",
            }}
            href="https://github.com/FacuLacarbonaro"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          ,
          <a
            style={{
              marginLeft: "3px",
              marginRight: "5px",
              textDecoration: "none",
              color: "white",
            }}
            href="https://www.linkedin.com/in/facundo-lacarbonaro-b1767116a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          and
          <a
            style={{
              marginLeft: "3px",
              marginRight: "5px",
              textDecoration: "none",
              color: "white",
            }}
            href="https://www.instagram.com/cufala"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
        <span>
          <a
            href="../../assets/facuLacarbonaroResume.pdf"
            download
            style={{
              marginRight: "5px",
              textDecoration: "none",
              color: "white",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
          my resume (PDF)
        </span>
      </div>
    </header>
  );
};

export default Header;
