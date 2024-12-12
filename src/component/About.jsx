import React from "react";

export default function About() {
 
  return (
    <>
      <div name="About" className="mt-10 md:space-y-3 ml-5 mr-5 md:ml-20 md:mr-20">
        <div>
            
          <h1 className="text-3xl font-semibold">About</h1>
          <p className="">
            Hello, I'm Girish, a passionate Web developer with a keen eye for
            MERN Stack . With a background in IT, I strive to create impactful
            and visually stunning Software solutions that leave a lasting
            impression.
          </p>
        </div>
        <div className="">
          <ul className="space-y-6">
            <li><span className="text-2xl text-green-400 font-semibold"> Education & Training</span>
          <p>
            [Degree/Certification], [Institution], [Year]
            [Degree/Certification], [Institution], [Year] [Relevant Course],
            [Platform/Institution], [Year]
          </p>
         
          
          
          </li>
            <li> <span className="text-2xl text-green-400 font-semibold  ">Skills & Expertise</span>
          <p>
            Proficient in [Programming Languages] Experienced with [Software
            Tools/Technologies] Strong grasp of [Design Principles/Concepts]
            Excellent problem-solving skills Effective communicator and
            collaborator
          </p></li>
            <li><span className="text-2xl text-green-400 font-semibold">Professional Experience</span>
          <p>
            [Job Title], [Company/Organization], [Dates] [Brief description of
            responsibilities and achievements] [Job Title],
            [Company/Organization], [Dates] [Brief description of
            responsibilities and achievements] [Freelance/Contract Work],
            [Client/Organization], [Dates] [Brief description of projects and
            contributions]
          </p></li>
            <li><span className="text-2xl text-green-400 font-semibold">Achievements & Awards</span>
          <p>
            [Award/Recognition], [Organization/Institution], [Year]
            [Achievement], [Organization/Platform], [Year]
          </p></li>
            <li><span className="text-2xl text-green-400 font-semibold space-y-2">Mission Statement</span>
          <p>
            My mission is to leverage my skills and creativity to deliver
            innovative [Your Field] solutions that exceed client expectations
            and contribute positively to the digital landscape. I am committed
            to continuous learning and growth, always seeking new challenges and
            opportunities to expand my horizons.
          </p></li>
          </ul>
          <br />
        </div>
      </div>
      <hr />
    </>
  );
}
