"use client";  // Add this at the top

import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <section class="banner  bg-brown py_100">
    <div class="container"  data-aos="fade-up"data-aos-duration="3000">
        <div class="row py-4">
            <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="banner-info-part-1">
                    <div class="info-img">
                    <Image
                className="img-fluid"
                src="/img/tra-img.png"
                alt="Laptop Image"
                width={20}
                height={20}
                style={{ width: "100%", height: "auto" }}
              />
                    </div>
                    <div class="banner-info-2">
                        <a href="">Trailblazer * <span class="Services"> Services</span></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="banner-info-part-2">
                Upraise Your Vision with Our 6 Transformative Services!
                </div>
            </div>
        </div>
        <div class="banner-part-3 ">
            <h1>Design Studio That Brings Innovation to Life!</h1>
        </div>
        <div class="banner-part-4">
            <div class="row fd">
                <div class="col-lg-6  ">
                    <div class="banner-btn">
                        <a href="" class="cta hdr-btn bg-btn">
                            <span className='bg-btn-txt'>Hire Us</span>
                            <span className='bg-btn-txt-btm'>Hire Us</span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6  ">
                    <div class="banner-inner-text">At Trailblazer Innovations, we specialize in transforming ideas into reality with our unparalleled expertise in hardware and software development, mechanical and electrical engineering, industrial and packaging design, manufacturing automation, and mobile app development. Whether you’re a startup or an established enterprise, our services are designed to accelerate innovation and deliver impactful results.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
};

export default HeroBanner;