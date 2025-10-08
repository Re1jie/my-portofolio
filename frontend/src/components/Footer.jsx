import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-[#2E3440] text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Fikri Ramadhan. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
