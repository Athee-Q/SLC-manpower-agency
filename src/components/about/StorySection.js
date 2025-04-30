"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const story = {
  image: "/images/our-mission.png",
  headline: "Empowering Careers, Enabling Businesses",
  subheadline: "SLC Manpower — Your Trusted Recruitment Partner in Singapore",
  description1:
    "At SLC Manpower, we are dedicated to bridging the gap between job seekers and employers with precision, empathy, and innovation. Inspired by the global leaders in workforce solutions, we bring localized expertise to connect individuals with opportunities that transform lives and grow businesses.",
  description2:
    "Founded by Kalpana Sai Ram, SLC Manpower is rooted in a deep commitment to empowering people. We believe that every person has unique potential, and with the right opportunity, can contribute meaningfully to any organization. Whether you're seeking temporary, permanent, or contract roles, SLC Manpower is here to guide your journey every step of the way.",
  description3:
    " For employers, we go beyond traditional staffing — offering strategic talent solutions tailored to your business goals. Our team understands industry nuances, hiring challenges, and the urgency of finding the right fit. From SMEs to larger enterprises, we deliver with speed, integrity, and care.",
};

const StorySection = () => {
  return (
    <section className="bg-white text-text dark:bg-dark-background dark:text-dark-text p-6 md:p-8 lg:p-10 ">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="row-span-1 md:row-span-2 flex justify-center items-center"
        >
          <div className="relative rounded-2xl shadow-lg w-full h-96 overflow-hidden">
            <Image src={story.image} alt={"Our-Story"} fill />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:gap-6 lg:gap-8 text-left"
        >
          <div className="text-2xl md:text-4xl font-bold">{story.headline}</div>
          <div className="text-xl md:text-3xl font-bold first-line:text-primary dark:first-line:text-dark-primary">
            {story.subheadline}
          </div>
          <div className="text-lg md:text-xl indent-20 dark:text-gray-400">
            {story.description1}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 md:gap-6 lg:gap-8 "
        >
          <div className="text-lg md:text-xl indent-20 dark:text-gray-400">
            {story.description2}
          </div>
          <div className="text-lg md:text-xl indent-20 dark:text-gray-400">
            {story.description3}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
