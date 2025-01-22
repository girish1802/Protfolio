import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <hr />
      <div className="flex flex-col items-center justify-center py-8 bg-gray-100">
        <footer className="text-center">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 my-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="text-gray-600 hover:text-blue-600 hover:scale-110 transition-transform duration-200"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="text-gray-600 hover:text-pink-500 hover:scale-110 transition-transform duration-200"
            >
              <AiFillInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-600 hover:text-blue-700 hover:scale-110 transition-transform duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-600 hover:text-black hover:scale-110 transition-transform duration-200"
            >
              <FaSquareGithub size={24} />
            </a>
          </div>

          {/* Copyright Text */}
          <div className="border-t border-gray-300 w-full max-w-3xl mx-auto">
            <p className="my-6 text-gray-700 text-lg">
              © {currentYear} Girish Sali. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
