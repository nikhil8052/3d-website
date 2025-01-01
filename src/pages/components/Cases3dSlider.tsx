"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Flickity
const FlickityTransformer = dynamic(() => import("flickity-transformer"), { ssr: false });
let Flickity;

if (typeof window !== "undefined") {
  Flickity = require("flickity");
}

const Cases3dSlider = () => {
  useEffect(() => {
    let flkty;

    if (typeof window !== "undefined" && Flickity) {
      // Initialize Flickity
      flkty = new Flickity(".Slider", {
        setGallerySize: false,
        pageDots: false,
        initialIndex: 2, // Start from the middle
        wrapAround: true, // Infinite circular scrolling
      });

      // Add mousewheel scroll functionality
      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        if (event.deltaY > 0) {
          flkty.next(); // Scroll to next item
        } else {
          flkty.previous(); // Scroll to previous item
        }
      };

      document.body.addEventListener("wheel", handleWheel);

      // Add 3D transformations using FlickityTransformer
      new FlickityTransformer(flkty, [
        {
          name: "scale",
          stops: [
            [-300, 0.6],
            [0, 1],
            [300, 0.6],
          ],
        },
        {
          name: "translateY",
          stops: [
            [-300, 100],
            [0, 0],
            [300, 100],
          ],
        },
        {
          name: "rotate",
          stops: [
            [-300, -20],
            [0, 0],
            [300, 20],
          ],
        },
        {
          name: "perspective",
          stops: [
            [0, 1000],
            [1, 1000],
          ],
        },
        {
          name: "rotateY",
          stops: [
            [-300, 45],
            [0, 0],
            [300, -45],
          ],
        },
      ]);

      return () => {
        document.body.removeEventListener("wheel", handleWheel);
        flkty.destroy(); // Clean up Flickity instance
      };
    }
  }, []);

  return (
    <div className="slider-container">
      <div className="Slider">
        <div className="carousel-cell">
          <img src="/img/item1.png" alt="Item 1" className="carousel-image" />
        </div>
        <div className="carousel-cell">
          <img src="/img/item1.png" alt="Item 2" className="carousel-image" />
        </div>
        <div className="carousel-cell">
          <img src="/img/item1.png" alt="Item 3" className="carousel-image" />
        </div>
        <div className="carousel-cell">
          <img src="/img/item1.png" alt="Item 4" className="carousel-image" />
        </div>
        <div className="carousel-cell">
          <img src="/img/item1.png" alt="Item 5" className="carousel-image" />
        </div>
      </div>
    </div>
  );
};

export default Cases3dSlider;
