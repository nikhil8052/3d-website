import React from "react";
import HeroBanner from "@/pages/layout/banner";
import FullVideo from "@/pages/components/FullVideo";
import DummyDesign from "@/pages/components/DummyDesign";
import ImageTextGrid from "@/pages/components/ImageTextGrid";
import NeedSlider from "@/pages/components/NeedSlider";
import FaqAccordian from "@/pages/components/FaqAccordian";
import Mountains from "@/pages/components/Mountains";
import AboutSlider from "@/pages/components/AboutSlider";
import TextImageList from "@/pages/components/TextImageList";
import WeWork from "@/pages/components/WeWork";

export default function Page() {
  const textImageListItems = [
    {
      title: "Innovative Technology",
      imageUrl: "/img/list-chip.png",
      description:
        "Discover cutting-edge solutions that redefine industry standards.",
      ctaLink: "/services",
    },
    {
      title: "Creative Design",
      imageUrl: "/img/list-chip.png",
      description:
        "Experience the synergy of technology and aesthetics in our designs.",
      ctaLink: "/portfolio",
    },
    {
      title: "Expert Team",
      imageUrl: "/img/list-chip.png",
      description:
        "Meet the brilliant minds driving innovation and excellence.",
      ctaLink: "/team",
    },
    {
      title: "Global Impact",
      imageUrl: "/img/list-chip.png",
      description:
        "Our projects make a difference on a global scale, empowering communities.",
      ctaLink: "/impact",
    },
    {
      title: "Sustainable Solutions",
      imageUrl: "/img/list-chip.png",
      description:
        "Commitment to eco-friendly practices and sustainable innovation.",
      ctaLink: "/sustainability",
    },
    {
      title: "Client Success",
      imageUrl: "/img/list-chip.png",
      description:
        "See how we’ve helped clients achieve their goals through collaboration.",
      ctaLink: "/success-stories",
    },
  ];

  return (
    <>
      <HeroBanner
        imageUrl="/img/tra-img.png"
        title="Trailblazing Innovation—Meet the Team Turning Ideas into Reality"
        subtitle="Have a project in mind? Let’s bring your vision to life"
        description="Trailblazer Innovations is a Michigan-based powerhouse specializing in groundbreaking hardware and software solutions. We are a team of problem solvers and creators united by a shared passion for pushing the boundaries of technology. With a reputation for delivering exceptional results, we pride ourselves on transforming ambitious ideas into tangible products that inspire and innovate."
        ctaText="Hire Us"
        ctaLink="/contact"
        additionalText=""
        currentpage="About"
      />
      <FullVideo
        videoUrl="https://www.youtube.com/embed/9qUw2Xfzlps"
        thumbnailUrl="/img/full-video.png"
      />
      <Mountains />
      <WeWork />
      <AboutSlider />
      <WeWork />
      <TextImageList items={textImageListItems} />
      <ImageTextGrid />
      <FaqAccordian />
    </>
  );
}
