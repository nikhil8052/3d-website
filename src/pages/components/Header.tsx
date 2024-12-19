// src/components/Header.tsx
"use client"; // Required for client-side rendering in Next.js

import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../assets/img/sitelogo.svg"; // Import the image

const Header: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY; // Get the scroll position
      const header = document.querySelector("header"); // Select the header element

      if (scroll >= 60) {
        header?.classList.add("fixed");
      } else {
        header?.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="main-header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid p-0">
            <a className="navbar-brand" href="/">
              <Image
                src={logo}
                alt="Site Logo"
                className="logo img-fluid"
                width={130} // Adjust the width
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
