import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode } from 'react-icons/fa';


const projects = [
  {
    title: "School Project",
    description: "A Python project built in the Django framework is used to store the students' records, courses, classrooms, teachers, and class periods. An API was built to fetch the students' information from the database",
    link: "https://github.com/Nakato-Musana-Zaina/Python_School_Project",
    icon: <FaCode size={40} className="text-blue-600" />
  },
  {
    title: "Envo-green",
    description: "A plant project built using HTML, CSS, and JavaScript, leveraging Treffle API to enable users to search for their favorite plants and see botanical names and the plant’s descriptions.",
    link: "https://github.com/Nakato-Musana-Zaina/akili-plants_projects ",
    icon: <FaExternalLinkAlt size={40} className="text-green-600" />
  },
  {
    title: "Suubi",
    description: "An end-to-end SACCO management system built using Javascript for the front end and Python for the back end. It is aimed at solving the lack of transparency  in the SACCO management of members' funds by the Managers in rural Rwanda.",
    link: "https://drive.google.com/drive/folders/16JKTE67MsIvIVbQSIn3Nq8_2seB9HOc_?usp=drive_link ",
    icon: <FaLaptopCode size={40} className="text-orange-600" />
  },
  {
    title: "Shawazi",
    description: "It is a land management system that integrates front-end and back-end technologies. Its is meant to help people with managing their land transactions, carryout land searches have contracts and also find land.",
    link: "https://github.com/Nakato-Musana-Zaina/shawazi-frontend-pwa",
    demo: "https://shawazi-dashboard-7c2l-kmimi0u8f-nakato-musana-zainas-projects.vercel.app/",
    icon: <FaGithub size={40} className="text-gray-600" />
  },
];

const Projects = () => (
  <section id="projects" className="w-full bg-gray-100 py-12">
    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-center text-dark-blue">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 flex justify-center items-center">
              {project.icon}
            </div>
            
            <div className="p-4">
              
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-base mb-4 text-gray-700">{project.description}</p>
              <div className="flex flex-wrap space-x-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
