import React from 'react';
import Button from '../components/Button';

const Homepage = () => {
  return (
    <main className="text-gray-800 dark:text-white">

      {/* Hero Section */}
      <section id="hero" className="min-h-[72vh] flex items-end justify-center bg-gray-50 dark:bg-[#2E3440] text-center px-4">
        <div className="flex items-center gap-8">
          <img
            src="/fikri.webp"
            alt="Fikri Ramadhan"
            className="w-72 h-100"
          />

          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Hi, I'm Fikri Ramadhan
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
              A passionate Web Developer & Software Engineering Enthusiast.
            </p>
            <div className="flex justify-center gap-4">
                <Button
                    onClick={() => {
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    View Projects
                </Button>
                <Button
                    onClick={() => {
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    About Me
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-[#3B4252] px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="mb-4">
            I’m <strong>Fikri Ramadhan</strong>, a software developer with a strong mathematical foundation. I’m currently pursuing a B.Sc. in Mathematics and Computer Science at ITS (2022–2025).
            I enjoy delivering full-stack web applications using <strong>React, Laravel, Docker</strong>, and <strong>MariaDB</strong>. I also have a keen interest in system performance and reliability.
          </p>
          <p className="mb-4">
            I’m quick to adapt to new technologies, enjoy solving complex problems, and love working on projects that matter. My experience ranges from software engineering to organizational leadership and media production.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {["React", "Laravel", "Node.js", "Docker", "MariaDB", "TailwindCSS", "JavaScript", "Java", "PHP", "Python", "MATLAB", "Git", "Linux", "Figma"].map(skill => (
              <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-sm">{skill}</span>
            ))}
          </div>

          <div className="flex gap-6 mt-6 justify-center">
            <a href="https://linkedin.com/in/fikri-ramadhan-39f1" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">LinkedIn</a>
            <a href="https://github.com/Re1jie" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">GitHub</a>
            <a href="/cv-fikri.pdf" download className="underline text-blue-600 dark:text-blue-400">Download CV</a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-[#434C5E] px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
          <div className="flex">
            <div className="flex flex-col md:flex-row items-start gap-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              {/* Gambar proyek */}
              <div className="h-0 md:w-1/2">
                <img
                  src="/simPLAN-mockup.png"
                  alt="simPLAN Project Preview"
                />
              </div>

              {/* Deskripsi proyek */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  simPLAN — Ship Planning & Report System
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A full-stack web application to optimize ship scheduling at PT. PELNI. Includes ship route planning, docking period visualization, conflict detection, and Gantt chart display.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm mb-4 space-y-1">
                  <li>Built with Laravel REST API & React frontend</li>
                  <li>Used Docker for deployment & containerization</li>
                  <li>Database: MariaDB with Laravel Migrations</li>
                  <li>Implemented schedule conflict detection algorithm</li>
                </ul>
                <a
                  href="https://github.com/Re1jie"
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 underline font-medium"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>   
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-[#2E3440] px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl">Ship Operation Intern — PT. PELNI</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Jul 2025 – Aug 2025</p>
              <p className="text-gray-700 dark:text-gray-400">
                Developed simPLAN, optimized ship scheduling with real-time Gantt chart timeline and conflict detection. Reduced manual scheduling errors and improved operational efficiency.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Guest Speaker — BMS HIMATIKA ITS</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">2024</p>
              <p className="text-gray-700 dark:text-gray-400">Presented design principles and Figma to 30+ students, achieving 93% satisfaction rate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50 dark:bg-[#3B4252] px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl">B.Sc. in Mathematics & Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Institut Teknologi Sepuluh Nopember (2022 – 2025)</p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-400 mt-2">
                <li>Relevant coursework: Real Analysis, Optimization, Software Engineering, Cryptography</li>
                <li>Focus: Mathematical modeling, algorithm design, and full-stack web development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-[#2E3440] px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
            />
            <Button>Send Message</Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
