import React from "react";
import pic from "../../public/images/profile.jpeg";
import { ReactTyped } from "react-typed";
import { FaFacebook, FaLinkedin, FaReact } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { SiMongodb, SiExpress } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-6 order-2 md:order-1">
            <span className="text-xl">Welcome to My Feed</span>
            <div className="flex flex-wrap space-x-2 text-2xl md:text-4xl">
              <h2>Hello, I'm a</h2>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
            <p className="text-base md:text-lg leading-relaxed text-justify">
              I am an MCA graduate specializing in web development, with
              expertise in creating user-focused and scalable web applications
              using modern technologies like React.js, Node.js, and MongoDB.
              Passionate about continuous learning, I stay updated with industry
              trends to deliver innovative solutions. I aim to contribute to
              impactful projects and collaborate with dynamic teams to achieve
              success.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 justify-between">
              {/* Social Media */}
              <div className="space-y-2 text-xl">
                <span className="font-bold">Available On</span>
                <ul className="flex space-x-5 text-2xl">
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="hover:text-blue-700 hover:scale-110 transition-transform duration-200"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="hover:text-gray-600 hover:scale-110 transition-transform duration-200"
                    >
                      <FaSquareGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram Profile"
                      className="hover:text-pink-500 hover:scale-110 transition-transform duration-200"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook Profile"
                      className="hover:text-blue-500 hover:scale-110 transition-transform duration-200"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Tech Stack */}
              <div className="space-y-2 text-xl">
                <span className="font-bold">Currently Working On</span>
                <ul className="flex space-x-5 text-2xl">
                  <li>
                    <SiMongodb className="text-green-500 hover:scale-110 transition-transform duration-200" />
                  </li>
                  <li>
                    <SiExpress className="text-gray-700 hover:scale-110 transition-transform duration-200" />
                  </li>
                  <li>
                    <FaReact className="text-blue-500 hover:scale-110 transition-transform duration-200" />
                  </li>
                  <li>
                    <TbBrandNodejs className="text-green-600 hover:scale-110 transition-transform duration-200" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
            <img
              src={pic}
              alt="Profile"
              className="w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
