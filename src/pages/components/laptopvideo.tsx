"use client"; // Add this at the top

import React from 'react';
import Image from 'next/image';

const LaptopVideo = () => {
  return (
    <section className="laptop-img-sec">
      <div className="container" data-aos="fade-up">
        <div className="laptop-img-wrapper">
          <Image 
            className="img-fluid frame-image" 
            src="/img/lapotpframe.png" 
            alt="Laptop Image" 
            width={1400} 
            height={700}
          />
          <iframe 
            className="video-p2" 
            src="https://www.youtube.com/embed/lr1L_xUKB1E?si=QYWodvcaXRFeXVwO&amp;start=65" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen 
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LaptopVideo;
