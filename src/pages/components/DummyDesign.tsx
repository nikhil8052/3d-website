"use client";
import Image from "next/image";
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DummyDesign = () => {
  const sectionRef = useRef(null);
  const dummyItemsRef = useRef([]);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Select all the dummy list items
    const items = dummyItemsRef.current;

    // Create a GSAP timeline for staggered animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", // Start when the section enters the viewport
        end: "+=5000", // Adjust as needed for the animation duration
        scrub: true, // Smooth scrubbing
        pin: true, // Pin the section during the animation
      },
    });

    // Add each dummy item animation to the timeline
    items.forEach((item, index) => {
      timeline.fromTo(
        item,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1 }
      );
      timeline.to(
        item,
        { y: "-100%", opacity: 0, duration: 1 },
        `+=0.5` // Add a small delay between animations
      );
    });
  }, []);

  return (
    <section
      className="dummy bg-brown py_120 position-relative"
      ref={sectionRef}
    >
      <div className="dummy-list">
        {[
          {
            title: "Hardware Design and Development",
            text: "“Start your journey toward powerful hardware solutions today!”",
          },
          {
            title: "Software and Platform Development",
            text: "“Let us build the software your hardware dreams of!”",
          },
          {
            title: "Mechanical and Electrical Engineering",
            text: "“Solve your most complex engineering needs with Trailblazer!”",
          },
          {
            title: "Industrial & Packaging Design",
            text: "“Create designs that captivate and endure!”",
          },
          {
            title: "Manufacturing Automation and Production",
            text: "“Scale smarter with our production automation expertise!”",
          },
          {
            title: "Mobile App Development",
            text: "“Build an app that transforms how users interact with your products!”",
          },
        ].map((item, index) => (
          <div
            className="dummy-list-items"
            key={index}
            ref={(el) => (dummyItemsRef.current[index] = el)}
          >
            <div className="container">
              <div className="row align-items-center g-4 fd">
                <div className="col-lg-6">
                  <div className="dummy-text-1">{item.text}</div>
                  <div className="dummy-text-2">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="dummy-text-3">
                    <p>
                      We provide innovative solutions tailored to your needs.
                    </p>
                  </div>
                  <div className="dummy-text-4">
                    <a href="#" className="hdr-btn mt_42 text-body">
                      View More
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img-dummy-bg position-absolute top-0 end-0">
                    <div className="inner-dummy-img">
                      <Image
                        className="img-fluid"
                        src="/img/dummyimg.png"
                        alt="Dummy Image"
                        width={1400}
                        height={700}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DummyDesign;
