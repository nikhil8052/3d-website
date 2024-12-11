"use client"; // Required for Next.js if using client-side features

import React, { useEffect } from "react";
import $ from "jquery";
// import "slick-carousel"; // Import Slick Carousel
import Image from "next/image";

const NeedSlider = () => {

  useEffect(() => {
    const slider = $(".slider");
    const $progressBar = $(".progress-bar");
    const $progressBarLabel = $(".slider__label");

    // Initialize Slick Slider
    // $slider.slick({
    //   slidesToShow: 2,
    //   slidesToScroll: 1,
    //   speed: 400,
    //   responsive: [
    //     {
    //       breakpoint: 575,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         infinite: true,
    //       },
    //     },
    //     {
    //       breakpoint: 767,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         infinite: true,
    //       },
    //     },
    //     {
    //       breakpoint: 991,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         infinite: true,
    //       },
    //     },
    //   ],
    // });

    // Handle progress bar updates
    // $slider.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
    //   const calc = (nextSlide / (slick.slideCount - 1)) * 100;

    //   $progressBar
    //     .css("width", `${calc}%`)
    //     .attr("aria-valuenow", calc);

    //   $progressBarLabel.text(`${Math.round(calc)}% completed`);
    // });

  }, []);

  return (
    <section className="understand pt_134 background">
      <div className="container">
        <div className="need-box pb_56">
          <h2>Need to understand our clients' opinion on working with us?</h2>
        </div>
      </div>
      <div className="content">
        <div className="slider">
          {[...Array(5)].map((_, index) => (
            <div className="slider-w" key={index}>
              <div className="image">
                <div className="img-box-child-1">
                  <Image
                    className="img-fluid"
                    src="/img/laptop-img.png"
                    alt="Laptop Image"
                    width={1400}
                    height={700}
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
                          src="/img/laptop-img.png"
                          alt="Laptop Image"
                          width={1400}
                          height={700}
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
    </section>
  );
};

export default NeedSlider;
