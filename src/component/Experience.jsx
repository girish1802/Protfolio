import React from "react";
import reactjs from "../../public/images/react_logo.png";
import node from "../../public/images/node_logo.png";
import mongo from "../../public/images/mongodb_logo.png";
import java from "../../public/images/java_logo.png";
import html from "../../public/images/html_logo.png";
import css from "../../public/images/css_logo.png";
import javascript from "../../public/images/javascript_logo.png";

export default function Experience() {
  const items = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: reactjs, name: "React.js" },
    { id: 5, logo: node, name: "Node.js" },
    
    { id: 6, logo: mongo, name: "MongoDB" },
  ];

  return (
    <>
      <div
        name="Experience"
        className="max-w-screen-2xl mx-auto px-5 md:px-20 md:mt-10 bg-gray-50 py-10 rounded-lg"
      >
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Experience</h1>
          <p className="text-lg md:text-xl mt-2">
            I have over 4 Month of experience working with the following technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {items.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center text-center bg-white p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 border-[1px] border-gray-200"
            >
              <img
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full"
                src={logo}
                alt={`${name} logo`}
              />
              <span className="text-lg sm:text-xl font-semibold mt-3">{name}</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}
