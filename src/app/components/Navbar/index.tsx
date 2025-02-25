

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHome, FaFileAlt, FaCode, FaBlog, FaEnvelope } from 'react-icons/fa';
import { Moon, Sun } from 'lucide-react'; // Import Sun and Moon icons for dark mode toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For hamburger menu
  const [isDarkMode, setIsDarkMode] = useState(false); // For dark mode toggle

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={`sticky top-0 z-50 ${
        isDarkMode ? 'bg-gray-800' : 'bg-green-900'
      } text-white p-4 flex justify-between items-center`}
    >
      {/* Container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <span className="text-xl text-orange-500 font-bold flex items-center">
              <FaCode className="mr-2" /> NAKATO
            </span>
          </Link>
        </div>

        {/* Links (Desktop) */}
        <ul
          className={`hidden md:flex space-x-6 text-lg font-medium ${
            isOpen ? 'hidden' : ''
          }`}
        >
          <li>
            <Link href="/" className="flex items-center hover:text-orange-400 transition-colors duration-300">
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link href="/Skills" className="flex items-center hover:text-orange-400 transition-colors duration-300">
              <FaFileAlt className="mr-2" /> About_me
            </Link>
          </li>
          <li>
            <Link href="/Projects" className="flex items-center hover:text-orange-400 transition-colors duration-300">
              <FaCode className="mr-2" /> Projects
            </Link>
          </li>
          {/* <li>
            <Link href="/projects" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
              <FaBlog className="mr-2" /> 
            </Link>
          </li> */}
          <li>
            <Link href="/Footer" className="flex items-center hover:text-orange-400 transition-colors duration-300">
              <FaEnvelope className="mr-2" /> Contact_us
            </Link>
          </li>
        </ul>

        {/* Right Section: Dark Mode Toggle and Hire Me Button */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hire Me Button */}
          <button className="bg-orange-500 text-black px-4 py-2 rounded-full hover:bg-orange-300 transition-colors duration-300 flex items-center">
            <FaCode className="mr-2" /> HIRE ME
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:hidden flex-col absolute top-16 left-0 w-full bg-black py-4 space-y-4 text-center text-lg font-medium`}
        >
          <li>
            <Link href="/" className="flex items-center hover:text-orange-400 transition-colors duration-300 justify-center">
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link href="/Skills" className="flex items-center hover:text-orange-400 transition-colors duration-300 justify-center">
              <FaFileAlt className="mr-2" /> About_me
            </Link>
          </li>
          <li>
            <Link href="/Projects" className="flex items-center hover:text-orange-400 transition-colors duration-300 justify-center">
              <FaCode className="mr-2" /> Projects
            </Link>
          </li>
          {/* <li>
            <Link href="/projects" className="flex items-center hover:text-yellow-400 transition-colors duration-300 justify-center">
              <FaBlog className="mr-2" /> BLOG
            </Link>
          </li> */}
          <li>
            <Link href="/Footer" className="flex items-center hover:text-orange-400 transition-colors duration-300 justify-center">
              <FaEnvelope className="mr-2" /> CONTACT US
            </Link>
          </li>

          {/* Dark Mode Toggle (Mobile) */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="w-full p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 flex justify-center"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>

          {/* Hire Me Button (Mobile) */}
          <li>
            <button className="w-full bg-orange-600 text-black px-4 py-2 rounded-full hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center">
              <FaCode className="mr-2" /> HIRE ME
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;