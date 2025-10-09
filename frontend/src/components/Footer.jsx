import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-gray-800 dark:bg-[#2E3440] text-gray-300 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fikri Ramadhan. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://linkedin.com/in/fikri-ramadhan-39f1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Re1jie"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
