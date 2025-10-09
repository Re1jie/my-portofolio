import React from 'react';
import Button from '../components/Button'; // Asumsi komponen Button ada di path ini
import { FaReact, FaLaravel, FaDocker } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const ProjectsPage = () => {
  return (
    <main className="text-gray-800 dark:text-white">

      {/* Hero Section */}
      <section id="hero-projects" className="min-h-[36vh] flex items-center justify-center bg-gray-50 dark:bg-[#2E3440] text-center px-4">
        <div className="mt-24 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
            A showcase of my skills and passion for building things with code. Here you can see a real-world example of what I can bring to your team.
          </p>
        </div>
      </section>

      {/* Project Highlight: simPLAN */}
      <section id="simplan-project" className="py-20 sm:py-24 bg-white dark:bg-[#3B4252] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
            simPLAN: Ship Planning & Report System
          </h2>
          <div className="w-64 h-1 bg-cyan-500 mx-auto mb-12 rounded"></div>

          {/* Deskripsi Umum Proyek simPLAN */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              <strong>simPLAN</strong> is a full-stack web application that I developed to optimize the ship scheduling and reporting process at PT. Pelayaran Nasional Indonesia (PELNI). This application transforms a manual process prone to errors into an efficient, centralized, and verified digital workflow.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <FaLaravel size={24} className="text-red-500" />
                <span>Laravel</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <FaReact size={24} className="text-cyan-500" />
                <span>React</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <FaDocker size={24} className="text-blue-500" />
                <span>Docker</span>
              </div>
            </div>
          </div>

          {/* Showcase Fitur-Fitur Utama */}
          <div className="space-y-20">

            {/* Fitur 1: Parsing Jadwal dari Excel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Excel Schedule Parsing</h3>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  A major challenge was converting complex ship schedule data from Excel into structured system data. To address this, an intelligent parsing algorithm was implemented by using JavaScript. This feature allows users to directly copy and paste schedule data from Excel into the textarea given, which then automatically parses and structures the information. This significantly reduces manual input time and minimizes the risk of human error.
                </p>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg p-4">
                <img src="/img/parsing.png" alt="Showcase Fitur Parsing Jadwal" className="rounded-md w-full h-auto object-cover"/>
              </div>
            </div>

            {/* Fitur 2: Deteksi Konflik Jadwal Kapal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Ship Schedule Conflict Detection</h3>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  To ensure smooth operations, the system must detect scheduling overlaps where multiple ships are assigned to the same port in the same date and time simultaneously. A backend logic was developed using PHP with Laravel framewok to analyze all schedule entries and automatically identify potential conflicts. The results are displayed visually in the user interface, enabling operators to quickly verify and correct any issues.
                </p>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg p-4 md:order-1">
                {/* Ganti `src` dengan path gambar showcase Anda */}
                <img src="/img/deteksibareng.png" alt="Showcase Fitur Deteksi Konflik" className="rounded-md w-full h-auto object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;