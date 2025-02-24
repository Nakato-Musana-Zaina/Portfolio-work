'use client';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

// Define Props Interface for TypeScript
interface ProjectsProps {
  isDarkMode: boolean; // Explicitly define the type of isDarkMode
}

const projects = [
  {
    title: "Suubi",
    description: "An end-to-end SACCO management system built using JavaScript for the front end and Python for the back end. It aims to solve the lack of transparency in SACCO management of members' funds by the Managers in rural Rwanda.",
    link: "https://drive.google.com/drive/folders/16JKTE67MsIvIVbQSIn3Nq8_2seB9HOc_?usp=drive_link",
    demo: "https://github.com/akirachix/Suubi-Informational",
    image: "/suubi.png",
    tags: ["JavaScript", "Python", "SACCO"],
  },
  {
    title: "Shawazi",
    description: "A land management system (PWA) that integrates front-end(Nextjs) and back-end(Python) technologies. It is meant to help people manage their land transactions, carry out land searches, have contracts, and also find land.",
    link: "https://github.com/Nakato-Musana-Zaina/pwa-shawazi",
    demo: "https://pwa-shawazi.vercel.app/",
    image: "/shawazi.png",
    tags: ["Next.js", "Python", "PWA"],
  },
  {
    title: "School Project",
    description: "A Python Backend project built in the Django framework used to store students' records, courses, classrooms, teachers, and class periods. An API was built to fetch the students' information from the database.",
    link: "https://github.com/Nakato-Musana-Zaina/Python_School_Project",
    image: "/school.png",
    tags: ["Django", "Python", "API"],
  },
  {
    title: "Envo-green",
    description: "A plant project built using HTML, CSS, and JavaScript, leveraging Treffle API to enable users to search for their favorite plants and see botanical names and the plant's descriptions.",
    link: "https://github.com/Nakato-Musana-Zaina/akili-plants_projects",
    demo: "https://akili-plants.vercel.app/",
    image: "/envo_green.png",
    tags: ["HTML", "CSS", "JavaScript", "API"],
  },
];

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [page, setPage] = useState(0); // Current page index

  // Paginate projects to show only two at a time
  const paginatedProjects = projects.slice(page * 2, page * 2 + 2);

  // Handle pagination
  const handleNext = () => {
    if (page < Math.ceil(projects.length / 2) - 1) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <section
      id="projects"
      className={`w-full ${isDarkMode ? "bg-black" : "bg-gradient-to-b from-gray-100 to-white"} ${
        isDarkMode ? "text-white" : "text-black"
      } py-8 md:py-16 relative`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-center text-green-800"
        >
          My Projects ✨
        </motion.h2>
        <h3 className="text-base sm:text-lg md:text-xl mb-4 text-center text-gray-600">
          Explore my work and creativity
        </h3>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 0.5 }}
          className="border-t-2 border-green-700 mx-auto mb-8 md:mb-12"
        />

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {paginatedProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`bg-gradient-to-b from-green-100 to-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl`}
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Project Details */}
              <div className={`p-4 sm:p-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base md:text-lg mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 rounded-full text-xs sm:text-sm ${
                        isDarkMode
                          ? "bg-green-700 text-white"
                          : "bg-green-200 text-green-800"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-16 flex-col mt-8 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  {/* GitHub Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 rounded-lg text-sm sm:text-base font-medium bg-gradient-to-r from-green-700 to-green-500 text-white hover:bg-green-600 transition-colors"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>

                  {/* Live Demo Button (if available) */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 rounded-lg text-sm sm:text-base font-medium bg-gradient-to-r from-orange-700 to-orange-500 text-white hover:bg-orange-600 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Buttons */}
        <div className="flex justify-center items-center space-x-4 mt-10">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors ${
              page === 0
                ? "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-gradient-to-r from-green-700 to-orange-500 text-white hover:bg-green-600"
            }`}
          >
            <FaArrowLeft className="inline-block mr-2" /> Previous
          </button>
          <button
            onClick={handleNext}
            disabled={page >= Math.ceil(projects.length / 2) - 1}
            className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors ${
              page >= Math.ceil(projects.length / 2) - 1
                ? "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-gradient-to-r from-green-700 to-orange-500 text-white hover:bg-green-600"
            }`}
          >
            Next <FaArrowRight className="inline-block ml-2" />
          </button>
        </div>
      </div>

      {/* Decorative Sparkles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 text-green-500 text-3xl sm:text-4xl rotate-12">✨</div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 text-orange-500 text-3xl sm:text-4xl -rotate-12">✨</div>
        <div className="absolute top-20 right-10 sm:top-40 sm:right-20 text-yellow-500 text-3xl sm:text-4xl rotate-6">✨</div>
        <div className="absolute bottom-20 left-10 sm:bottom-40 sm:left-20 text-blue-500 text-3xl sm:text-4xl -rotate-6">✨</div>
        <div className="absolute top-30 left-30 sm:top-60 sm:left-60 text-pink-500 text-3xl sm:text-4xl rotate-24">✨</div>
        <div className="absolute bottom-30 right-30 sm:bottom-60 sm:right-60 text-purple-500 text-3xl sm:text-4xl -rotate-24">✨</div>
      </div>
    </section>
  );
};

export default Projects;