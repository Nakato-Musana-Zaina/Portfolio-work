import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: "School Project",
    description: "A Python Backend project built in the Django framework used to store students' records, courses, classrooms, teachers, and class periods. An API was built to fetch the students' information from the database.",
    link: "https://github.com/Nakato-Musana-Zaina/Python_School_Project",
    image: "school.png" 
  },
  {
    title: "Envo-green",
    description: "A plant project built using HTML, CSS, and JavaScript, leveraging Treffle API to enable users to search for their favorite plants and see botanical names and the plant's descriptions.",
    link: "https://github.com/Nakato-Musana-Zaina/akili-plants_projects",
    demo: "https://akili-plants.vercel.app/",
    image: "/envo_green.png" 
  },
  {
    title: "Suubi",
    description: "An end-to-end SACCO management system built using JavaScript for the front end and Python for the back end. It aims to solve the lack of transparency in SACCO management of members' funds by the Managers in rural Rwanda.",
    link: "https://drive.google.com/drive/folders/16JKTE67MsIvIVbQSIn3Nq8_2seB9HOc_?usp=drive_link",
    demo: "https://github.com/akirachix/Suubi-Informational",
    image: "/suubi.png"
  },
  {
    title: "Shawazi",
    description: "A land management system (PWA) that integrates front-end(Nextjs) and back-end(Python) technologies. It is meant to help people manage their land transactions, carry out land searches, have contracts, and also find land.",
    link: "https://github.com/Nakato-Musana-Zaina/pwa-shawazi",
    demo: "https://pwa-shawazi.vercel.app/",
    image: "/shawazi.png" 
  },
];

const Projects = () => (
  <section id="projects" className="w-full bg-gray-100 py-16">
    <div className="container mx-auto px-4 md:px-8 max-w-8xl">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 text-center text-dark-blue">Projects</h2>
      <h3 className="text-xl md:text-2xl mb-8 text-center text-gray-600 mt-12 mb-4">Explore my recent projects below</h3> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="relative h-40 md:h-48 overflow-hidden"> 
              <Image 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4"> 
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{project.title}</h3> 
              <p className="text-base mb-4 text-gray-700">{project.description}</p> 
              <div className="flex space-x-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-lg"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-green-600 hover:text-green-800 transition-colors text-lg"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
