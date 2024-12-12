import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <hr />
      <div className="flex flex-col items-center justify-center ">
        <footer>
          <div className=" flex  justify-center space-x-4 my-8 mt-8" >
            <FaFacebook size={24} />
            <AiFillInstagram size={24} />
            <FaLinkedin size={24} />
            <FaSquareGithub size={24} />
          </div>

        <div  className=" border-t border-gray-800 ">
            <p className="my-8 text-lg">© 2024 Your Girish. All rights reserved.</p>
        </div>
        </footer>
      </div>
    </>
  );
}
