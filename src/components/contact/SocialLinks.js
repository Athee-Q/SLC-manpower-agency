import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com/company/SLC manpower",
    icon: <FaLinkedin className="w-6 h-6" />,
  },
  {
    href: "https://twitter.com/SLC manpower",
    icon: <FaTwitter className="w-6 h-6" />,
  },
  {
    href: "https://facebook.com/SLC manpower",
    icon: <FaFacebook className="w-6 h-6" />,
  },
  {
    href: "https://instagram.com/SLC manpower",
    icon: <FaInstagram className="w-6 h-6" />,
  },
];  

export default function SocialLinks() {
  return (
    <div>
      <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
      <div className="flex gap-4">
        {SOCIAL_LINKS.map(({ href, icon }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 text-xl text-primary dark:text-dark-primary hover:bg-primary/10 hover:scale-110 transition-transform"
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
