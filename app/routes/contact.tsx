import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  FaPaperPlane, 
  FaCheck, 
  FaEnvelope, 
  FaUser, 
  FaComment,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";
import data from "~/data.json"; 
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const colors = {
    primary: "from-purple-600 to-indigo-600",
    secondary: "from-amber-500 to-orange-500",
    accent: "from-emerald-500 to-teal-600",
    dark: {
      primary: "from-purple-500 to-indigo-500",
      secondary: "from-amber-400 to-orange-400",
      accent: "from-emerald-400 to-teal-500"
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_1234",     
        "template_1234",    
        formRef.current,
        "jJoVjoTG8prt6uFCZ"      
      )
      .then(
        () => {
          setSuccess(true);
          setSending(false);
          formRef.current?.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mt-10 mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r ${colors.primary} dark:${colors.dark.primary} bg-clip-text text-transparent`}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Have questions about business strategies or want to collaborate? Drop us a message below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className={`p-6 bg-gradient-to-r ${colors.primary} dark:${colors.dark.primary}`}>
              <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
            </div>
            
            <form ref={formRef} onSubmit={sendEmail} className="p-6 space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-10 border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition-all duration-200"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-10 border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition-all duration-200"
                />
              </div>

              <div className="relative">
                <div className="absolute top-3 left-3 pl-1 flex items-start pointer-events-none text-gray-400 dark:text-gray-500">
                  <FaComment />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full pl-10 border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition-all duration-200"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r ${colors.primary} dark:${colors.dark.primary} text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 disabled:opacity-70 transition-opacity duration-300`}
              >
                {sending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <FaCheck className="text-green-600 dark:text-green-400" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className={`p-6 bg-gradient-to-r ${colors.accent} dark:${colors.dark.accent}`}>
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${colors.secondary} dark:${colors.dark.secondary} text-white`}>
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-300">arbabirfan382@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${colors.primary} dark:${colors.dark.primary} text-white`}>
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white">Our Office</h3>
                  <p className="text-gray-600 dark:text-gray-300">123 Business Avenue, Suite 456</p>
                  <p className="text-gray-600 dark:text-gray-300">Pakistan Punjab Gujrat</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${colors.accent} dark:${colors.dark.accent} text-white`}>
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-300">{data.phone}</p>
                  <p className="text-gray-600 dark:text-gray-300">Mon-Fri: 9am-5pm EST</p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-bold text-lg mb-3 text-gray-800 dark:text-white">Connect With Us</h3>
                <div className="flex space-x-4">
                  {data.socialmedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ y: -3 }}
                      className={`w-10 h-10 rounded-full ${social.color}  flex items-center justify-center transition-colors duration-300`}
                    >
                      <i className={`text-xl ${social.icon}`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}