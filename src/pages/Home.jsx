import React, { useEffect } from 'react';
import SuccessSection from '../components/SuccessSection';
import ServicesSection from '../components/ServicesSection';
import Hero from '../components/Hero';
import WhyChooseSection from '../components/WhyChooseSection';
import HowItWorksAndStats from '../components/HowItWorksAndStars';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import Location from '../components/Location';
import PodcastSection from '../components/PodcastSection';
import UserReviews from '../components/UserReviews';

const Home = () => {
   useEffect(() => {
          document.title = "Metro Solver ";
        }, []);
  return (
    <div className='bg-[#1E2433]'>
       <Hero></Hero>
       <ServicesSection></ServicesSection>
        <WhyChooseSection></WhyChooseSection>  
        <HowItWorksAndStats></HowItWorksAndStats> 
        <SuccessSection></SuccessSection>
        <ContactSection></ContactSection>
        <FAQSection></FAQSection>
        <Location></Location>
        <PodcastSection></PodcastSection>
        <UserReviews></UserReviews>
    </div>
  );
};

export default Home;