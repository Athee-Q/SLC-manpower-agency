import ContactFormSection from "@/components/contact/ContactFormSection";
import GetInTouch from "@/components/contact/GetInTouch";
import { HeroSection } from "@/components/contact/HeroSection";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact SLC manpower - Connecting Talent and Opportunity</title>
        <meta
          name="description"
          content="Reach out to SLC manpower! Contact us with your inquiries, feedback, or partnership opportunities. We're here to help connect talent and opportunity."
        />
      </Head>
      <div className="grid gap-8 pb-10 transition-colors duration-300 bg-background dark:bg-dark-background text-text dark:text-dark-text">
        <HeroSection />
        <GetInTouch />
        <ContactFormSection />
      </div>
    </>
  );
}
