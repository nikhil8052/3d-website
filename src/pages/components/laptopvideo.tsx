"use client";  // Add this at the top

import React from 'react';
import { Html } from '../../../node_modules/next/document';
import Image from 'next/image';

const LaptopVideo = () => {
  return (

<section className="laptop-img">
        <div className="container">
            <div className="img-laptop">
                {/* <img src="assets/images/laptopimg.png" class="img-fluid" alt="laptop"> */}
                <Image src="/img/laptop-img.png" alt="Laptop Image" width={500} height={300} />
            </div>
        </div>
    </section>


    );
};

export default LaptopVideo;