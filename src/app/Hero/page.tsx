'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram, 
  Mail, 
  
} from 'lucide-react';
import nakato from '/public/nakato.jpg';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Handle PDF Download
  const handleDownloadPDF = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/Nakato_Musana_Zaina_Resume.pdf';
    link.download = 'Nakato_Musana_Zaina_Resume.pdf';
    link.onload = () => setIsDownloading(false); // Reset loading state after download
    link.click();
  };

 

  // Persist Dark Mode Preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} overflow-hidden relative`}>
      <Navbar/>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">

          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="space-y-8">
            <div className="text-yellow-400 text-lg tracking-wider">✦ WELCOME TO PORTFOLIO ✦</div>
            <h1 className="text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-orange-500">
             {/* eslint-disable-next-line react/no-unescaped-entities */}
              I'm Nakato Musana Zaina
              <br />
              <span className="text-5xl text-green-800">Full Stack Developer</span>
              <br />
              <span className='text-2xl '> Based In Uganda  </span>
            </h1>
            <p className="text-gray-900 dark:text-gray-900 text-lg tracking-wide">
              Passionate about technology and innovation aimed at improving the quality of life .
            </p>
            
            <div className="flex">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="bg-gradient-to-r from-green-700 to-orange-500 text-white px-6 py-4 rounded-full hover:opacity-90 transition-opacity duration-300 flex items-center space-x-2"
              >
                <span>VIEW WORK</span> 
                <span>→</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="relative">
            <div className="relative z-10">
              <Image
                src={nakato}
                alt="Profile"
                width={500}
                height={500}
                className="rounded-lg mt-20 shadow-lg border-4 border-white dark:border-gray-800"
              />
              <div className="flex mt-8 space-x-4 justify-center">
                {/* Social Media Icons with Individual Backgrounds */}
                <div className="bg-orange-300 p-2 rounded-full">
                  <a href="www.linkedin.com/in/nakato-musana-zaina-9227992b3" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                    <Linkedin size={32} />
                  </a>
                </div>
                <div className="bg-orange-300 p-2 rounded-full">
                  <a href="https://github.com/Nakato-Musana-Zaina" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                    <Github size={32} />
                  </a>
                </div>
                <div className="bg-orange-300 p-2 rounded-full">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                    <Twitter size={32} />
                  </a>
                </div>
                <div className="bg-orange-300 p-2 rounded-full">
                  <a href="www.linkedin.com/in/nakato-musana-zaina-9227992b3" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                    <Instagram size={32} />
                  </a>
                </div>
                <div className="bg-orange-300 p-2 rounded-full">
                  <a href="mailto:nakatozainamusana@gmail.com" className="hover:text-yellow-400 transition-colors duration-300">
                    <Mail size={32} />
                  </a>
                </div>
              </div>
              <div className=" bg-gradient-to-r from-green-700 to-orange-500 absolute top-4 right-4  text-white px-4 py-2 rounded-full text-sm">
                Software Developer
              </div>
            </div>
            <div className="absolute top-0 right-0 -z-10">
              <Zap size={48} className="text-yellow-400" />
            </div>
          </motion.div>
        </div>

        {/* Scrolling Text */}
        <div className="overflow-hidden py-8 mt-12 ml-64 text-center">
          <motion.div className="flex space-x-8 animate-scroll text-lg tracking-wider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
            <span>App Design</span>
            <span>✦</span>
            <span>Website Design</span>
            <span>✦</span>
            <span>Web Development</span>
            <span>✦</span>
            <span>Data Analysis</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;