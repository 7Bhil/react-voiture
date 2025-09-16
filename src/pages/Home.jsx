import React from 'react';
import HeroSection from '../components/Sections/HeroSection';
import CarGrid from '../components/Sections/CarGrid';
import Testimonials from '../components/Sections/Testimonials';
import ContactInfo from '../components/Sections/ContactInfo';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CarGrid title="Notre flotte de véhicules" limit={6} />
      <Testimonials />
      <ContactInfo />
    </>
  );
};

export default Home;