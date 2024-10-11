"use client";

import Image from 'next/image';

const Hero = () => {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Nakato_Musana_Zaina_Resume.pdf'; 
    link.download = 'Nakato_Musana_Zaina_Resume.pdf';
    link.click();
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-white text-black relative py-12">
      <div className="relative w-full px-6 sm:px-8 lg:px-12 ml-40 mr-40">
        <div className="flex flex-col lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-8 relative z-10 mt-12">
          {/* Left column - Image */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-96 sm:w-[500px] lg:w-[550px] h-96 sm:h-[500px] lg:h-[550px] relative mb-8">
              <Image
                src="/nakato.jpg"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-xl"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 text-[#001F3F]">
              Nakato Musana Zaina
            </h1>
            <p className="text-2xl sm:text-3xl mb-5 text-yellow-600">
              Software Developer
            </p>
          </div>

          {/* Right column - About Me */}
          <div className="flex-1 text-left lg:max-w-xl xl:max-w-2xl mt-8 lg:mt-0">
            <h2 className="text-5xl sm:text-6xl font-semibold mb-6 text-[#001F3F]">
              About Me
            </h2>
            <p className="text-2xl md:text-2xl mb-4 leading-relaxed text-gray-700 mt-40">
              Hello! I&apos;m <span className="text-yellow-600 font-semibold">Nakato Musana Zaina</span>, a passionate software developer with experience in building dynamic and responsive web applications.
            </p>
            <button
              onClick={handleDownloadPDF}
              className="px-8 py-4 bg-yellow-600 text-white font-semibold text-xl rounded-md shadow-md hover:bg-yellow-700 transition duration-300 mt-14"
            >
              Download My Resume
            </button>
          </div>
        </div>

        <p className="text-2xl md:text-2xl mb-4 leading-relaxed text-gray-700 mx-auto mt-8">
          I enjoy <span className="text-yellow-600 font-semibold">solving complex problems</span> and learning new technologies. In addition to my technical skills, I bring a <span className="text-[#001F3F] font-semibold">strong work ethic</span> and a commitment to delivering results.
        </p>
        <p className="text-2xl md:text-2xl text-gray-700">
          My background includes working with <span className="text-[#001F3F] font-semibold">modern frameworks and tools</span> to deliver high-quality solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
