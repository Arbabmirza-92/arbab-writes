import { Link } from "@remix-run/react";
import { FaArrowRight, FaPlayCircle, FaNewspaper, FaChartLine, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Index() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const colors = {
    primary: "from-violet-600 to-indigo-600",
    secondary: "from-amber-500 to-orange-500",
    tertiary: "from-emerald-500 to-teal-600",
    dark: {
      primary: "from-violet-500 to-indigo-500",
      secondary: "from-amber-400 to-orange-400",
      tertiary: "from-emerald-400 to-teal-500"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
     <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent dark:from-gray-800/50"></div>
    <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl"></div>
    <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-400/10 blur-3xl"></div>
  </div>

  <motion.div 
    className="relative z-10 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto text-center"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <motion.div 
      className="inline-block mb-4 p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm"
      variants={itemVariants}
    >
      <span className="text-sm font-medium bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
        BUSINESS INTELLIGENCE PLATFORM
      </span>
    </motion.div>

    <motion.h1 
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
      variants={itemVariants}
    >
      <span className={`bg-gradient-to-r ${colors.primary} dark:${colors.dark.primary} bg-clip-text text-transparent`}>
        Corporate
      </span>
      <span className="text-gray-800 dark:text-gray-200">Insights</span>
    </motion.h1>

    <motion.p 
      className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
      variants={itemVariants}
    >
      Data-driven strategies and executive briefings to power your business decisions.
    </motion.p>

    <motion.div 
      className="flex flex-col sm:flex-row justify-center gap-4"
      variants={itemVariants}
    >
      <Link
        to="/blog"
        className={`px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 
          bg-gradient-to-r ${colors.primary} text-white shadow-lg hover:shadow-xl hover:brightness-110`}
      >
        Explore Research
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

      <Link
        to="/about"
        className="px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300"
      >
        Learn About Us
      </Link>
    </motion.div>
  </motion.div>

</section>

      <section className="py-20 px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Insights
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Discover our most valuable content for business leaders and entrepreneurs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              id: 1,
              title: "Market Trends 2023",
              desc: "Navigate the evolving business landscape with our comprehensive analysis",
              icon: <FaChartLine className="text-2xl" />,
              color: colors.primary
            },
            {
              id: 2,
              title: "Leadership Strategies",
              desc: "Transform your leadership approach with innovative techniques",
              icon: <FaLightbulb className="text-2xl" />,
              color: colors.secondary
            },
            {
              id: 3,
              title: "Industry Reports",
              desc: "In-depth analysis of emerging sectors and opportunities",
              icon: <FaNewspaper className="text-2xl" />,
              color: colors.tertiary
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 ${activeFeature === index ? `border-${feature.color.split(' ')[1]}` : 'border-transparent'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/blog"
            className={`inline-block px-8 py-3 rounded-full font-medium bg-gradient-to-r ${colors.tertiary} text-white hover:opacity-90 transition-opacity duration-300 shadow-md`}
          >
            View Articles
          </Link>
        </motion.div>
      </section>

     <section className="relative py-24 px-6 sm:px-8 lg:px-10 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30"></div>
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30"></div>
  </div>

  <div className="relative z-10 max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
    <div className="relative p-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-amber-500 dark:from-purple-400 dark:to-amber-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join <span className="font-semibold text-purple-600 dark:text-purple-400">5,000+</span> executives getting our exclusive insights every week.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Your work email"
                className="w-full px-5 py-3 pr-12 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <button className="px-6 py-3 rounded-full font-medium bg-gradient-to-r from-purple-600 to-amber-500 text-white hover:from-purple-700 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 dark:text-gray-400 mt-4"
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </motion.div>
      </div>
    </div>
  </div>

  <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-400 opacity-10 dark:opacity-20 filter blur-xl"></div>
  <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-amber-400 opacity-10 dark:opacity-20 filter blur-xl"></div>
</section>

      <section className="py-20 px-6 sm:px-8 lg:px-10 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10K+", label: "Monthly Readers" },
            { value: "500+", label: "Published Articles" },
            { value: "50+", label: "Industry Experts" },
            { value: "100%", label: "Actionable Insights" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${index % 3 === 0 ? colors.primary : index % 3 === 1 ? colors.secondary : colors.tertiary} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}