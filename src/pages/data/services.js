import React from "react";
import HeroBanner from "@/pages/layout/banner";

const ServicesPage = () => {
  return (
    <div>
      <HeroBanner
        imageUrl="/img/services-img.png"
        title="Transform Your Business with Expert Solutions!"
        subtitle="Discover Our Wide Range of Services"
        description="From strategy to execution, we provide comprehensive services to help your business thrive in a competitive market. Let us be your partner in growth and innovation."
        ctaText="Explore Services"
        ctaLink="/services"
        additionalText="Your success is our mission."
      />
    </div>
  );
};

export default ServicesPage;
