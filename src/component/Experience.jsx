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
    { id: 6, logo: java, name: "Java" },
    { id: 7, logo: mongo, name: "MongoDB" },
  ];

  return (
    <>
      <div
        name="Experience"
        className="max-w-screen-2xl mx-5 md:px-20 md:mt-10 bg-gray-50 py-10 rounded-lg"
      >
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Experience</h1>
          <p className="text-xl mt-2">
            I have over 1 year of experience working with the following technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {items.map(({ id, logo, name }) => (
            <div
              key={id}
              className="w-[200px] h-[200px] md:w-[220px] md:h-[220px] flex flex-col items-center justify-center text-center rounded-full shadow-lg mb-5 hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-[2px] border-gray-300"
            >
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={logo}
                alt={`${name} logo`}
              />
              <span className="text-xl font-semibold mt-4">{name}</span>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}
