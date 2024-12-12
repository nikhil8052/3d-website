"use client"; // Required for Next.js client-side rendering

import React, { useEffect } from "react";
// import "../jquery-global"; // Path to your jQuery global setup
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
// import "slick-carousel";
import Image from "next/image";

const NeedSlider = () => {
  return (
    <section className="understand pt_120 bg-brown">
      <div className="container">
      <div className="content">
      <div className="need-box mb-50">
          <h2>Need to understand our clients' opinion on working with us? </h2>
        </div>
        <div className="need-slider">
          {[...Array(5)].map((_, index) => (
            <div className="slider-w" key={index}>
              <div className="need-slider-box">
                <div className="img-box-child-1">
                  <Image
                    className="img-fluid"
                    src="/img/two-box.png"
                    alt="Laptop Image"
                    width={30}
                    height={20}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="img-box-child-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
                <div className="img-box-child-3 pt_12 d-flex justify-content-between align-items-center gap-3">
                  <div className="box-3part-1">
                    <div className="box-3-child-1 d-flex justify-content-between align-items-center gap-2">
                      <div className="vrglass">
                        <Image
                          className="img-fluid"
                          src="/img/circle-person.jpg"
                          alt="Laptop Image"
                          width={50}
                          height={50}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="text-box-3">Bence Peeters</div>
                    </div>
                  </div>
                  <div className="box-3part-2">
                    <div className="box-p-1">
                      <p className="pa-1 m-0">Lorem Ipsum</p>
                    </div>
                    <div className="box-p-2 ms-auto">
                      <div className="pa-2">Founder</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "0%" }}
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span className="slider__label sr-only"></span>
          </div>
        </div>
      </div>
        
      </div>
     
    </section>
  );
};

export default NeedSlider;
