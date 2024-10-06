import { FaReact, FaDatabase, FaJira, FaFigma, FaGit, FaAndroid, FaCogs } from 'react-icons/fa';
import { SiNextdotjs, SiDjango } from 'react-icons/si';  
import { AiOutlineApi } from 'react-icons/ai'; 


const skills = [
  {
    title: "React.js",
    description: "Proficient in building dynamic, component-based user interfaces with React.js.",
    icon: <FaReact size={40} className="text-blue-600" />
  },
  {
    title: "Next.js",
    description: "Skilled in using Next.JS routing and integrating server-side data for efficient page rendering.",
    icon: <SiNextdotjs size={40} className="text-black" />
  },
  {
    title: "SQL & Databases",
    description: "Familiarity with using SQL to manage relational databases and manipulate data.",
    icon: <FaDatabase size={40} className="text-orange-600" />
  },
  {
    title: "Android Development",
    description: "Skilled in implementing interfaces and abstract classes in Android applications.",
    icon: <FaAndroid size={40} className="text-green-700" />
  },
  {
    title: "Django & Django Rest Framework",
    description: "Ability to implement authentication and authorization mechanisms in Django. Skilled in building RESTful APIs using Django Rest Framework.",
    icon: <SiDjango size={40} className="text-green-600" />  
  },
  {
    title: "Agile & Jira",
    description: "Experienced in Agile Methodologies and Jira for effective project management.",
    icon: <FaJira size={40} className="text-blue-700" />
  },
  {
    title: "Data Structures",
    description: "Experienced in leveraging linear and non-linear data structures like stacks and trees.",
    icon: <FaCogs size={40} className="text-purple-600" />
  },
  {
    title: "Analytics",
    description: "Solid grasp of using Google Analytics to track user behavior and measure engagement.",
    icon: <AiOutlineApi size={40} className="text-yellow-600" />  
  },
  {
    title: "Design Tools",
    description: "Skilled in designing intuitive user interfaces using Figma and Adobe Illustrator.",
    icon: <FaFigma size={40} className="text-pink-600" />
  },
  {
    title: "Version Control",
    description: "Ability to leverage Git and GitHub for version control and effective collaboration.",
    icon: <FaGit size={40} className="text-orange-600" />
  },
  {
    title: "Prioritization Techniques",
    description: "Knowledgeable in prioritization techniques such as Weighted Scoring and MoSCoW.",
    icon: <FaCogs size={40} className="text-gray-600" />  
  }
];

const Skills = () => (
  <section id="skills" className="w-full min-h-screen bg-gray-200 py-12">
    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center text-dark-blue">Skills</h2>
      <p className="text-lg md:text-xl mb-12 text-center text-gray-700">
        Here are some of the key skills and technologies I have experience with. Each skill is highlighted with a relevant icon and a short description to provide a better understanding of my expertise.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg p-6 flex flex-col items-center">
            <div className="mb-4 bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-full flex justify-center items-center">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">{skill.title}</h3>
            <p className="text-base text-gray-700 text-center">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
