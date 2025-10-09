import React from 'react';
import Button from '../components/Button';
import { FaReact, FaLaravel, FaDocker, FaGitAlt, FaLinux, FaLinkedin, FaGithub, FaDownload  } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const Homepage = () => {
  return (
    <main className="text-gray-800 dark:text-white">

      {/* Hero Section */}
      <section id="hero" className="min-h-[58vh] flex items-end justify-center bg-gray-50 dark:bg-[#2E3440] text-center px-4">
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
                    View Project
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
      <section id="about" className="py-20 sm:py-24 bg-white dark:bg-[#3B4252] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
            About Me
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12 rounded"></div>

          {/* Kontainer untuk layout 2 kolom */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            
            {/* Kolom Kiri: Deskripsi Diri (Tetap sama) */}
            <div className="lg:col-span-3">
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                <p>
                  I'm <strong>Fikri Ramadhan</strong>, a software developer with a strong mathematical foundation, currently pursuing a B.Sc. in Mathematics and Computer Science at ITS (2022-2026).
                </p>
                <p>
                  I enjoy delivering full-stack web applications using key technologies like <strong className="text-cyan-600 dark:text-cyan-400">React</strong>, <strong className="text-cyan-600 dark:text-cyan-400">Laravel</strong>, and <strong className="text-cyan-600 dark:text-cyan-400">Docker</strong>. Beyond coding, I have a keen interest in ensuring system performance and reliability. I'm quick to adapt, enjoy solving complex problems, and love working on projects that truly matter.
                </p>
              </div>
              {/* Tombol Sosial Media */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  onClick={() => {
                    window.open("https://linkedin.com/in/fikri-ramadhan-39f1", "_blank", "noopener,noreferrer");
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-[#4C566A] text-slate-800 dark:text-slate-100 font-semibold rounded-lg shadow-sm hover:bg-cyan-500 dark:hover:bg-cyan-600 hover:text-white transition-colors duration-300"
                >
                  <FaLinkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
                <Button
                  onClick={() => {
                    window.open("https://github.com/Re1jie", "_blank", "noopener,noreferrer");
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-[#4C566A] text-slate-800 dark:text-slate-100 font-semibold rounded-lg shadow-sm hover:bg-cyan-500 dark:hover:bg-cyan-600 hover:text-white transition-colors duration-300"
                >
                  <FaGithub className="h-5 w-5" />
                  GitHub
                </Button>
                <Button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = "/FikriR-CV.pdf";
                    link.download = "FikriR-CV.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-[#4C566A] text-slate-800 dark:text-slate-100 font-semibold rounded-lg shadow-sm hover:bg-cyan-500 dark:hover:bg-cyan-600 hover:text-white transition-colors duration-300"
                >
                  <FaDownload className="h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </div>

            {/* Kolom Kanan: Tech Stack & Skills */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Kategori Web Development */}
              <div>
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-4">
                  Web Development
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-4">
                  <div className="flex flex-col items-center gap-2 w-20 text-center">
                    <FaReact size={40} className="text-cyan-500" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">React</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-20 text-center">
                    <FaLaravel size={40} className="text-red-500" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Laravel</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-20 text-center">
                    <SiJavascript size={36} className="text-yellow-400" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">JavaScript</span>
                  </div>
                </div>
              </div>

              {/* Kategori DevOps & Tools */}
              <div>
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-4">
                  DevOps & Tools
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-4">
                  <div className="flex flex-col items-center gap-2 w-20 text-center">
                    <FaDocker size={40} className="text-blue-500" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Docker</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-20 text-center">
                    <FaGitAlt size={40} className="text-orange-600" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Git</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 w-20 text-center">
                    <FaLinux size={40} className="text-slate-800 dark:text-white" />
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Linux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-[#434C5E] px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Project Highlight</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12 -mt-6 rounded"></div>
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
                  A full-stack web application to optimize ship scheduling at PT. Pelayaran Nasional Indonesia. Includes ship route planning, docking period visualization, conflict detection, and Gantt chart display.
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
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12 -mt-6 rounded"></div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl">Ship Operation Intern — PT. Pelayaran Nasional Indonesia (Persero)</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Jul 2025 - now</p>
              <p className="text-gray-700 dark:text-gray-400">
                Developed simPLAN, optimized ship scheduling with real-time Gantt chart timeline and conflict detection. Reduced manual scheduling errors and improved operational efficiency.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Guest Speaker — Basic Media Schooling by HIMATIKA ITS</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">2024</p>
              <p className="text-gray-700 dark:text-gray-400">
                Presented design principles and Figma to 30+ students, achieving 93% satisfaction rate.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Head of Publication and Quality Control  — BEM FSAD ITS</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">2024</p>
              <p className="text-gray-700 dark:text-gray-400">
                Conceptualized design and branding in instagram, boosting Instagram interaction by 20% compared to the previous year.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Head of Digital Design Subdivision   — OMITS17</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">2023</p>
              <p className="text-gray-700 dark:text-gray-400">
                Optimized job description management for the Digital Design staff, which improved resource efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50 dark:bg-[#3B4252] px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12 -mt-6 rounded"></div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl">B.Sc. in Mathematics & Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Institut Teknologi Sepuluh Nopember (2022 - 2026)</p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-400 mt-2">
                <li>Relevant coursework: Object Oriented Programming, Mathematics Logic, Software Engineering</li>
                <li>Focus: Computer Science</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl">Mathematics and Natural Science</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">SMA Negeri 1 Cikarang Pusat (2019 - 2022)</p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-400 mt-2">
                <li>Relevant coursework: Physics, Mathematics, Chemistry, Biology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-[#2E3440] px-6">
        {/* <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12 -mt-4 rounded"></div>
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
        </div> */}
      </section>
    </main>
  );
};

export default Homepage;
