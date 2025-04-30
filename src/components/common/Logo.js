import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
    href="/"
    className="text-3xl font-extrabold flex items-center gap-4 text-primary dark:text-dark-primary hover:scale-105 transition-transform"
  >
    <Image
      src={"/images/icon.png"}
      alt="logo-icon"
      width={60}
      height={60}
      className="rounded-xl shadow-lg hover:shadow-[0px_0px_20px_--color-primary] transition-shadow"
    />
    SLC Manpower
  </Link>
  
  );
};

export default Logo;
