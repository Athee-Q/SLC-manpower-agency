// components/home/WhyChooseSLC manpowerSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaBell, FaLightbulb, FaBuilding, FaRocket } from "react-icons/fa";

const benefits = [
  {
    icon: <FaLightbulb className="text-primary dark:text-dark-primary text-2xl" />,
    title: "Personalized Job Recommendations",
    description:
      "Our intelligent platform learns your skills and preferences to deliver the most relevant job openings directly to you.",
  },
  {
    icon: <FaBuilding className="text-primary dark:text-dark-primary text-2xl" />,
    title: "Access to Top Companies",
    description:
      "Connect with leading organizations across industries, from startups to global enterprises.",
  },
  {
    icon: <FaRocket className="text-primary dark:text-dark-primary text-2xl" />,
    title: "Simplified Application Process",
    description:
      "Our streamlined process makes it easier than ever to apply for the roles that excite you.",
  },
  {
    icon: <FaCheckCircle className="text-primary dark:text-dark-primary text-2xl" />,
    title: "Valuable Career Resources",
    description:
      "Access expert advice, resume tips, and interview guides to help you shine.",
  },
  {
    icon: <FaBell className="text-primary dark:text-dark-primary text-2xl" />,
    title: "Stay Informed",
    description:
      "Get notified about job alerts, company updates, and industry insights to stay ahead.",
  },
];

export default function WhyChooseSLCmanpowerSection() {
  return (
    <section className="p-6 md:p-8 lg:p-10 bg-secondary dark:bg-dark-secondary text-text dark:text-dark-text">
      <div className="w-11/12 mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-dark-primary"
        >
          Why SLC manpower? Your Partner in Career Success
        </motion.h2>
        <p className="text-lg">
          At SLC manpower, we go beyond job listings &ndash; we empower your entire career journey.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-dark-primary">
              {benefit.title}
            </h3>
            <p>{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
