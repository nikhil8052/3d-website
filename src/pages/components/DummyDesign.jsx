"use client";  // Add this at the top

import React from 'react';
import { Html } from '../../../node_modules/next/document';
import Image from 'next/image';

const DummyDesign = () => {
  return (

<section class="dummy  background py_120 position-relative">
        <div class="container">
            <div class="row align-items-center g-4 fd">
                <div class="col-lg-6">
                    <div class="dummy-text-1">
                        "Plan Your Vision Online with Our Website architecture Administrations"
                    </div>
                    <div class="dummy-text-2">
                        <h2>Dummy Deisgn</h2>
                    </div>
                    <div class="dummy-text-3">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.
                    </div>
                    <div class="dummy-text-4">
                        <a href="" class="hdr-btn mt_42 text-body">
                            <span class="arrow"><i class="fa-solid fa-chevron-right"></i></span>
                            View More
                        </a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="img-dummy-bg position-absolute top-0 end-0 ">
                        <div class="inner-dummy-img">
                        <Image 
  className="img-fluid" 
  src="/img/laptop-img.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} 
/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    );
};

export default DummyDesign;