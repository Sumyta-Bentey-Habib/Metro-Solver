import React, { useEffect } from "react";
import { Building2, Users, Globe2, Rocket } from "lucide-react";
import AboutHeroSection from "../components/aboutpage/AboutHeroSection";
import AboutContentSection from "../components/aboutpage/AboutContentSection";
import MeetOurAgentsSection from "../components/aboutpage/MeetOurAgentsSection";
import ContactSection from "../components/ContactSection";
import StatsSection from "../components/aboutpage/StatsSection";

const About = () => {
   useEffect(() => {
          document.title = "About Us";
        }, []);
  return (
   <>
   <AboutHeroSection></AboutHeroSection>
   <StatsSection></StatsSection>
   <AboutContentSection></AboutContentSection>
   <MeetOurAgentsSection></MeetOurAgentsSection>
   <ContactSection></ContactSection>
   </>
  );
};

export default About;
