import React from "react";

import reactjs from "../../public/images/react_logo.png";
import node from "../../public/images/node_logo.png";
import mongo from "../../public/images/mongodb_logo.png";
import java from "../../public/images/java_logo.png";

export default function Protfolio() {
  const Carditems = [
    {
      id: 1,
      logo: reactjs,
      name: "reactjs",
    },
    {
      id: 2,
      logo: node,
      name: "nodejs",
    },
    {
      id: 3,
      logo: mongo,
      name: "mongodb",
    },
    {
      id: 4,
      logo: java,
      name: "java",
    },
  ];
  return (
    <>
      <div  name="Protfolio" className="max-w-screen-2xl container   md:px-20 md:mt-10">
        <div>
          <div className="mx-5">
            <h1 className="text-3xl font-semibold">Protfolio</h1>
            <span className="underline font-semibold">Featured Projects</span>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 my-5 gap-5 ml-2 mr-2 md:ml-0 md:mr-0">
            {Carditems.map(({ id, logo, name }) => (
              <div
                className="md:w-[300px] md:[300px] rounded-lg border-[2px] hover:scale-110 duration-300 p-1 cursor-pointer  shadow-lg "
                key={id}
              >
                <div className="ml-3 ">
                  <img
                    src={logo}
                    alt=""
                    className="w-[120px] h-[120px]  rounded-full border-[2px] p-1"
                  />

                  <span className="font-bold text-2xl mb-2"> {name}</span>
                  <p className="text-sm text-grey-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>

                  <div className="space-x-4 justify-around py-2 px-4  ">
                    <button className=" font-bold text-white bg-blue-500 rounded px-4 py-2 hover:bg-blue-700">
                      Video
                    </button>
                    <button className=" font-bold text-white bg-green-500 rounded px-4 py-2 hover:bg-green-700">
                      SourceCode
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
