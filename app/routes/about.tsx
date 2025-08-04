import { motion } from "framer-motion";
import { FaPenFancy, FaCode, FaBookReader, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiRemix, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function About() {
  // Color palette
  const colors = {
    primary: "from-purple-500 to-indigo-600",
    secondary: "from-amber-400 to-orange-500",
    accent: "from-emerald-400 to-teal-500",
    dark: {
      primary: "from-purple-400 to-indigo-500",
      secondary: "from-amber-300 to-orange-400",
      accent: "from-emerald-300 to-teal-400"
    }
  };

  const skills = [
    { name: "JavaScript", color: "bg-yellow-400 text-yellow-900" },
    { name: "React", color: "bg-blue-400 text-blue-900" },
    { name: "Remix", color: "bg-gray-800 text-white dark:bg-gray-300 dark:text-gray-900" },
    { name: "Node.js", color: "bg-green-500 text-white" },
    { name: "TypeScript", color: "bg-blue-600 text-white" },
    { name: "Tailwind", color: "bg-cyan-400 text-cyan-900" },
    { name: "Python", color: "bg-indigo-500 text-white" },
    { name: "GraphQL", color: "bg-pink-600 text-white" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mt-16 mb-16">

       <motion.h1 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${colors.primary} dark:${colors.dark.primary} bg-clip-text text-transparent`}
  >
    About CorporateTalks
  </motion.h1>
  
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
  >
    Your premier destination for actionable business intelligence, corporate strategy insights, 
    and leadership wisdom. We bridge the gap between academic theory and real-world execution.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className="mt-8 flex flex-wrap justify-center gap-4"
  >
    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full font-medium">
      Business Strategy
    </span>
    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full font-medium">
      Market Analysis
    </span>
    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 rounded-full font-medium">
      Leadership Insights
    </span>
    <span className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full font-medium">
      Corporate Growth
    </span>
  </motion.div>
  </div>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="md:w-1/3 bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 p-8 flex items-center justify-center"
              >
                <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
                  <FaPenFancy className="text-white text-6xl" />
                </div>
              </motion.div>
              
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
                  Arbab Irfan <span className="text-purple-600 dark:text-purple-400">The Developer</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Full-stack developer with a passion for creating beautiful, functional web experiences and sharing knowledge through writing.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">TECH STACK</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${skill.color}`}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <motion.a 
                    href="https://github.com" 
                    target="_blank"
                    whileHover={{ y: -2 }}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                  <motion.a 
                    href="https://twitter.com" 
                    target="_blank"
                    whileHover={{ y: -2 }}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaTwitter className="text-xl" />
                  </motion.a>
                  <motion.a 
                    href="www.linkedin.com/in/arbab-irfan" 
                    target="_blank"
                    whileHover={{ y: -2 }}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: <FaPenFancy className="text-3xl" />,
              title: "Writing Style",
              description: "Practical, concise tutorials with real-world examples that developers can immediately apply.",
              color: `bg-gradient-to-br ${colors.primary}`
            },
            {
              icon: <FaCode className="text-3xl" />,
              title: "Expertise",
              description: "5+ years experience in web development with focus on modern JavaScript frameworks and best practices.",
              color: `bg-gradient-to-br ${colors.secondary}`
            },
            {
              icon: <FaBookReader className="text-3xl" />,
              title: "Mission",
              description: "To help developers level up their skills through high-quality, accessible technical content.",
              color: `bg-gradient-to-br ${colors.accent}`
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className={`h-2 ${feature.color}`}></div>
              <div className="p-6">
                <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        

        
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className={`bg-gradient-to-r ${colors.primary} dark:${colors.dark.primary} text-white rounded-2xl shadow-2xl overflow-hidden`}
        >
          <div className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                A Message From Arbab Irfan
              </h2>
              <div className="space-y-4 text-lg">
                 <p>
        "CorporateTalks was born from my passion for business strategy and my desire to share practical insights 
        that drive real results. After years of helping companies grow, I wanted to create a platform where 
        professionals could access actionable business wisdom."
      </p>
      <p>
        "When I'm not analyzing market trends or consulting with executives, you'll find me researching emerging 
        business models, studying successful corporate transformations, or mentoring aspiring entrepreneurs."
      </p>
      <p>
        "My mission is to cut through the noise of business theory and deliver content that actually works in the 
        boardroom and the marketplace. Whether you're a startup founder or a Fortune 500 leader, I aim to provide 
        strategies you can implement immediately to gain competitive advantage."
      </p>
      <p>
        "This blog is more than just articles - it's a toolkit for business excellence, combining data-driven 
        analysis with hard-won experience from the corporate front lines."
      </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}