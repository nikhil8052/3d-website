"use client";  // Add this at the top

import React from 'react';
// import { Html } from '../../../node_modules/next/document';
import Image from 'next/image';

const ImageTextGrid = () => {
  return (

    <section className="question  bg-brown">
    <div className="container">
        <div className="info-box">
            <div className="row mb_67">
                <div className="col-lg-6 ">
                    <div className="box-imgpara d-flex">
                        <div className="img-part">
                        <Image 
  className="img-fluid" 
  src="/img/laptop-img.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} 
/>
                        </div>
                        <div className="info-detail">
                            <div className="info-h5">
                                <h5 >Reasonable evaluating strategy suits all clients</h5>
                            </div>
                            <div className="info-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla
                                pariatur.</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div className="box-imgpara d-flex">
                        <div className="img-part">
                        <Image 
  className="img-fluid" 
  src="/img/laptop-img.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} 
/>
                        </div>
                        <div className="info-detail">
                            <div className="info-h5">
                                <h5 >Reasonable evaluating strategy suits all clients</h5>
                            </div>
                            <div className="info-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla
                                pariatur.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 ">
                    <div className="box-imgpara d-flex">
                        <div className="img-part">
                        <Image 
  className="img-fluid" 
  src="/img/laptop-img.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} 
/>
                        </div>
                        <div className="info-detail">
                            <div className="info-h5 pb_0">
                                <h5>Reasonable evaluating strategy suits all clients</h5>
                            </div>
                            <div className="info-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla
                                pariatur.</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div className="box-imgpara d-flex">
                        <div className="img-part">
                        <Image 
  className="img-fluid" 
  src="/img/laptop-img.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} 
/>
                        </div>
                        <div className="info-detail">
                            <div className="info-h5">
                                <h5>Reasonable evaluating strategy suits all clients</h5>
                            </div>
                            <div className="info-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla
                                pariatur.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    );
};

export default ImageTextGrid;