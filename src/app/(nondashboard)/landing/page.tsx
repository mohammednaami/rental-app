import React from 'react'
import HeroSection from './HeroSection'
import FeaturesSecion from './FeaturesSecion'
import DiscoverSection from './DiscoverSection'
import CallToActionSection from './CallToActionSection'
import FooterSection from './FooterSection'

const Landing = () => {
  return (
    <div>
        <HeroSection /> 
        <FeaturesSecion /> 
        <DiscoverSection />
        <CallToActionSection />
        <FooterSection />
    </div>
  )
}

export default Landing