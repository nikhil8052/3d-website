import React from 'react';
import HeroBanner from '@/pages/layout/banner';
import LaptopVideo from '@/pages/components/laptopvideo';
import DummyDesign from '@/pages/components/DummyDesign';
import WeWork from '@/pages/components/WeWork';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@/pages/styles/custom-module.css';

export default function Page() {
  return (
    <>
      <HeroBanner />
      <LaptopVideo />
      <DummyDesign />
      <WeWork />
    </>
  );
}
