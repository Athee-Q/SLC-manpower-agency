"use client";

import HeroSection from "../components/home/HeroSection";
import ExploreJobCategories from "@/components/home/ExploreJobCategories";
import WhyChooseSLCmanpowerSection from "@/components/home/WhyChooseSLCmanpowerSection";
import SuccessStories from "@/components/home/SuccessStories";
import ForEmployersSection from "@/components/home/ForEmployersSection";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-10 min-h-screen bg-background dark:bg-(--color-dark-background)">
      <HeroSection />
      <WhyChooseSLCmanpowerSection />
      <ExploreJobCategories />
      <SuccessStories />
      <ForEmployersSection />
    </main>
  );
}
