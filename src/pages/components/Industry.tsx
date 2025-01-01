"use client"; // Add this at the top
import React from 'react';
import Image from 'next/image';

const Industry = ({ title, subtitle, description, imageUrl, ctaLink, features }) => {
    return (
        <section className="dol_sec bg-brown">
            <div
                className="container pt_50 pb_50"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-back"
            >
                <div className="dol_hd b_col mb-50" data-aos="fade-up">
                    <h2>{title}</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="dol_bg" data-aos="fade-up">
                            <Image
                                className="img-fluid"
                                src={imageUrl}
                                alt={`${title} Image`}
                                width={1400}
                                height={700}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="dol_content">
                            <div className="dol-content-hd-txt" data-aos="fade-up">
                                <h4 className="pc_family b_col">{subtitle}</h4>
                                <p className="mb-2">{description}</p>
                            </div>
                            <div className="dol_list row">
                                {features?.length > 0 && features.map((featureGroup, index) => (
                                    <div key={index} className="col-lg-6">
                                        <ul className="mb-0 dol_list-ul" data-aos="fade-up">
                                            {featureGroup.map((feature, idx) => (
                                                <li key={idx} className="b_col">{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="view-more-btn" data-aos="fade-up">
                                <a href={ctaLink} className="hdr-btn mt_40 text-body">
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
        </section>
    );
};

export default Industry;
