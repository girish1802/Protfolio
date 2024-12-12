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
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "Reactjs",
    },
    {
      id: 5,
      logo: node,
      name: "Nodejs",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
    {
      id: 7,
      logo: mongo,
      name: "Mongodb",
    },
  ];

  return (
    <>
      <div name ="Experinece" className="max-w-screen-2xl mx-5 md:px-20 md:mt-10">
        <div className=" ">
          <h1 className="text-3xl font-semibold">Experience</h1>
          <p className="text-xl mt-2">I've more than 1 years of experiance in below technologies.</p>
        </div>
       
          <div className="rounded-full grid grid-cols-2 md:grid-cols-4 mt-5 ml:5">
            {items.map(({ id, logo, name }) => (
              <div key={id } className=" w-[200px] h-[200px] md:w-[220px] md:[220px ]  cursor-pointer flex flex-col items-center justify-center text-center rounded-full shadow-lg mb-5  hover:scale-110 duration-200 border-[2px] ">
                <img className="w-[100px] rounded-full  " src={logo} alt="" />
                <span className="text-xl font-semibold mt-4 mb-5">{name}</span>
              </div>
            ))}
          </div>
       
      </div>
      <hr />
    </>
  );
}
