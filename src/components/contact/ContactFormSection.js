"use client";
import React from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import InfoCard from './InfoCard';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

const CONTACT_EMAILS = {
  general: "info@slcmanpower.com",
  employer: "employer@slcmanpower.com",
  support: "support@slcmanpower.com",
  media: "media@slcmanpower.com",
};

const ContactFormSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-8 lg:p-10 gap-10 items-start bg-accent/5 dark:bg-dark-accent/20">
      <ContactForm />

      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="text-2xl md:text-4xl text-center font-bold mb-4 text-accent dark:text-dark-accent">
          Drop Us a Message & Let&apos;s Get Started!
        </div>

        <InfoCard
          icon={<MdLocationOn className="text-background w-7 h-7" />}
          title="Head Office – Australia"
          content="Level 19, 282 Flinders St, Melbourne VIC 3000, Australia"
        />
        <InfoCard
          icon={<MdLocationOn className="text-background w-7 h-7" />}
          title="Branch – United Kingdom"
          content="52 Donovan Court, Northampton, NN3 7DD, United Kingdom"
        />
        <InfoCard
          icon={<MdEmail className="text-alert dark:text-dark-alert w-7 h-7" />}
          title="Media & Press"
          content={CONTACT_EMAILS.media}
        />

        <SocialLinks />
      </motion.div>
    </section>
  );
};

export default ContactFormSection;
