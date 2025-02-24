'use client'

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import nakato from '/public/nakato.jpg';
import {
  FaReact,
  FaDatabase,
  FaAndroid,
  FaJira,
  FaCogs,
  FaFigma,
  FaGit,
  FaHtml5,
  FaCss3,
} from 'react-icons/fa';
import { SiNextdotjs, SiDjango } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white text-black py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center text-gradient-to-r from-green-700 to-orange-500 mb-6"
        >
          About Me ✨
        </motion.h2>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 0.5 }}
          className="border-t-2 border-green-700 mx-auto mb-12"
        />

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-72 h-80 rounded overflow-hidden shadow-lg mb-8 md:mb-0"
          >
            <Image
              src={nakato}
              alt="about me"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            {/* Description */}
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building modern and responsive web
              applications. With a strong foundation in both frontend and backend technologies, I strive to
              create seamless and efficient user experiences.
            </p>

            {/* Progress Bars */}
            <div className="space-y-6">
              {/* HTML & CSS */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center"
              >
                <FaHtml5 size={24} className="text-orange-500 mr-2" />
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-700 to-orange-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </motion.div>

              {/* React JS */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center"
              >
                <FaReact size={24} className="text-blue-600 mr-2" />
                <label htmlFor="reactjs" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-700 to-orange-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </motion.div>

              {/* Next.js */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center"
              >
                <SiNextdotjs size={24} className="text-black mr-2" />
                <label htmlFor="nextjs" className="w-2/12">
                  Next.js
                </label>
                <div className="grow bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-700 to-orange-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </motion.div>

              {/* Python */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center"
              >
                <SiDjango size={24} className="text-green-600 mr-2" />
                <label htmlFor="python" className="w-2/12">
                  Python
                </label>
                <div className="grow bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-700 to-orange-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </motion.div>

              {/* Android */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex items-center"
              >
                <FaAndroid size={24} className="text-green-700 mr-2" />
                <label htmlFor="android" className="w-2/12">
                  Android
                </label>
                <div className="grow bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-700 to-orange-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-14 mb-20 flex justify-center space-x-24"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-orange-500">
              2+
            </h3>
            <p>Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-orange-500">
              50+
            </h3>
            <p>Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-orange-500">
              10+
            </h3>
            <p>Happy Clients</p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mt-16"
        >
          <h4 className="text-3xl font-bold text-center mb-8">More Skills</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SQL & DB */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-green-800 p-6 rounded-lg shadow-md text-center space-y-4"
            >
              <FaDatabase size={48} className="text-orange-600 mx-auto" />
              <h4 className="text-xl font-bold text-white">SQL & DB</h4>
              <p className="text-sm text-white">
                Familiarity with using SQL to manage relational databases and manipulate data.
              </p>
            </motion.div>

            {/* Agile & Jira */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-green-800 p-6 rounded-lg shadow-md text-center space-y-4"
            >
              <FaJira size={48} className="text-blue-700 mx-auto" />
              <h4 className="text-xl font-bold text-white">Agile & Jira</h4>
              <p className="text-sm text-white">
                Experienced in Agile Methodologies and Jira for effective project management.
              </p>
            </motion.div>

            {/* Data Structures */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-green-800 p-6 rounded-lg shadow-md text-center space-y-4"
            >
              <FaCogs size={48} className="text-purple-600 mx-auto" />
              <h4 className="text-xl font-bold text-white">Data Structures</h4>
              <p className="text-sm text-white">
                Experienced in leveraging linear and non-linear data structures like stacks and trees.
              </p>
            </motion.div>

            {/* Analytics */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-green-800 p-6 rounded-lg shadow-md text-center space-y-4"
            >
              <AiOutlineApi size={48} className="text-yellow-600 mx-auto" />
              <h4 className="text-xl font-bold text-white">Analytics</h4>
              <p className="text-sm text-white">
                Solid grasp of using Google Analytics to track user behavior and measure engagement.
              </p>
            </motion.div>

            {/* Design Tools */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-green-800 p-6 rounded-lg shadow-md text-center space-y-4"
            >
              <FaFigma size={48} className="text-pink-600 mx-auto" />
              <h4 className="text-xl font-bold text-white">Design Tools</h4>
              <p className="text-sm text-white">
                Skilled in designing intuitive user interfaces using Figma and Adobe Illustrator.
              </p>
            </motion.div>

            {/* Version Control */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-green-800 p-6 rounded-lg shadow-md text-center space-y-4"
            >
              <FaGit size={48} className="text-orange-600 mx-auto" />
              <h4 className="text-xl font-bold text-white">Version Control</h4>
              <p className="text-sm text-white">
                Ability to leverage Git and GitHub for version control and effective collaboration.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;