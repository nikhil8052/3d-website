"use client";  // Add this at the top

import React from 'react';
// import Image from 'next/image';

const HeroBanner = () => {
  return (
    <section class="banner  bg-brown">
    <div class="container">
        <div class="row py-4">
            <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="banner-info-part-1">
                    <div class="info-img">
                    {/* <Image
          src="/images/banner_incl_screen.svg"
          alt="Banner Image"
          width={1920}
          height={300}
        /> */}
                    </div>
                    <div class="banner-info-2">
                        <a href="">Trailblazer * <span class="Services"> Services</span></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="banner-info-part-2">
                    Rejuvenate your fantasy project with one of our 8 far reaching administrations!
                </div>
            </div>
        </div>
        <div class="banner-part-3 ">
            <h1>Design Studio that Brings Creativity to Life!</h1>
        </div>
        <div class="banner-part-4">
            <div class="row fd">
                <div class="col-lg-6  ">
                    <div class="banner-btn">
                        <a href="" class="cta hdr-btn">Hire Us</a>
                    </div>
                </div>
                <div class="col-lg-6  ">
                    <div class="banner-inner-text">
                        Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
};

export default HeroBanner;