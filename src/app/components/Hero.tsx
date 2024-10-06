
"use client"; 

import { useState } from 'react';
import Image from 'next/image';
import Modal from './Email';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-dark-blue text-white relative">
      <div className="relative max-w-6xl w-full p-8 md:p-12">
        <div className="absolute inset-0 bg-blue-500 transform rotate-3 -translate-x-20 -translate-y-20 z-[-1]"></div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 relative z-10">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-48 md:w-60 lg:w-80 h-48 md:h-60 lg:h-80 relative mb-8">
              <Image
                src="/nakato.jpg"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Nakato Musana Zaina
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Software Developer
            </p>
            <button
              onClick={openModal}
              className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Contact Me
            </button>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Me</h2>
            <p className="text-lg md:text-xl mb-4 leading-relaxed">
              Hello! I’m Nakato Musana Zaina, a passionate software developer with experience in building dynamic and responsive web applications. My background includes working with modern frameworks and tools to deliver high-quality solutions.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              I enjoy solving complex problems and learning new technologies. In addition to my technical skills, I bring a strong work ethic and a commitment to delivering results.
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Hero;
