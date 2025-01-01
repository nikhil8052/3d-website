"use client";

import React from "react";

const MarqueText = ({ text, className = "" }) => {
    return (
        <section className={`marque-text bg-brown ${className}`}>
            <div className="container">
                <div className="border-top pt_100"></div>
            </div>
            <div className="container-fluid">
                <div className="marquee">
                    <h2><span>{text}</span>
                    <span>{text}</span></h2> {/* Repeat the text for seamless scrolling */}
                </div>
            </div>
        </section>
    );
};

export default MarqueText;
