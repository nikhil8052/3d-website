"use client";

import React from "react";
import Image from "next/image";

const HeroBanner = ({
  imageUrl,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  additionalText,
  currentpage,
}) => {
  return (
    <section className="banner bg-brown py_100">
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="banner-info-part-1" data-aos="fade-up">
              <div className="info-img">
                <Image
                  className="img-fluid"
                  src={imageUrl}
                  alt="Hero Image"
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="banner-info-2">
                <a href="/">
                  Trailblazer * <span className="Services">{currentpage}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="banner-info-part-2" data-aos="fade-up">
              {subtitle}
            </div>
          </div>
        </div>
        <div className="banner-part-3" data-aos="fade-up">
          <h1>{title}</h1>
        </div>
        <div className="banner-part-4">
          <div className="row fd">
            <div className="col-lg-6">
              <div className="banner-btn" data-aos="fade-up">
                <a href={ctaLink} className="cta hdr-btn bg-btn">
                  <span className="bg-btn-txt">{ctaText}</span>
                  <span className="bg-btn-txt-btm">{ctaText}</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-inner-text" data-aos="fade-up">
                {description}
              </div>
            </div>
          </div>
        </div>
        <div className="banner-footer-text" data-aos="fade-up">
          {additionalText}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
