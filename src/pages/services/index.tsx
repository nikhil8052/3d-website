import React from "react";
import HeroBanner from "@/pages/layout/banner";
import LaptopVideo from "@/pages/components/laptopvideo";
import DummyDesign from "@/pages/components/DummyDesign";
import ImageTextGrid from "@/pages/components/ImageTextGrid";
import NeedSlider from "@/pages/components/NeedSlider";
import FaqAccordian from "@/pages/components/FaqAccordian";
import WeWork from "@/pages/components/WeWork";

export default function Page() {
  return (
    <>
      <HeroBanner
        imageUrl="/img/tra-img.png"
        title="Transforming Ideas Into Reality"
        subtitle="Our innovative services empower businesses to thrive in the digital age."
        description="At Trailblazer Innovations, we specialize in transforming ideas into reality with our unparalleled expertise in hardware and software development, mechanical and electrical engineering, industrial and packaging design, manufacturing automation, and mobile app development. Whether you’re a startup or an established enterprise, our services are designed to accelerate innovation and deliver impactful results."
        ctaText="Hire Us"
        ctaLink="/contact"
        additionalText=""
        currentpage="Services"
      />
      <LaptopVideo
        videoUrl="https://www.youtube.com/embed/example-video"
        thumbnailUrl="/img/video-thumbnail.png"
        title="Watch Our Process in Action"
        description="Discover how we turn complex challenges into simple, impactful solutions."
      />
      <DummyDesign
        header="Design Tailored for Excellence"
        content="Our team creates cutting-edge designs that align with your business goals."
        image="/img/design-example.png"
      />
      <WeWork
        title="Our Workflow"
        steps={[
          "Understand your needs",
          "Design tailored solutions",
          "Deliver exceptional results",
        ]}
      />
      <ImageTextGrid
        gridItems={[
          {
            title: "Feature 1",
            description: "Description for feature 1.",
            imageUrl: "/img/feature1.png",
          },
          {
            title: "Feature 2",
            description: "Description for feature 2.",
            imageUrl: "/img/feature2.png",
          },
          {
            title: "Feature 3",
            description: "Description for feature 3.",
            imageUrl: "/img/feature3.png",
          },
        ]}
      />
      <FaqAccordian
        faqs={[
          {
            question: "What services do you offer?",
            answer: "We offer a range of services including design, development, and consulting.",
          },
          {
            question: "How can I get started?",
            answer: "Contact us via our website or email, and we’ll guide you through the process.",
          },
        ]}
      />
      <NeedSlider
        slides={[
          {
            imageUrl: "/img/slider1.png",
            text: "Innovative Solutions",
          },
          {
            imageUrl: "/img/slider2.png",
            text: "Tailored Strategies",
          },
          {
            imageUrl: "/img/slider3.png",
            text: "Proven Results",
          },
        ]}
      />
    </>
  );
}
