import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaHeartbeat,
  FaMoneyCheckAlt,
  FaBullhorn,
  FaCogs,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function ExploreJobCategories() {
  const categories = [
    { title: "Technology", icon: <FaLaptopCode />, link: "/jobs/technology" },
    { title: "Healthcare", icon: <FaHeartbeat />, link: "/jobs/healthcare" },
    { title: "Finance", icon: <FaMoneyCheckAlt />, link: "/jobs/finance" },
    {
      title: "Marketing & Sales",
      icon: <FaBullhorn />,
      link: "/jobs/marketing-sales",
    },
    { title: "Engineering", icon: <FaCogs />, link: "/jobs/engineering" },
    { title: "And Many More", icon: <MdWork />, link: "/jobs" },
  ];

  return (
    <section className="text-center w-11/12 mx-auto p-6 md:p-8 lg:p-10 bg-(--color-primary)/10 dark:bg-(--color-dark-primary)/20 inset-shadow-sm rounded-2xl ">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-primary dark:text-dark-primary mb-6"
      >
        Explore Featured Job Categories
      </motion.h2>
      <p className="text-lg mb-10 text-gray-600 dark:text-gray-400">
        Find the perfect career path across industries
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map(({ title, icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md dark:shadow dark:shadow-gray-700 hover:shadow-lg dark:hover:shadow-xl transition-all group"
          >
            <div className="text-4xl mb-4 text-accent dark:text-dark-accent group-hover:scale-110 transition-transform">
              {icon}
            </div>
            <div className="text-lg font-semibold text-primary dark:text-dark-primary group-hover:underline">
              {title}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
