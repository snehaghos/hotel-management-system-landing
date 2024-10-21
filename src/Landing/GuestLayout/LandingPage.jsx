import React from 'react';
import Carousal from './components/Carousal';
import Services from './components/Services';
import Launch from './components/Launch';
import Identity from './components/Identity';
import UseCases from './components/UseCases';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Features from './components/Features';
import Rooms from './components/Rooms';


const LandingPage = () => {
  return (
    <div>
      <Carousal />
      <Features />
      <Rooms/>

      <Launch />
      <Identity />
      <UseCases />
      <Resources />
      <Testimonials />
 
    </div>
  );
};

export default LandingPage;
