import React from "react";
import pic from "../../public/images/profil.jpg";
import { ReactTyped } from "react-typed";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container  mx-auto px-4 md:px-20 my-20 ">
        <div className="flex flex-col md:flex-row">
          <div className="  mt-12 md:mt-24  md:w-1/2 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex  space-x-1 text-2xl  md:text-4xl ">
              <h2 className=" ">Hello, I'm a</h2>
              {/* < span className=" text-red-700 font-bold ">Developer</span> */}
              <ReactTyped
                className=" text-red-700 font-bold "
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-m md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              facere quod voluptatum voluptates voluptatem nulla maxime odio.
              Exercitationem, modi delectus? Perspiciatis debitis alias iste
              voluptatem dicta rerum quasi sit quisquam?
            </p>
            <br />
            {/* icons */}
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0  justify-between">
              <div className=" space-y-2  text-xl">
                <span className="font-bold ml-3 md:ml-0 ">Available On</span>
                <ul className="flex space-x-5 text-2xl">
                  <li>
                    <a
                      href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="_blank">
                      <FaSquareGithub />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebook />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2  text-xl">
                <span className="font-bold  "> Currently Working On</span>
                <ul className="flex space-x-5 ml-8 md:ml-0 text-2xl">
                  <li>
                    <SiMongodb className="text-xl md:text-3xlrounded-full hover:scale-110duration-200   border-2" />
                  </li>
                  <li>
                    <SiExpress className="text-xl md:text-3xlrounded-full hover:scale-110duration-200   border-2" />
                  </li>
                  <li>
                    <FaReact className="text-xl md:text-3xlrounded-full hover:scale-110duration-200   border-2" />
                  </li>
                  <li>
                    <TbBrandNodejs className="text-xl md:text-3xlrounded-full hover:scale-110duration-200   border-2" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2  md:ml-48 md:mt-18 order-1 ml-10 mt-3">
            <img
              src={pic}
              alt="profile img"
              className="md:w-[450px] md:h-[450px]   rounded-full shadow-md"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
