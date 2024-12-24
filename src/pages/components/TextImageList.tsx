"use client";

import React from "react";
import Image from "next/image";

const TextImageList = ({ items }) => {
  return (
    <section className="text-image-list-design bg-brown pb_100">
          {items.map((item, index) => (
      <div className="container-fluid hrv position-relative">
        <div className="container">        
            <div key={index} className="row py_58">
              <div className="col-lg-3">
                <div className="col-inner-h ct">
                  <h6 className="ct">{item.title}</h6>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="col-inner-h ct col-innner-img">
                  <div className="dimmy-img">
                    <Image
                      className="img-fluid"
                      src={item.imageUrl}
                      alt={item.title}
                      width={1400}
                      height={700}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row-info">
                  <div className="r-info-1 ct">
                    <p className="m-0">{item.description}</p>
                  </div>
                  <div className="dummy-text-4 mt_58 ml_18">
                    <div className="view-more-btn">
                      <a href={item.ctaLink} className="hdr-btn mt_40 text-body">
                        <span className="arrow">
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                        <span className="view-more-txt">
                          <span className="view-more-txt-upr">View More</span>
                          <span className="view-more-txt-btm">View More</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>         
        </div>
      </div>
       ))}
    </section>
  );
};

export default TextImageList;
