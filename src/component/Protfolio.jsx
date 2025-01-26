import React from "react";

import reactjs from "../../public/images/react_logo.png";
import mern from "../../public/images/MERN_stack.jpg";

export default function Portfolio() {
  const Carditems = [
    {
      id: 1,
      logo: reactjs,
      name: "ReactJS",
      sourcecode: "https://github.com/girish1802/Protfolio",
      description:
        "Created a responsive and visually appealing portfolio website to highlight skills, projects, and accomplishments effectively.",
    },
    {
      id: 2,
      logo: mern,
      name: "MERN",
      sourcecode: "https://github.com/girish1802/CRUD_MERN",
      description:
        "A MERN stack CRUD operation refers to implementing Create, Read, Update, and Delete functionality in an application using the MERN stack components.",
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
            {Carditems.map(({ id, logo, name, description, sourcecode }) => (
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
                  <p className="text-sm text-gray-700">{description}</p>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <a
                      href={sourcecode}
                      className="font-bold text-white bg-green-500 rounded px-4 py-2 hover:bg-green-600 transition-transform w-full sm:w-auto"
                    >
                      Source Code
                    </a>
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


