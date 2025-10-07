import React from 'react';
import Button from '../components/Button';

const Homepage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#2E3440] text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I'm Fikri Ramadhan
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
          A passionate Web Developer & Software Engineering Enthusiast.
        </p>
        <div className="flex justify-center gap-4">
            <Button
                // onClick={}
            >
                View Projects
            </Button>
            <Button
                // onClick={}
            >
                Contact Me
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
