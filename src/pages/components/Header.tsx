// src/components/Header.tsx
import React from "react";
import Image from "next/image";
import logo from "../assets/img/sitelogo.svg"; // Import the image

const Header: React.FC = () => {
  return (
    <header id="header" className="main-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid p-0">
            <a className="navbar-brand" href="#">
              <Image
                src={logo}
                alt="Site Logo"
                className="logo img-fluid"
                width={150} // Adjust the width
                height={50} // Adjust the height
                priority // Ensures this image is preloaded
              />
            </a>
            <div className="nav-button">
              <button className="nav-btn rounded">
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
              <a href="#" className="cta hdr-btn">
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
