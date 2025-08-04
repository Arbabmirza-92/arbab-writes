import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white border-t dark:border-gray-700 w-full">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center space-y-4">
        
        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a href="https://www.facebook.com/" className="hover:text-indigo-500 transition-colors" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://github.com/" className="hover:text-indigo-500 transition-colors" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/" className="hover:text-indigo-500 transition-colors" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        {/* Privacy and Legal Links */}
        <div className="flex gap-4 text-sm">
          <Link to="/privacy" className="hover:underline hover:text-indigo-400">Privacy Policy</Link>
          {/* Add more links here if needed */}
          {/* <Link to="/terms" className="hover:underline hover:text-indigo-400">Terms of Use</Link> */}
        </div>

        {/* Copyright */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Remix Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
