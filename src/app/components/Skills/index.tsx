import { FaReact, FaDatabase, FaJira, FaFigma, FaGit, FaAndroid, FaCogs, FaPeopleArrows } from 'react-icons/fa';
import { SiNextdotjs, SiDjango } from 'react-icons/si';  
import { AiOutlineApi } from 'react-icons/ai'; 

const skills = [
  {
    title: "React.js",
    description: "Proficient in building dynamic, component-based user interfaces with React.js.",
    icon: <FaReact size={48} className="text-blue-600" />
  },
  {
    title: "Next.js",
    description: "Skilled in using Next.JS routing and integrating server-side data for efficient page rendering.",
    icon: <SiNextdotjs size={48} className="text-black" />
  },
  {
    title: "SQL & DB",
    description: "Familiarity with using SQL to manage relational databases and manipulate data.",
    icon: <FaDatabase size={48} className="text-orange-600" />
  },
  {
    title: "Android",
    description: "Skilled in implementing interfaces and abstract classes in Android applications.",
    icon: <FaAndroid size={48} className="text-green-700" />
  },
  {
    title: "Django & DRF",
    description: "Implementing authentication and building RESTful APIs using Django and DRF.",
    icon: <SiDjango size={48} className="text-green-600" />  
  },
  {
    title: "Agile & Jira",
    description: "Experienced in Agile Methodologies and Jira for effective project management.",
    icon: <FaJira size={48} className="text-blue-700" />
  },
  {
    title: "Data Structures",
    description: "Experienced in leveraging linear and non-linear data structures like stacks and trees.",
    icon: <FaCogs size={48} className="text-purple-600" />
  },
  {
    title: "Analytics",
    description: "Solid grasp of using Google Analytics to track user behavior and measure engagement.",
    icon: <AiOutlineApi size={48} className="text-yellow-600" />  
  },
  {
    title: "Design Tools",
    description: "Skilled in designing intuitive user interfaces using Figma and Adobe Illustrator.",
    icon: <FaFigma size={48} className="text-pink-600" />
  },
  {
    title: "Version Control",
    description: "Ability to leverage Git and GitHub for version control and effective collaboration.",
    icon: <FaGit size={48} className="text-orange-600" />
  },
  {
    title: "Collaboration",
    description: "Experienced in working collaboratively with teams to achieve project goals.",
    icon: <FaPeopleArrows size={48} className="text-yellow-600" /> // Changed to a more suitable collaboration icon
  },
  {
    title: "Prioritization",
    description: "Knowledgeable in prioritization techniques such as Weighted Scoring and MoSCoW.",
    icon: <FaCogs size={48} className="text-gray-600" />  
  }
];

const Skills = () => (
  <section id="skills" className="w-full bg-gray-200 py-16">
    <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-center text-dark-blue">Skills</h2>
      <p className="text-xl md:text-2xl mb-12 text-center text-gray-700 max-w-3xl mx-auto">
        Here are some of the key skills and technologies I have experience with. Each skill is highlighted with a relevant icon and a short description to provide a better understanding of my expertise.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl p-6 flex flex-col items-center justify-between h-full">
            <div className="mb-4 bg-yellow-200 p-4 rounded-full flex justify-center items-center"> 
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark-blue text-center">{skill.title}</h3> 
            <p className="text-base text-gray-700 text-center flex-grow">{skill.description}</p> 
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
