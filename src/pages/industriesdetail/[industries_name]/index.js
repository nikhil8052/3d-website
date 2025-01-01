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
import { skills } from "@/pages/data/services";

export default function Home(content) {

  const slug = content.params.industries_name;
  
  // Find the skill based on the slug or return the first skill if not found
  const skill = skills.find((item) => item.slug === slug) || skills[0];
  // const textImageListItems = [
  //   {
  //     title: "Aerospace",
  //     subtitle:"Trailblazer Innovations Is Raising the Bar on Aerospace Innovation with Precision and Reliability",
  //     imageUrl: "/img/list-chip.png",
  //     description:"The aerospace industry requires flawless execution of advanced techniques and unrelenting precision. At Trailblazer Innovations, we design and develop communications and power solutions to meet the needs of this sector while ensuring through each mission-critical application maximized safety, performance, and reliability. Our skills encompass the whole spectrum-from complex aircraft systems to prototypes for use in aerospace-grade hardware; and the faith in our expertise resonates with industry leaders. This takes aerospace innovation to another level with solutions that are groundbreaking, yet dependable.",
  //     ctaLink: "/aerospace",
  //   },
  //   {
  //     title: "Industrial IoT",
  //     subtitle:"Transforming the Industrial IoT through seamless connectivity and scalability.",
  //     imageUrl: "/img/list-chip.png",
  //     description:"The Industrial Internet of Things or IIoT is defining the way industries function by connecting machines, systems, and data to create efficiency. Trailblazer Innovations focuses on creating IoT-enabled devices and systems designed to maximize performance and the ability to gain actionable insights. From real-time monitoring to predictive analytics, we provide solutions scalable to your industrial needs. From smart sensors to high-capacity networks to intelligent software, we enable industries to create efficiencies and find great new opportunities for growth.",
  //     ctaLink: "/aerospace",
  //   },
  //   {
  //     title: "Construction",
  //     subtitle:"Driving Efficiency and Innovation in Construction Technology.",
  //     imageUrl: "/img/list-chip.png",
  //     description:"New high-tech solutions in smart buildings, IoT-enabled construction systems, and automation technology are just what we might expect improvements in safety, efficiency, and project management from the construction sector. Our unique solutions for both smart buildings and state-of-the-art IoT construction systems have simplified processes, boosted safety protocols, and provided higher-quality project observations. That increased monitoring systems integrated with data analytics help a construction company speed up and make a more intelligent project process.",
  //     ctaLink: "/aerospace",
  //   },
  //   {
  //     title: "Healthcare & Wearable Tech",
  //     subtitle:"Trailblazer Innovations is Pioneering Health and Wearable Technology for a Better Future.",
  //     imageUrl: "/img/list-chip.png",
  //     description:"The use and integration of technology into healthcare processes is indeed a very important topic. We Trailblazer Innovations focus primarily on the wearable health device design and development, advanced medical equipment, and application development in data-driven healthcare. This will finally account for improved patient outcomes and monitoring, as well as personal empowerment in terms of self-care. A precise, reliable, and compliance at each step with regulation would collectively apply from wearable fitness trackers to AI-enabled medical devices.",
  //     ctaLink: "/aerospace",
  //   },
  //   {
  //     title: "Consumer Electronics",
  //     subtitle:"Innovative Consumer Electronics That Inspire and Engage.",
  //     imageUrl: "/img/list-chip.png",
  //     description:"Bringing design, function and innovation at one place is what the fast-paced consumer electronics market of today demands. Custom solutions in the smart devices and connected product domains, where they really need to resonate with the end-user and trailblazing innovations, are created by Trailblazer Innovations. The easier our product designs, the more they seamlessly integrate hardware and software, and the faster we can develop them; that is how efficiently we can take your great ideas to market. Smart home gadgets, wearables, or entertainment devices are all part of being sure they exceed the customer's expectations.",
  //     ctaLink: "/aerospace",
  //   },
  //   {
  //     title: "Agriculture",
  //     subtitle:"Revolutionizing Agriculture with Smart and Sustainable Technologies.",
  //     imageUrl: "/img/list-chip.png",
  //     description:"The agriculture industry has been facing serious challenges such as resource scarcity and climate change. Trailblazer Innovations delivers smart solutions for improving productivity and by bringing necessary sustainability. These have brought new technologies of precision farming tools, automated machines, and IoT-enabled systems, empowering farmers to use and consume resources more efficiently. We help agricultural businesses grow more with less adopting sustainable practices for the future by combining advanced sensors along with AI-powered insights and automated systems.",
  //     ctaLink: "/aerospace",
  //   },
  // ];

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
      {/* <Mountains /> */}
      <WeWork />
      <AboutSlider />
      <WeWork />
      <TextImageList items={textImageListItems} />
      <ImageTextGrid />
      <FaqAccordian />
    </>
  );
}
