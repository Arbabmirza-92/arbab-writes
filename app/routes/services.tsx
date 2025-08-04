import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { 
  FaMobileAlt, 
  FaLaptopCode, 
  FaServer, 
  FaPaintBrush, 
  FaPython, 
  FaSearchDollar,
  FaArrowRight
} from "react-icons/fa";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Services | CorporateTalks" },
    { description: "Professional services I offer: Full-stack development, mobile apps, Python, and SEO." },
  ];
};

const services = [
  {
    title: "Mobile App Development",
    description: "Cross-platform apps with React Native or Flutter. Native iOS/Android solutions available.",
    icon: <FaMobileAlt className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end web apps using React, Remix, Node.js, and modern databases.",
    icon: <FaLaptopCode className="w-6 h-6" />,
    gradient: "from-amber-400 to-orange-500"
  },
  {
    title: "Backend Development",
    description: "REST/GraphQL APIs, microservices, and database architecture with Node.js/Python.",
    icon: <FaServer className="w-6 h-6" />,
    gradient: "from-teal-400 to-emerald-500"
  },
  {
    title: "Frontend Development",
    description: "Responsive, accessible UIs with React, Tailwind CSS, and TypeScript.",
    icon: <FaPaintBrush className="w-6 h-6" />,
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    title: "Python Development",
    description: "Automation, data analysis, and backend services with Django/FastAPI.",
    icon: <FaPython className="w-6 h-6" />,
    gradient: "from-yellow-400 to-amber-500"
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO audits, performance tuning, and content strategy.",
    icon: <FaSearchDollar className="w-6 h-6" />,
    gradient: "from-green-400 to-cyan-500"
  },
];

export default function Services() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <header className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6"
        >
          My Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Professional solutions tailored to your needs.
        </motion.p>
      </header>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-800/10"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            <div className="relative p-8">
              <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${service.gradient} mb-6 text-white`}>
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 font-medium text-${service.gradient.split(' ')[1]} dark:text-${service.gradient.split(' ')[3]} hover:underline`}
              >
                Get started <FaArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-2xl p-0.5 shadow-lg">
          <div className="bg-white dark:bg-gray-900 rounded-[15px] p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need something custom?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your project to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Let's Talk <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}