import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-[#2E3440] text-gray-300 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Fikri Ramadhan. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/fikri-ramadhan-39f1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center gap-2 hover:text-white transition">
            <FaLinkedin/>LinkedIn
          </a>
          <a href="https://github.com/Re1jie" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center gap-2 hover:text-white transition">
            <FaGithub />GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
