import React from "react";
import Head from "next/head";
import HeroSection from "@/components/about/HeroSection";
import { StatsSection } from "@/components/about/StatsSection";
import { ServiceSection } from "@/components/about/ServiceSection";
import StorySection from "@/components/about/StorySection";
import TalentRequestSection from "@/components/about/TalentRequestSection";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About SLC manpower - Connecting Talent and Opportunity</title>
        <meta
          name="description"
          content="Learn about SLC manpower’s mission to empower job seekers and employers. Discover our vision, commitment, and how we are bridging the gap between talent and opportunity with innovation and passion."
        />
      </Head>
      <div className="flex flex-col gap-20 bg-background dark:bg-dark-background text-text dark:text-dark-text transition-colors duration-300">
        <HeroSection />
        <StorySection />
        <StatsSection />
        <ServiceSection />
        <TalentRequestSection />
      </div>
    </>
  );
};

export default AboutPage;
