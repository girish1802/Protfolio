import React from "react";

import reactjs from "../../public/images/react_logo.png";
import node from "../../public/images/node_logo.png";
import mongo from "../../public/images/mongodb_logo.png";
import java from "../../public/images/java_logo.png";  

export default function Portfolio() {
  const Carditems = [
    {
      id: 1,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 2,
      logo: node,
      name: "NodeJS",
    },
    {
      id: 3,
      logo: mongo,
      name: "MongoDB",
    },
    {
      id: 4,
      logo: java,
      name: "Java",
    },
  ];

  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen-2xl container md:px-20 px-5 md:mt-10 mt-5"
      >
        <div>
          <div className="mx-5">
            <h1 className="text-3xl font-semibold">Portfolio</h1>
            <span className="underline font-semibold">Featured Projects</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-5 gap-5">
            {Carditems.map(({ id, logo, name }) => (
              <div
                className="md:max-w-[300px] rounded-lg border-[2px] hover:scale-105 duration-300 p-4 cursor-pointer shadow-lg"
                key={id}
              >
                <div className="text-center">
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="w-[120px] h-[120px] mx-auto rounded-full border-[2px] p-1 object-contain"
                  />
                  <h2 className="font-bold text-2xl mt-3 mb-2">{name}</h2>
                  <p className="text-sm text-gray-700">
                    A brief description about {name} and its use in projects.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <button className="font-bold text-white bg-blue-500 rounded px-4 py-2 hover:bg-blue-600 transition-transform w-full sm:w-auto">
                      Video
                    </button>
                    <button className="font-bold text-white bg-green-500 rounded px-4 py-2 hover:bg-green-600 transition-transform w-full sm:w-auto">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
