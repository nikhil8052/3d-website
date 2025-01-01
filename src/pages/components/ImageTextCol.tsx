"use client";  // Add this at the top

import React from 'react';
// import { Html } from '../../../node_modules/next/document';
import Image from 'next/image';


const ImageTextCol = ({ subtitle, description, features ,imageUrl ,disheading ,distext }) => {
  return (

    <section className="ImageTextCol-sec  bg-brown">
    <div className="container">
        <div className="ImageTextCol-img" data-aos="fade-up">
        <Image 
  className="img-fluid" data-aos="fade-up"
  src={imageUrl}
  alt="Image"  width={1440} height={800}
  style={{ width: '100%', height: 'auto' }} 
/>
        </div>
        <div className="info-box" >
            <div className="row">
                <div className="col-lg-6">
                <div className="dol-content-hd-txt" data-aos="fade-up">
                                <h4 className="pc_family b_col">{subtitle}</h4>                                
                            </div>
                </div>
                <div className="col-lg-6">
                <div className="dol_list row">
                    <div className="image-text-col-dis" data-aos="fade-up">
                    <p className="mb-2">{description}</p>
                    {/* <p className="mb-2"><span>{disheading}</span>{distext}</p> */}
                    </div>
                                {features?.length > 0 && features.map((featureGroup, index) => (
                                    <div key={index} className="col-lg-6">
                                        <ul className="mb-0 list-ul-img dol_list-ul" data-aos="fade-up">
                                            {featureGroup.map((feature, idx) => (
                                                <li key={idx} className="b_col">{feature}</li>
                                            ))}
                                        </ul>   
                                    </div>
                                ))}
                            </div> 
                </div>
            </div>                            
        </div>
    </div>
</section>


    );
};

export default ImageTextCol;