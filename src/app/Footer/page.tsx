'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle form submission using EmailJS
  const handleSubmit = (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();

    // Basic validation
    if (!email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        e.target,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then(
        (result: { text: any; }) => {
          console.log(result.text); // Log success message
          setEmail('');
          setMessage('');
          setSuccess(true);
        },
        (error: { text: any; }) => {
          console.error(error.text); // Log error message
          alert('Failed to send the message. Please try again.');
        }
      );

    // Reset success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <footer className="bg-black text-green-300 py-8 px-4">
      <div className="container mx-auto">
        {/* Top section with logo and social icons */}
        {/* <div className="flex justify-between items-center mb-6">
          <div>
            <div className="mb-1">
              <span className="font-bold text-white text-2xl">NAKATO</span>
            </div>
            <div className="text-white text-base px-2 py-1 border border-white inline-block">
              Foriqra.
            </div>
          </div>

          <div className="flex space-x-4">
            <Link href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-gray-400 transition-colors" />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="text-2xl hover:text-gray-400 transition-colors" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="text-2xl hover:text-gray-400 transition-colors" />
            </Link>
          </div>
        </div> */}

        {/* Middle section with navigation links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
          <div>
            <div className="mb-1">
              <span className="font-bold text-orange-500 text-2xl">NAKATO</span>
            </div>
            <div className="text-white text-base px-2 py-1 border border-white inline-block mb-10">
              Foriqra.
            </div>
          </div>

          <div className="flex space-x-4 m-10">
            <Link href="https://www.linkedin.com/in/nakatommusanazaina" aria-label="Instagram">
              <FaInstagram className="text-3xl hover:text-gray-400 transition-colors" />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="text-3xl hover:text-gray-400 transition-colors" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="text-3xl hover:text-gray-400 transition-colors" />
            </Link>
          </div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="text-gray-500 text-base">
              <div>Kla | Kampala</div>
              <div>Nakawa</div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <Link href="/" className="block mb-2 text-lg hover:text-gray-400 transition-colors">
              Home
            </Link>
            <Link href="/Skills" className="block mb-2 text-lg hover:text-gray-400 transition-colors">
              Skills
            </Link>
            <Link href="/Projects" className="block mb-2 text-lg hover:text-gray-400 transition-colors">
              Projects
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Send Us a Message ✨</h3>
            {/* Success Message */}
            {success && (
              <div className="bg-green-700 text-white text-base px-4 py-2 rounded-md mb-4 text-center">
                Your message has been sent successfully!
              </div>
            )}
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-base font-medium mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-base focus:outline-none focus:border-gray-600 transition-colors"
                    required
                  />
                </div>
              </div>
              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-base font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-base focus:outline-none focus:border-gray-600 transition-colors"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-black font-medium py-3 px-6 rounded-md text-base hover:bg-gray-200 transition-colors"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section with contact info and copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="mr-2 text-lg">📞</span>
            <span className="text-lg">+(256) 77092-9185</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-lg">✉️</span>
            <a href="mailto:nakatozainamusana@gmail.com" className="text-lg hover:text-gray-400 transition-colors">
              nakatozainamusana@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8">
          Copyright © 2025. Nakato. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;