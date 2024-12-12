"use client";  // Add this at the top

import React from 'react';
import Image from 'next/image';

const FullVideo = () => {
  return (

<section className="laptop-img bg-brown">
        <div className="container-fluid">
            <div className="img-laptop">
                {/* <img src="assets/images/laptopimg.png" class="img-fluid" alt="laptop"> */}
                <Image 
  className="img-fluid" 
  src="/img/full-video.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} 
/>
            </div>
        </div>
    </section>


    );
};

export default FullVideo;