"use client";
import React from 'react'
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'
import InfoCard from './InfoCard'
import ContactForm from './ContactForm'
import SocialLinks from './SocialLinks'


const CONTACT_EMAILS = {
    general: "info@SLC manpower.com",
    employer: "employer@SLC manpower.com",
    support: "support@SLC manpower.com",
    media: "media@SLC manpower.com",
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
          <div className='text-2xl md:text-4xl text-center font-bold mb-4 text-accent dark:text-dark-accent'>
          Drop Us a Message & Let&apos;s Get Started!
          </div>
          <InfoCard
            icon={<MdLocationOn className="text-background   w-7 h-7" />}
            title="Visit Us"
            content="123 SLC manpower Street, TechCity, 560001, India"
          />
          <InfoCard
            icon={<MdEmail className="text-alert dark:text-dark-alert  w-7 h-7" />}
            title="Media & Press"
            content={CONTACT_EMAILS.media}
          />
          <SocialLinks />
        </motion.div>
      </section>
  )
}

export default ContactFormSection