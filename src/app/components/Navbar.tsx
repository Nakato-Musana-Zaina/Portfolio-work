"use client"


import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaHome, FaUser, FaCogs, FaProjectDiagram } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi'; 
import { HiMenu, HiX } from 'react-icons/hi';

const navbarColor = 'bg-gray-800';  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`flex flex-col md:flex-row justify-between items-center p-4 ${navbarColor} text-white`}>
      <div className="flex items-center space-x-2">
        <HiOutlineLightBulb size={24} className="text-yellow-500" /> 
        <span className="text-xl font-bold">Musana</span>
      </div>

      
      <button 
        className="md:hidden text-white p-2 focus:outline-none" 
        onClick={toggleMenu}
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

    
      <div 
        className={`md:flex flex-col md:flex-row md:space-x-4 absolute md:relative inset-0 md:inset-auto bg-gray-800 md:bg-transparent transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
          <Link href="/" className="flex items-center px-4 py-2 hover:underline">
            <FaHome size={18} className="mr-1" /> Home
          </Link>
          <Link href="#about" className="flex items-center px-4 py-2 hover:underline">
            <FaUser size={18} className="mr-1" /> About
          </Link>
          <Link href="#skills" className="flex items-center px-4 py-2 hover:underline">
            <FaCogs size={18} className="mr-1" /> Skills
          </Link>
          <Link href="#projects" className="flex items-center px-4 py-2 hover:underline">
            <FaProjectDiagram size={18} className="mr-1" /> Projects
          </Link>
        </div>

        <div className="flex space-x-4 mt-4 mr-20 md:mt-4">
          <a
            href="https://www.linkedin.com/in/nakatommusanazaina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Nakato-Musana-Zaina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
