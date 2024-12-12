"use client"; // Required for Next.js client-side rendering

import React, { useEffect } from "react";
// import "../jquery-global"; // Path to your jQuery global setup
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
// import "slick-carousel";
import Image from "next/image";

const AboutSlider = () => {
  return (
    <section className="about-slider-sec bg-brown">

    <div className="container">

        <div className="slider-width">
            <div className="about-slider">
                <div className="about-slider-items">
                    <div className="box-info-p">
                         <Image 
  className="img-fluid" 
  src="/img/p-1.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="p-info mt-4 d-flex align-items-center">
                        <p className="p-info-1 ">Bence </p>
                        <p className="p-info-2 ">UI/UX Designer</p>
                    </div>
                </div>
                <div className="about-slider-items">
                    <div className="box-info-p">
                         <Image 
  className="img-fluid" 
  src="/img/p-2.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="p-info mt-4 d-flex align-items-center">
                        <p className="p-info-1 ">Bence </p>
                        <p className="p-info-2 ">UI/UX Designer</p>
                    </div>
                </div>
                <div className="about-slider-items">
                    <div className="box-info-p">
                         <Image 
  className="img-fluid" 
  src="/img/p-3.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="p-info mt-4 d-flex align-items-center">
                        <p className="p-info-1 ">Bence </p>
                        <p className="p-info-2 ">UI/UX Designer</p>
                    </div>
                </div>
                <div className="about-slider-items">
                    <div className="box-info-p">
                         <Image 
  className="img-fluid" 
  src="/img/p-1.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="p-info mt-4 d-flex align-items-center">
                        <p className="p-info-1 ">Bence </p>
                        <p className="p-info-2 ">UI/UX Designer</p>
                    </div>
                </div>
                <div className="about-slider-items">
                    <div className="box-info-p">
                         <Image 
  className="img-fluid" 
  src="/img/p-1.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="p-info mt-4 d-flex align-items-center">
                        <p className="p-info-1 ">Bence </p>
                        <p className="p-info-2 ">UI/UX Designer</p>
                    </div>
                </div>
                <div className="about-slider-items">
                    <div className="box-info-p">
                         <Image 
  className="img-fluid" 
  src="/img/p-1.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="p-info mt-4 d-flex align-items-center">
                        <p className="p-info-1 ">Bence </p>
                        <p className="p-info-2 ">UI/UX Designer</p>
                    </div>
                </div>
                <div className="about-slider-items">
                    <div className="box-info-p">
                         <Image 
  className="img-fluid" 
  src="/img/p-1.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="p-info mt-4 d-flex align-items-center">
                        <p className="p-info-1 ">Bence </p>
                        <p className="p-info-2 ">UI/UX Designer</p>
                    </div>
                </div>                
            </div>
        </div>
        </div>
</section>
  );
};

export default AboutSlider;
