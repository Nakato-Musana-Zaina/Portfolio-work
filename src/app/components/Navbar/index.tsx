"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaHome, FaGraduationCap, FaCogs, FaFolderOpen } from 'react-icons/fa';
import { HiOutlineLightBulb, HiMenu, HiX } from 'react-icons/hi';

const navbarColor = 'bg-gray-800';  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`flex flex-col md:flex-row justify-between items-center p-4 ${navbarColor} text-white`}>
      {/* Logo section */}
      <div className="flex items-center space-x-2">
        <HiOutlineLightBulb size={30} className="text-yellow-500" /> 
        <span className="text-2xl font-bold">Musana</span>
      </div>

      {/* Mobile menu button */}
      <button 
        className="md:hidden text-white p-2 focus:outline-none" 
        onClick={toggleMenu}
      >
        {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </button>

    
      <div 
        className={`md:flex items-center justify-between md:space-x-8 md:relative inset-0 md:inset-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} w-full md:w-auto bg-gray-800 md:bg-transparent md:pl-0 pl-6 absolute md:static top-16 left-0`}
      >
        <div className="flex flex-col md:flex-row md:space-x-6 mt-6 md:mt-0">
          <Link href="/" className="flex items-center px-4 py-2 text-lg hover:underline">
            <FaHome size={22} className="mr-2 text-yellow-500" /> Home
          </Link>
          <Link href="#skills" className="flex items-center px-4 py-2 text-lg hover:underline">
            <FaGraduationCap size={22} className="mr-2 text-yellow-500" /> Skills
          </Link>
          <Link href="#projects" className="flex items-center px-4 py-2 text-lg hover:underline">
            <FaCogs size={22} className="mr-2 text-yellow-500" /> Projects
          </Link>
          <Link href="#footer" className="flex items-center px-4 py-2 text-lg hover:underline">
            <FaFolderOpen size={22} className="mr-2 text-yellow-500" /> Contact me
          </Link>
        </div>

        {/* Social media icons */}
        <div className="flex space-x-6 mt-6 md:mt-0 md:ml-8">
          <a
            href="https://www.linkedin.com/in/nakatommusanazaina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-600"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Nakato-Musana-Zaina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-600"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
