"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactCard from "./ContactCard";


const CONTACT_EMAILS = {
  general: "info@SLC manpower.com",
  employer: "employer@SLC manpower.com",
  support: "support@SLC manpower.com",
  media: "media@SLC manpower.com",
};

const GetInTouch = () => {
  return (
    <section className=" p-6 md:p-8 lg:p-10 dark:bg-dark-background text-text dark:text-dark-text transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-2xl md:text-4xl text-center font-bold mb-4 text-primary dark:text-dark-primary">
          We&apos;re here to help. Get in touch with us!
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <ContactCard
            title="General Inquiries"
            description="Questions about SLC manpower, services, or job opportunities."
            email={CONTACT_EMAILS.general}
          />
          <ContactCard
            title="Employer Partnerships"
            description="Looking to hire top talent? Partner with us."
            email={CONTACT_EMAILS.employer}
          />
          <ContactCard
            title="Technical Support"
            description="Need help with our platform? Reach out."
            email={CONTACT_EMAILS.support}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default GetInTouch;
