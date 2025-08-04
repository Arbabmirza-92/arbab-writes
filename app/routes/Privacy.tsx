import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaUserLock, FaCookieBite, FaEnvelope } from "react-icons/fa";

export default function PrivacyPolicy() {
  // Color palette
  const colors = {
    primary: "from-purple-600 to-indigo-600",
    secondary: "from-emerald-500 to-teal-600",
    dark: {
      primary: "from-purple-500 to-indigo-500",
      secondary: "from-emerald-400 to-teal-500"
    }
  };

  const policySections = [
    {
      title: "Introduction",
      icon: <FaShieldAlt className="text-2xl" />,
      content: (
        <>
          <p className="mb-4">
            At CorporateTalks, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you visit 
            our blogging platform.
          </p>
          <p>
            By using our website, you consent to the data practices described in this policy. If you do not 
            agree with our policies and practices, please do not use our website.
          </p>
        </>
      )
    },
    {
      title: "Information We Collect",
      icon: <FaLock className="text-2xl" />,
      content: (
        <>
          <p className="mb-3">We collect several types of information from and about users of our website:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Personal Data:</strong> Name, email address, and contact details when you register or subscribe</li>
            <li><strong>Usage Data:</strong> How you interact with our content and features</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and operating system</li>
            <li><strong>Cookies:</strong> Tracking technologies to enhance your experience (see Cookie Policy below)</li>
          </ul>
        </>
      )
    },
    {
      title: "How We Use Your Information",
      icon: <FaUserLock className="text-2xl" />,
      content: (
        <>
          <p className="mb-3">We use the collected data for various purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>To provide and maintain our blogging platform</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features</li>
            <li>To provide customer support</li>
            <li>To gather analysis to improve our website</li>
            <li>To monitor usage and detect technical issues</li>
            <li>To deliver relevant content and advertisements</li>
          </ul>
        </>
      )
    },
    {
      title: "Cookies & Tracking",
      icon: <FaCookieBite className="text-2xl" />,
      content: (
        <>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain 
            information. Cookies are files with small amounts of data which may include an anonymous unique 
            identifier.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
            However, if you do not accept cookies, you may not be able to use some portions of our site.
          </p>
        </>
      )
    },
    {
      title: "Data Security",
      icon: <FaLock className="text-2xl" />,
      content: (
        <>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal data against 
            unauthorized access, alteration, disclosure, or destruction. Our security measures include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>SSL/TLS encryption for data in transit</li>
            <li>Regular security audits and vulnerability testing</li>
            <li>Access controls and authentication procedures</li>
            <li>Data minimization principles</li>
          </ul>
          <p>
            While we strive to protect your personal information, no internet transmission or electronic storage 
            is 100% secure, so we cannot guarantee absolute security.
          </p>
        </>
      )
    },
    {
      title: "Your Rights",
      icon: <FaShieldAlt className="text-2xl" />,
      content: (
        <>
          <p className="mb-3">Depending on your location, you may have the following data protection rights:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Access:</strong> Request copies of your personal data</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data</li>
            <li><strong>Restriction:</strong> Request limitation of processing</li>
            <li><strong>Objection:</strong> Object to our processing of your data</li>
            <li><strong>Portability:</strong> Request transfer of your data to another service</li>
            <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information below. We may require you to 
            verify your identity before responding to such requests.
          </p>
        </>
      )
    },
    {
      title: "Third-Party Services",
      icon: <FaUserLock className="text-2xl" />,
      content: (
        <>
          <p className="mb-4">
            We may use third-party service providers to monitor and analyze website usage, process payments, 
            or deliver newsletters. These third parties have access to your personal data only to perform 
            these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
          <p>
            Our website may contain links to other sites not operated by us. We strongly advise you to review 
            the privacy policy of every site you visit.
          </p>
        </>
      )
    },
    {
      title: "Policy Updates",
      icon: <FaShieldAlt className="text-2xl" />,
      content: (
        <>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this 
            Privacy Policy are effective when they are posted on this page.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className={`text-4xl md:text-5xl mt-16 font-bold mb-4 bg-gradient-to-r ${colors.primary} dark:${colors.dark.primary} bg-clip-text text-transparent`}>
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>

        {/* Policy Content */}
        <div className="space-y-10">
          {policySections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className={`p-6 bg-gradient-to-r ${index % 2 === 0 ? colors.primary : colors.secondary} dark:${index % 2 === 0 ? colors.dark.primary : colors.dark.secondary} flex items-center`}>
                <div className="mr-4 text-white">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              <div className="p-6 text-gray-700 dark:text-gray-300">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className={`mt-12 bg-gradient-to-r ${colors.secondary} dark:${colors.dark.secondary} text-white rounded-xl shadow-lg overflow-hidden`}
        >
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-3xl" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or wish to exercise your data rights, 
              please contact us through our <Link to="/contact" className="underline hover:opacity-80">contact page</Link> or email us at <span className="text-xl text-black">arbabirfan382@gmail.com.</span>
            </p>
            <p>
              We typically respond to privacy-related inquiries within 5 business days.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}