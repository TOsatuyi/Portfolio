"use client";
import React from "react";
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import ProfileSection from "./ProfileSection";
import ProjectShowcase from "./ProjectShowcase";
import ExperienceSection from "./ExperienceSection";
import TechStack from "./TechStack";


const Hero = () => {
  return (
    <div>
      {/* Full Screen Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src="/Eagle.jpg"
          alt="GGE Eagle"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for text readability */}

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase text-center drop-shadow-2xl">
            GGE <span className="text-emerald-500">|</span> DANNY
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-bold tracking-[0.5em] uppercase opacity-90">
            Global Ent.
          </p>
          <div className="mt-6 text-xl md:text-2xl font-semibold text-emerald-400">
            <Typewriter
              words={['Kingdom Citizen', 'Child of God', 'Dominator', 'Tech Enthusiast', 'GGE', 'Innovator', 'Software Engineer']}
              loop={false}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Content Below Fold */}
      <div className="bg-black pt-24 pb-24">
        <div id="profile" className="max-w-7xl mx-auto px-6">
          <ProfileSection />
        </div>
      </div>

      <ExperienceSection />

      <div id="projects" className="w-full bg-black">
        <ProjectShowcase
          title="Kashma"
          description="Collaborated with a dynamic team to engineer this comprehensive fintech solution. Focused on robust payment processing and real-time transaction tracking."
          tags={["Fintech", "Mobile App", "iOS", "Android"]}
          images={["/kashma-2.png", "/kashma-1.png"]}
          link="#"
          showAppStoreBadge={true}
        />

        <ProjectShowcase
          title="My bonfo"
          description="Contributed to the development of this cross-border money transfer platform, helping to redefine seamless international financial transactions."
          tags={["Fintech", "Wallet", "Cross-border"]}
          images={["/bonfo-1.jpg", "/bonfo-2.jpg"]}
          link="#"
          isReversed={true}
          showAppStoreBadge={true}
        />

        <ProjectShowcase
          title="Inventory & E-commerce System"
          description="Architected and developed a unified commercial platform from the ground up, seamlessly combining inventory logic with a customer-facing e-commerce store."
          tags={["Web App", "E-commerce", "Inventory", "Dashboard"]}
          images={["/Inventory- Image1.png", "/Inventory- Image2.png", "/Inventory- Image3.png"]}
          link="#"
          isDesktopApp={true}
        />


      </div>

      <TechStack />

    </div>
  );
};

export default Hero;
