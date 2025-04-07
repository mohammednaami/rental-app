import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import DiscoverSection from "./DiscoverSection";
import CallToActionSection from "./CallToActionSection";
import FooterSection from "./FooterSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'RentApp - Start your journey to finding the perfect place to call home',
  description: "Explore our wide range of rental properties tailored to fit your lifestyle and needs!",
};

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};

export default Landing;
