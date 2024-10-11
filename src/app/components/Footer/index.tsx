"use client";

import { useState, useRef } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import emailjs from 'emailjs-com'; 

const Footer = () => {
  const contactFormRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus('sending');

    try {
    
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_email: email,
        message: 'Your message has been successfully sent!',
      }, 'YOUR_USER_ID');

      setStatus('success');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('error');
    }
  };

  const closeMessage = () => {
    setStatus('');
  };

  return (
    <footer className="p-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto flex flex-col min-h-[300px]">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold">Nakato Musana Zaina</h2>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="mt-4 border border-white px-4 py-2 rounded transition-colors duration-300 bg-dark-blue hover:bg-yellow-600"
          >
            {showForm ? 'Hide Contact Form' : 'Show Contact Form'}
          </button>
        </div>

        {showForm && (
          <form ref={contactFormRef} onSubmit={handleSubmit} className="space-y-4 mb-6">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              rows={4}
            />
            <button type="submit" disabled={status === 'sending'} className="w-full px-4 py-2 bg-dark-blue rounded text-white transition-colors duration-300 hover:bg-yellow-600">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}

        {status && (
          <div className={`mb-6 p-4 ${status === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white rounded flex justify-between items-center`}>
            <p>{status === 'success' ? 'Your message has been successfully sent!' : 'Oops! Something went wrong. Please try sending your message again.'}</p>
            <button onClick={closeMessage} className="ml-4 text-white hover:text-gray-200">
              &times; {/* Close button */}
            </button>
          </div>
        )}

        <div className="mt-auto">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Referees:</h3>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex items-center mb-2 md:mb-0">
                <p className="mr-2">Linda Kamau - lkamau@gmail.com</p>
              </div>
              <div className="flex items-center">
                <p className="mr-2">Bilton Mweru - bimweru@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-600 transition-colors">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/Nakato-Musana-Zaina" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-600 transition-colors">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-600 transition-colors">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-600 transition-colors">
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>

          <p className="text-center text-sm text-gray-400">© 2024 Nakato Musana Zaina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
