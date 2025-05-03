import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa";

const ForEmployersSection = () => {
  return (
    <section className="bg-background text-text dark:bg-dark-background dark:text-dark-text p-6 md:p-8 lg:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl shadow-lg w-full h-96 overflow-hidden">
          <Image
            src="/images/dream-team.png"
            alt="Team Collaborating"
            fill
          />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Looking to Build Your Dream Team?{" "}
            <span className="text-primary dark:text-dark-primary">SLC manpower</span> Can Help.
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-400">
            Connect with a vast pool of qualified and motivated talent. Our platform offers powerful tools to streamline your hiring process—from posting jobs to managing applications effortlessly.
          </p>
          <Link href="/auth/login">
            <button className="flex gap-2 items-center justify-center bg-primary hover:bg-accent text-white dark:bg-dark-primary dark:hover:bg-dark-accent text-lg font-medium px-6 py-3 cursor-pointer rounded-2xl shadow-md">
              <FaUserTie className="mr-2" />
              Post a Job Today
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ForEmployersSection;
